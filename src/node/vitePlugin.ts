import { SiteConfig } from 'shared/types'
import { pluginIndexHtml } from './vite-plugin/index-html'
import pluginReact from '@vitejs/plugin-react'
import { pluginConfig } from './vite-plugin/config'
import { pluginRoutes } from './vite-plugin/routes'
import { createPluginMdx } from './vite-plugin/mdx'

export async function createVitePlugins(
  config: SiteConfig,
  restartServer?: () => Promise<void>
) {
  return [
    pluginIndexHtml(),
    pluginReact({
      jsxRuntime: 'automatic',
    }),
    pluginConfig(config, restartServer),
    pluginRoutes({
      root: config.root,
    }),
    await createPluginMdx(),
  ]
}
