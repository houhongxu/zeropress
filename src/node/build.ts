// 对客户端与服务端同时打包

import { RollupOutput } from 'rollup'
import { build as viteBuild, InlineConfig } from 'vite'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants'
import path from 'path'
import fse from 'fs-extra' // fse不支持具名直接导入函数 https://github.com/jprichardson/node-fs-extra/issues/746#issuecomment-923250293
import { resolveSiteConfig } from './config'
import { SiteConfig } from 'shared/types'
import { createPlugins } from './plugin'
import { Route } from './plugins/vitePluginRoutes'

export async function build(root: string) {
  const siteConfig = await resolveSiteConfig(root, 'build', 'production')

  const [clientBundle] = await bundle(root, siteConfig)

  // 为什么导出js后再导入执行，不能直接导入原tsx文件执行
  // 直接引用 ssr-entry.tsx 是可以的，但不推荐。server-entry 本质上是跑在 node 环境里面的，而框架的代码通过 tsup 构建也是跑在 node 环境，所以在 island 框架里面直接引 server-entry 是可以的。不过不推荐这种做法，尽量把库构建和应用的构建分开，server-entry 应该属于应用构建的范畴
  // 即node文件夹不应该引入runtime文件夹的文件

  // 导入服务端产物的渲染函数
  const SERVER_BUNDLE_PATH = path.join(root, '.temp', 'server-entry.js')
  const { renderInServer, routes } = await import(SERVER_BUNDLE_PATH)

  try {
    await renderPageHtml(renderInServer, routes, root, clientBundle)
  } catch (e) {
    console.log('Render page error / 渲染页面失败 \n', e)
  }
}

/**
 * 客户端与服务端打包
 */
export async function bundle(root: string, siteConfig: SiteConfig) {
  // 配置文件
  const resolveViteConfig = async (
    isServer: boolean,
  ): Promise<InlineConfig> => ({
    root,
    mode: 'production',
    plugins: await createPlugins(siteConfig, undefined, isServer),
    ssr: {
      noExternal: ['react-router-dom'], // 避免node-cjs环境执行esm包，https://cn.vitejs.dev/config/ssr-options.html#ssr-noexternal
    },
    build: {
      minify: false, // TODO minify临时配置方便查看
      ssr: isServer,
      outDir: isServer ? path.join(root, '.temp') : path.join(root, 'build'), // 在目标路径下生成
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm', // 服务端是运行在node所以用cjs
        },
      },
    },
  })

  console.log(`Building client + server bundles / 构建客户端与服务端包中 ...`)

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      viteBuild(await resolveViteConfig(false)),
      viteBuild(await resolveViteConfig(true)),
    ])

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput]
  } catch (e) {
    console.log(e)
  }
}

/**
 * 服务端渲染出入口html
 */
export async function renderPageHtml(
  renderInServer: (routePath: string) => string,
  routes: Route[],
  root: string,
  clientBundle: RollupOutput,
) {
  console.log(`Rendering page in server side / 服务端渲染页面中 ...`)

  // 获取客户端入口chunk
  const clientEntryChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry,
  )

  // 写入每个路由的html的异步任务
  const writeRouteHtmls = routes.map(async (route) => {
    const routePath = route.path

    // 获取包含react应用的构建时的模板html
    const appHtml = renderInServer(routePath)

    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module" src="/${clientEntryChunk?.fileName}"></script>
    </body>
  </html>
  `.trim()

    // 写入服务端html文件
    const fileName = routePath.endsWith('/')
      ? `${routePath}index.html`
      : `${routePath}.html`

    await fse.ensureDir(path.join(root, 'build', path.dirname(fileName)))
    await fse.writeFile(path.join(root, 'build', fileName), html)
  })

  return Promise.all(writeRouteHtmls)
}
