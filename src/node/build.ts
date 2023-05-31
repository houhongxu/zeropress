// 对客户端与服务端同时打包

import { RollupOutput } from 'rollup'
import { build as viteBuild, InlineConfig } from 'vite'
import {
  CLIENT_ENTRY_PATH,
  CLIENT_OUTPUT_DIR,
  MASK_SPLITTER,
  SERVER_ENTRY_PATH,
  SERVER_OUTPUT_DIR,
} from './constants'
import path from 'path'
import fse from 'fs-extra' // fse不支持具名直接导入函数 https://github.com/jprichardson/node-fs-extra/issues/746#issuecomment-923250293
import { resolveSiteConfig } from './config'
import { SiteConfig } from 'shared/types'
import { createPlugins } from './plugin'
import { Route } from './plugins/vitePluginRoutes'
import { Plugin } from 'vite'

export async function build(root: string) {
  const siteConfig = await resolveSiteConfig(
    root,
    CLIENT_OUTPUT_DIR,
    'production',
  )

  const [clientBundle] = await bundle(root, siteConfig)

  // 为什么导出js后再导入执行，不能直接导入原tsx文件执行
  // 直接引用 ssr-entry.tsx 是可以的，但不推荐。entry-server 本质上是跑在 node 环境里面的，而框架的代码通过 tsup 构建也是跑在 node 环境，所以在 island 框架里面直接引 server-entry 是可以的。不过不推荐这种做法，尽量把库构建和应用的构建分开，server-entry 应该属于应用构建的范畴
  // 即node文件夹不应该引入runtime文件夹的文件

  // 导入服务端产物的渲染函数
  const SERVER_BUNDLE_PATH = path.join(
    root,
    SERVER_OUTPUT_DIR,
    'entry-server.js',
  )
  const { renderInServer, routes } = await import(SERVER_BUNDLE_PATH)

  try {
    await renderPageHtml(renderInServer, routes, root, clientBundle)
  } catch (e: any) {
    console.log('Render page error / 渲染页面失败')
    throw new Error(e)
  }
}

/**
 * 客户端与服务端打包
 */
export async function bundle(
  root: string,
  siteConfig: SiteConfig,
): Promise<[RollupOutput, RollupOutput]> {
  // 配置文件
  const resolveViteConfig = (isServer: boolean): InlineConfig => ({
    root,
    mode: 'production',
    plugins: createPlugins(siteConfig, undefined, isServer),
    ssr: {
      noExternal: ['react-router-dom', 'lodash-es'], // 避免node-cjs环境执行esm包，https://cn.vitejs.dev/config/ssr-options.html#ssr-noexternal
    },
    build: {
      minify: false, // TODO minify临时配置方便查看
      ssr: isServer,
      outDir: isServer
        ? path.join(root, SERVER_OUTPUT_DIR)
        : path.join(root, CLIENT_OUTPUT_DIR), // 在目标路径下生成
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm', // 服务端是运行在node所以用cjs
        },
      },
    },
  })

  console.log(`Bundling client + server bundles / 打包客户端与服务端包中 ...`)

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      viteBuild(resolveViteConfig(false)),
      viteBuild(resolveViteConfig(true)),
    ])

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput]
  } catch (e: any) {
    console.error(`Failed to bundle / 打包失败`)
    throw new Error(e)
  }
}

/**
 * 服务端渲染出入口html
 */
export async function renderPageHtml(
  renderInServer: (routePath: string) => Promise<{
    appHtml: string
    islandProps: any[]
    islandNameToPropsMap: Record<string, string>
  }>,
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

    // 获取包含react应用的构建时的模板html，island组件的数据
    const {
      appHtml,
      islandProps = [],
      islandNameToPropsMap,
    } = await renderInServer(routePath)

    // 获取样式资源
    const styleAssets = clientBundle.output.filter(
      (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css'),
    )
    // 打包island组件，获取island打包代码
    const islandBundle = await bundleIslands(root, islandNameToPropsMap)
    const islandCode = (islandBundle as RollupOutput).output[0].code

    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
      ${styleAssets
        .map((assets) => `<link rel="stylesheet" href="/${assets.fileName}">`)
        .join('\n')}
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module">${islandCode}</script>
      <script type="module" src="/${clientEntryChunk?.fileName}"></script>
      <script id="island-props">${JSON.stringify(islandProps)}</script>
    </body>
  </html>
  `.trim()

    // 写入服务端html文件
    const fileName = routePath.endsWith('/')
      ? `${routePath}index.html`
      : `${routePath}.html`

    await fse.ensureDir(
      path.join(root, CLIENT_OUTPUT_DIR, path.dirname(fileName)),
    )
    await fse.writeFile(path.join(root, CLIENT_OUTPUT_DIR, fileName), html)
  })

  return Promise.all(writeRouteHtmls)
}

/**
 * 打包island组件
 */
async function bundleIslands(
  root: string,
  islandNameToPropsMap: Record<string, string>,
) {
  // 根据 islandNameToPropsMap 拼接模块代码内容
  const islandInjectCode = `${Object.entries(islandNameToPropsMap)
    .map(
      ([islandName, islandProp]) =>
        `import { ${islandName} } from '${islandProp}'`,
    )
    .join('')}
    window['ISLANDS_NAME_TO_PROPS_MAP'] = {${Object.keys(
      islandNameToPropsMap,
    ).join(',')}}
    window['ISLAND_PROPS'] = JSON.parse(
      document.getElementById('island-props').textContent
    );
    `

  // 加载我们拼接的 islands 注册模块的代码
  const INJECT_ID = 'virtual:inject'

  const plugin: Plugin = {
    name: 'hhxpress:inject',
    enforce: 'post', // 在所有插件后调用 https://cn.vitejs.dev/guide/api-plugin.html#plugin-ordering
    resolveId(id) {
      // 处理island组件
      if (id.includes(MASK_SPLITTER)) {
        const [importPath, importer] = id.split(MASK_SPLITTER)

        // 关于this.resolve https://rollupjs.org/plugin-development/#resolveid
        // 忽略当前插件让其他插件进行解析
        return this.resolve(importPath, importer, { skipSelf: true })
      }

      // 解析虚拟模块
      if (id === INJECT_ID) {
        return id
      }
    },
    load(id) {
      if (id === INJECT_ID) {
        return islandInjectCode
      }
    },
    generateBundle(_, bundle) {
      // https://rollupjs.org/plugin-development/#generatebundle
      Object.keys(bundle).forEach(
        (key) => bundle[key].type === 'asset' && delete bundle[key],
      )
    },
  }

  // 静态资源拷贝到打包路径
  const publicDir = path.join(root, 'public')
  if (fse.pathExistsSync(publicDir)) {
    await fse.copy(publicDir, path.join(root, CLIENT_OUTPUT_DIR))
  }

  return viteBuild({
    mode: 'production',
    build: {
      outDir: path.join(root, SERVER_OUTPUT_DIR),
      rollupOptions: {
        input: INJECT_ID, // 导入虚拟模块用插件处理 https://rollupjs.org/configuration-options/#input
      },
    },
    plugins: [plugin],
  })
}
