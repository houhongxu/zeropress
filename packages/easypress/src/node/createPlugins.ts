import { EasypressSiteConfig } from '../shared/types'
import { CLIENT_ENTRY_PATH, HTML_PATH } from './consts'
import { vitePluginServeHtml, vitePluginVirtualConfig } from './plugins'
import { vitePluginVirtualRoutes } from './plugins/vitePluginVirtualRoutes'
import pluginReact from '@vitejs/plugin-react'

export function createPlugins({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer,
}: {
  root?: string
  siteConfig: EasypressSiteConfig
  restartRuntimeDevServer?: () => Promise<void>
}) {
  return [
    pluginReact(),
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
      entry: CLIENT_ENTRY_PATH,
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ root }),
  ]
}
