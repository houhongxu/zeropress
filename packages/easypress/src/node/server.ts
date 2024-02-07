import { CLIENT_ENTRY_PATH, HTML_PATH } from './constants'
import { vitePluginServeHtml } from './plugins'
import pluginReact from '@vitejs/plugin-react'

export async function createRuntimeDevServer({ root = process.cwd() }) {
  // vite启用cjs api 所以使用await import导入esm api https://cn.vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated
  const { createServer } = await import('vite')

  return createServer({
    root,
    server: {
      host: true, // 开启局域网与公网ip,
    },
    plugins: [
      pluginReact(),
      vitePluginServeHtml({
        templatePath: HTML_PATH,
        // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
        entry: CLIENT_ENTRY_PATH,
      }),
    ],
  })
}
