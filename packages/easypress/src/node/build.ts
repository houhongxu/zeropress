import { EasypressSiteConfig } from '../shared/types'
import { CLIENT_ENTRY_PATH, HTML_PATH, SERVER_ENTRY_PATH } from './consts'
import { createPlugins } from './createPlugins'
import fse from 'fs-extra'
import path from 'path'
import { RouteObject } from 'react-router-dom'
import { build } from 'vite'

export async function buildRuntime({
  root = process.cwd(),
  siteConfig,
}: {
  root?: string
  siteConfig: EasypressSiteConfig
}) {
  // 分为运行时的client构建水合的js与server构建渲染html的js
  await Promise.all([
    viteBuild({ root, siteConfig }),
    viteBuild({ root, siteConfig, isServer: true }),
  ])

  // 渲染html
  await renderHtmls({ root })
}

/**
 * vite构建
 */
function viteBuild({
  root = process.cwd(),
  isServer = false,
  siteConfig,
}: {
  root?: string
  isServer?: boolean
  siteConfig: EasypressSiteConfig
}) {
  return build({
    mode: 'production',
    root,
    plugins: createPlugins({ root, siteConfig }),
    build: {
      ssr: isServer,
      outDir: isServer ? 'server' : 'client',
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? 'server-entry.js' : 'client-entry.js',
          format: isServer ? 'cjs' : 'es',
        },
      },
    },
  })
}

/**
 * 渲染多路由的html并写入client文件夹
 * @description 写入client文件夹就是ssg和ssr区别，ssr是渲染后将html在服务器接口中返回
 */
async function renderHtmls({ root = process.cwd() }) {
  const serverEntryPath = path.join(root, './server', './server-entry.js')
  // 服务路径是client文件夹所以相对路径就可以了
  const clientEntryPath = './client-entry.js'

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

      const html = template.replace('<!--app-html-->', rendered).replace(
        '</body>',
        `
    <script type="module" src="${clientEntryPath}"></script>
    \n
    </body>
    `,
      )

      await fse.ensureDir(path.join(root, 'client'))
      await fse.writeFile(path.join(root, `client${location}.html`), html)
    }),
  )
}
