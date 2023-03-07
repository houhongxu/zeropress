import { SiteConfig } from 'shared/types'
import { pluginIndexHtml } from './vitePlugins/indexHtml'
import pluginReact from '@vitejs/plugin-react'
import { pluginConfig } from './vitePlugins/config'
import { pluginRoutes } from './vitePlugins/routes'
import { createPluginMdx } from './vitePlugins/mdx'
/** */
export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false
) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic',
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
      isSSR,
    }),
    await createPluginMdx(),
  ]
}
