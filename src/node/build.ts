// 对客户端与服务端同时打包

import { RollupOutput } from 'rollup'
import { build as viteBuild, InlineConfig } from 'vite'
import {
  CLIENT_ENTRY_PATH,
  CLIENT_OUTPUT_DIR,
  EXTERNALS,
  MASK_SPLITTER,
  PACKAGE_ROOT_PATH,
  SERVER_ENTRY_PATH,
  SERVER_OUTPUT_DIR,
} from './constants'
import path from 'path'
import fse from 'fs-extra' // fse不支持具名直接导入函数 https://github.com/jprichardson/node-fs-extra/issues/746#issuecomment-923250293
import { resolveSiteConfig } from './config'
import { RenderInServerRelsult, SiteConfig } from 'shared/types'
import { createPlugins } from './plugin'
import { Route } from './plugins/vitePluginRoutes'
import { HelmetData } from 'react-helmet-async'
import { createElement } from 'react'

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
    await renderPageHtmls(renderInServer, routes, root, clientBundle)
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
        external: EXTERNALS,
      },
    },
  })

  console.log(`Bundling client + server bundles / 打包客户端与服务端包中 ...`)

  try {
    const [clientBundle, serverBundle] = await Promise.all([
      viteBuild(resolveViteConfig(false)),
      viteBuild(resolveViteConfig(true)),
    ])
    // 静态资源拷贝到打包路径
    const publicDir = path.join(root, 'public')

    if (await fse.pathExists(publicDir)) {
      await fse.copy(publicDir, path.join(root, CLIENT_OUTPUT_DIR))
    }

    // vendors产物拷贝到打包路径，通过npm script 命令打包出了vendors文件夹所以不用判断是否存在
    await fse.copy(
      path.join(PACKAGE_ROOT_PATH, 'vendors'),
      path.join(root, CLIENT_OUTPUT_DIR),
    )

    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput]
  } catch (e: any) {
    console.error(`Failed to bundle / 打包失败`)
    throw new Error(e)
  }
}

