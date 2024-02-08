import { CLIENT_ENTRY_PATH, HTML_PATH, SERVER_ENTRY_PATH } from './consts'
import fse from 'fs-extra'
import path from 'path'
import { build } from 'vite'

export async function buildRuntime({ root = process.cwd() }) {
  // 分为运行时的client构建水合的js与server构建渲染html的js

  await Promise.all([viteBuild({ root }), viteBuild({ root, isServer: true })])

  // 渲染html
  await renderHtml({ root })
}

/**
 * vite构建
 */
function viteBuild({ root = process.cwd(), isServer = false }) {
  return build({
    mode: 'production',
    root,
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
 * 渲染html并写入client文件夹
 * @description 写入client文件夹就是ssg和ssr区别，ssr是渲染后将html在服务器接口中返回
 */
async function renderHtml({ root = process.cwd() }) {
  const serverEntryPath = path.join(root, './server', './server-entry.js')
  // 服务路径是client文件夹所以相对路径就可以了， vite build lib 打包产物是mjs
  const clientEntryPath = './client-entry.js'

  const { render } = await import(serverEntryPath)

  const rendered = render()

  const template = await fse.readFile(HTML_PATH, 'utf-8')

  const html = template.replace('<!--app-html-->', rendered).replace(
    '</body>',
    `
    <script type="module" src="${clientEntryPath}"></script>
    \n
    </body>
    `,
  )

  await fse.ensureDir(path.join(root, 'client'))
  await fse.writeFile(path.join(root, 'client/index.html'), html)
  await fse.remove(path.join(root, 'server'))
}
