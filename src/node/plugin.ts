import { SiteConfig } from 'shared/types'
import { vitePluginIndexHtml } from './plugins/vitePluginIndexHtml'
import vitePluginReact from '@vitejs/plugin-react' // vitePluginReact来支持边界到react的热更新
import { vitePluginUserConfig } from './plugins/vitePluginConfig'
import { vitePluginRoutes } from './plugins/vitePluginRoutes'
import { createVitePluginMdx } from './plugins/vitePluginMdx'
import UnoCSS from 'unocss/vite'
import unoConfig from './unocss.config'

export function createPlugins(
  siteConfig: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false,
) {
  return [
    UnoCSS(unoConfig), // https://unocss.dev/integrations/vite#react
    vitePluginIndexHtml(),
    vitePluginReact(),
    vitePluginUserConfig(siteConfig, restartServer),
    vitePluginRoutes(siteConfig.root, isSSR),
    createVitePluginMdx(),
  ]
}