export async function renderPageHtmls(
  renderInServer: (
    routePath: string,
    helmetContext: object,
  ) => Promise<RenderInServerRelsult>,
  routes: Route[],
  root: string,
  clientBundle: RollupOutput,
) {
  console.log(`Rendering page in server side / 服务端渲染页面中 ...`)

  // 获取客户端入口chunk
  const clientEntryChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry,
  )

  // 获取样式资源
  const styleAssets = clientBundle.output.filter(
    (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css'),
  )

  // 添加404页面的路由
  const allRoutes = [
    ...routes,
    {
      path: '/404',
    } as Route, // TODO 规范类型
  ]

  const renderPageHtml = async (route: Route) => {
    const routePath = route.path

    // 标题栏上下文
    const helmetContext = {} as HelmetData['context']

    // 获取包含react应用的构建时的模板html，island组件的数据
    const {
      appHtml,
      islandNameToPropsMap,
      islandProps = [],
    } = await renderInServer(routePath, helmetContext)

    // 获取标题
    const { helmet } = helmetContext

    // 打包island组件，获取island打包代码
    const hasIsland = Object.keys(islandNameToPropsMap).length > 0

    let islandsCode = ''
    if (hasIsland) {
      const islandBundle = await bundleIslands(root, islandNameToPropsMap)
      islandsCode = (islandBundle as RollupOutput).output[0].code
    }

    const normalizeVendorFilename = (fileName: string) =>
      fileName.replace(/\//g, '_')

    // 解决react多实例问题，引入手动预打包的react相关代码 https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script/type/importmap
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      ${helmet?.title?.toString() || ''}
      ${helmet?.meta?.toString() || ''}
      ${helmet?.link?.toString() || ''}
      ${helmet?.style?.toString() || ''}
      <meta name="description" content="xxx">
      ${styleAssets
        .map((item) => `<link rel="stylesheet" href="/${item.fileName}">`)
        .join('\n')}
      <script type="importmap">
        {
          "imports": {
            ${EXTERNALS.map(
              (name) =>
                `"${name}": "/${normalizeVendorFilename(name) + '.js'}"`,
            ).join(',')}
          }
        }
      </script>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module">${islandsCode}</script>
      <script type="module" src="/${clientEntryChunk?.fileName}"></script>
      <script id="island-props">${JSON.stringify(islandProps)}</script>
    </body>
  </html>`.trim()

    const fileName = routePath.endsWith('/')
      ? `${routePath}index.html`
      : `${routePath}.html`

    await fse.ensureDir(path.join(root, 'build', path.dirname(fileName)))
    await fse.writeFile(path.join(root, 'build', fileName), html)
  }
  // 写入每个路由的html的异步任务
  return promiseMap(allRoutes, (route) => renderPageHtml(route), 1)
}

/**
 * 打包island组件
 */
let count = 0
async function bundleIslands(
  root: string,
  islandNameToPropsMap: RenderInServerRelsult['islandNameToPropsMap'],
) {
  // 根据 islandNameToPropsMap 拼接模块代码内容
  const islandInjectCode = `
    ${Object.entries(islandNameToPropsMap)
      .map(
        ([islandName, islandProps]) =>
          `import { ${islandName} } from '${islandProps}';`,
      )
      .join('')}
window.ISLANDS_NAME_TO_PROPS_MAP = { ${Object.keys(islandNameToPropsMap).join(
    ', ',
  )} };
window.ISLAND_PROPS = JSON.parse(
  document.getElementById('island-props').textContent
);
  `

  // 加载我们拼接的 islands 注册模块的代码
  const INJECT_ID = 'virtual:inject'
  const RESOLVED_INJECT_ID = '/0' + INJECT_ID

  return viteBuild({
    mode: 'production',
    esbuild: {
      jsx: 'automatic',
    },
    build: {
      outDir: path.join(root, SERVER_OUTPUT_DIR),
      rollupOptions: {
        input: { [`virtual_inject${count++}`]: INJECT_ID }, // 导入虚拟模块用插件处理 https://rollupjs.org/configuration-options/#input
        external: EXTERNALS,
      },
      minify: false, // TODO 调试用
    },
    plugins: [
      {
        name: 'hhxpress:inject',
        enforce: 'post',
        resolveId(id) {
          if (id.includes(MASK_SPLITTER)) {
            const [importPath, importer] = id.split(MASK_SPLITTER)

            // 关于this.resolve https://rollupjs.org/plugin-development/#resolveid
            // 忽略当前插件让其他插件进行解析
            return this.resolve(importPath, importer, { skipSelf: true })
          }

          if (id === INJECT_ID) {
            return RESOLVED_INJECT_ID
          }
        },
        load(id) {
          if (id === RESOLVED_INJECT_ID) {
            // 加载为虚拟模块
            return islandInjectCode
          }
        },
        generateBundle(_, bundle) {
          // https://rollupjs.org/plugin-development/#generatebundle

          Object.keys(bundle).forEach(
            (key) => bundle[key].type === 'asset' && delete bundle[key],
          )
        },
      },
    ],
  })
}

async function promiseMap(
  list: any[],
  mapper: (item: any, index?: number) => any,
  concurrency = 9,
): Promise<any> {
  // list 为 Iterator，先转化为 Array
  list = Array.from(list)

  return new Promise((resolve) => {
    let currentIndex = 0
    let resolveCount = 0
    let length = list.length
    const result: any[] = []

    function next() {
      const index = currentIndex
      currentIndex++
      Promise.resolve(list[index])
        .then((item) => mapper(item, index))
        .then((resp) => {
          result[index] = resp
          resolveCount++
          if (resolveCount === length) {
            resolve(result)
          }
          if (currentIndex < length) {
            next()
          }
        })
    }

    for (let i = 0; i < concurrency && i < length; i++) {
      next()
    }
  })
}
