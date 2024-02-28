import { baseConfig } from './config'
import {
  CLIENT_ENTRY_PATH,
  CLIENT_OUT_PATH,
  HTML_PATH,
  ROOT_PATH,
  SERVER_ENTRY_PATH,
  SERVER_OUT_PATH,
} from './consts'
import { createPlugins } from './plugins'
import fse from 'fs-extra'
import path from 'path'
import { RouteObject } from 'react-router-dom'
import { RollupOutput } from 'rollup'
import { SiteConfig } from 'shared/types'
import { build } from 'vite'

export async function buildRuntime({
  siteConfig,
  docs,
}: {
  docs: string
  siteConfig: SiteConfig
}) {
  // 分为运行时的client构建水合的js与server构建渲染html的js
  const [clientBundle, serverBundle] = await Promise.all([
    viteBuild({ siteConfig, docs }),
    viteBuild({ siteConfig, isServer: true, docs }),
  ])

  // 渲染html
  await renderHtmls({ siteConfig, clientBundle, serverBundle })
}

/**
 * vite构建
 */
function viteBuild({
  isServer = false,
  docs,
  siteConfig,
}: {
  isServer?: boolean
  docs: string
  siteConfig: SiteConfig
}) {
  return build({
    mode: 'production',
    root: ROOT_PATH, // 获取postcss等配置文件
    plugins: createPlugins({ siteConfig, docs }),
    build: {
      ssr: isServer,
      outDir: isServer
        ? path.join(ROOT_PATH, SERVER_OUT_PATH)
        : path.join(siteConfig.root, CLIENT_OUT_PATH),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? 'server-entry.js' : 'client-entry.js',
          format: 'es',
        },
      },
      ...baseConfig,
    },
  }) as Promise<RollupOutput>
}

/**
 * 渲染多路由的html并写入client文件夹
 * @description 写入client文件夹就是ssg和ssr区别，ssr是渲染后将html在服务器接口中返回
 */
async function renderHtmls({
  clientBundle,
  serverBundle,
  siteConfig,
}: {
  clientBundle: RollupOutput
  serverBundle: RollupOutput
  siteConfig: SiteConfig
}) {
  // 获取客户端和服务端入口chunk
  const clientEntryChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry,
  )
  const serverEntryChunk = serverBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry,
  )

  if (!clientEntryChunk || !serverEntryChunk) {
    throw new Error('构建产物为空')
  }

  // 获取样式资源
  const styleAssets = clientBundle.output.filter(
    (chunk) => chunk.type === 'asset' && chunk.fileName.endsWith('.css'),
  )

  const serverEntryPath = path.join(
    ROOT_PATH,
    SERVER_OUT_PATH,
    serverEntryChunk?.fileName,
  )

  // 部署后服务路径是CLIENT_OUT_PATH文件夹所以相对路径就可以了
  const clientEntryPath = `/${clientEntryChunk?.fileName}`

  const { render, routes } = (await import(serverEntryPath)) as {
    render: (location: string) => string
    routes: RouteObject[]
  }

  const template = await fse.readFile(HTML_PATH, 'utf-8')

  // mpa路由，每个路由都渲染为html
  await Promise.all(
    routes.map(async (route) => {
      const location = route.path === '/' ? '/index' : route.path || '/index'

      const rendered = render(location)

      const html = template
        .replace('<!--app-html-->', rendered)
        .replace(
          '</body>',
          `
    <script type="module" src="${clientEntryPath}"></script>
    </body>
    `,
        )
        .replace(
          '</head>',
          styleAssets
            .map((asset) => `<link rel="stylesheet" href="/${asset.fileName}">`)
            .join('\n'),
        )

      await fse.ensureDir(path.join(siteConfig.root, CLIENT_OUT_PATH))
      await fse.writeFile(
        path.join(siteConfig.root, `${CLIENT_OUT_PATH}${location}.html`),
        html,
      )
    }),
  )
}
