import {
  CLIENT_ENTRY_PATH,
  CLIENT_OUT_PATH,
  HTML_PATH,
  PUBLIC_PATH,
  ROOT_PATH,
  SERVER_ENTRY_PATH,
  SERVER_OUT_PATH,
} from './consts'
import { createPlugins } from './plugins'
import { tailwindcssConfig } from './tailwind'
import { SiteConfig } from '@/shared/types'
import autoprefixer from 'autoprefixer'
import fse from 'fs-extra'
import path from 'path'
import { HelmetData } from 'react-helmet-async'
import { RouteObject } from 'react-router-dom'
import { RollupOutput } from 'rollup'
import tailwindcss from 'tailwindcss'
import { build } from 'vite'

export async function buildRuntime({ siteConfig }: { siteConfig: SiteConfig }) {
  // 删除旧产物
  console.log('删除旧产物：', CLIENT_OUT_PATH)
  await fse.remove(CLIENT_OUT_PATH)

  // 分为运行时的client构建水合的js与server构建渲染html的js
  console.log('构建js文件...')
  const [clientBundle, serverBundle] = await Promise.all([
    viteBuild({ siteConfig }),
    viteBuild({ siteConfig, isServer: true }),
  ])

  // 渲染html
  console.log('构建html文件...')
  await renderHtmls({ siteConfig, clientBundle, serverBundle })
}

/**
 * vite构建
 */
function viteBuild({
  isServer = false,
  siteConfig,
}: {
  isServer?: boolean
  siteConfig: SiteConfig
}) {
  return build({
    mode: 'production',
    base: './',
    root: ROOT_PATH, // 获取tsconfig.json等配置文件
    plugins: createPlugins({ siteConfig }),
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
      commonjsOptions: { include: 'node_modules/react-helmet-async' },
    },
    // 配置tailwindcss
    css: {
      postcss: { plugins: [tailwindcss(tailwindcssConfig), autoprefixer({})] },
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

  // 静态资源拷贝到打包路径
  if (await fse.exists(PUBLIC_PATH)) {
    await fse.copy(PUBLIC_PATH, path.join(CLIENT_OUT_PATH))
  }

  const serverEntryPath = path.join(
    ROOT_PATH,
    SERVER_OUT_PATH,
    serverEntryChunk?.fileName,
  )

  // 部署后服务路径是CLIENT_OUT_PATH文件夹所以相对路径就可以了
  const clientEntryPath = `/${clientEntryChunk?.fileName}`

  // 标题上下文
  const helmetContext = {} as HelmetData['context']

  const { render, routes } = (await import(serverEntryPath)) as {
    render: (
      location: string,
      helmetContext: HelmetData['context'],
    ) => Promise<string>
    routes: RouteObject[]
  }

  // 获取标题
  const { helmet } = helmetContext

  const template = await fse.readFile(HTML_PATH, 'utf-8')

  // mpa路由，每个路由都渲染为html
  await Promise.all(
    routes.map(async (route) => {
      const file = route.path === '/' ? '/index.html' : route.path

      const relativeFilePath = `${CLIENT_OUT_PATH}${file}`

      const helmetContext = {} as HelmetData['context']

      const rendered = await render(route.path || '/', helmetContext)

      const html = template
        .replace('<title>ZEROPRESS</title>', helmet?.title?.toString() || '')
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

      fse
        .ensureDir(path.join(siteConfig.root, path.dirname(relativeFilePath)))
        .catch((e) => console.log('client文件夹不存在：', e))
        .then(() =>
          fse.writeFile(path.join(siteConfig.root, relativeFilePath), html),
        )
        .catch((e) => console.log('html写入失败', e))
    }),
  )
}
