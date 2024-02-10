import { resolveSiteConfig } from './config'
import { CLIENT_ENTRY_PATH, HTML_PATH } from './consts'
import { vitePluginServeHtml, vitePluginVirtualConfig } from './plugins'
import pluginReact from '@vitejs/plugin-react'
import { createServer } from 'vite'

// 因为是ssg所以dev使用传统的服务模式，如果是ssr dev也需要服务端返回html
export async function createRuntimeDevServer({
  root = process.cwd(),
  restartRuntimeDevServer,
}: {
  root?: string
  restartRuntimeDevServer: () => Promise<void>
}) {
  const siteConfig = await resolveSiteConfig({
    root,
    mode: 'development',
    command: 'serve',
  })

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
      vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    ],
  })
}
