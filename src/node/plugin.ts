import { SiteConfig } from 'shared/types'
import { vitePluginIndexHtml } from './plugins/vitePluginIndexHtml'
import vitePluginReact from '@vitejs/plugin-react' // vitePluginReact来支持边界到react的热更新
import { vitePluginUserConfig } from './plugins/vitePluginConfig'
import { vitePluginRoutes } from './plugins/vitePluginRoutes'
import { createVitePluginMdx } from './plugins/vitePluginMdx'

export function createPlugins(
  siteConfig: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false,
) {
  return [
    vitePluginIndexHtml(),
    vitePluginReact(),
    vitePluginUserConfig(siteConfig, restartServer),
    vitePluginRoutes(siteConfig.root, isSSR),
    createVitePluginMdx(),
  ]
}
