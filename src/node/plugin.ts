import { SiteConfig } from 'shared/types'
import { vitePluginIndexHtml } from './plugins/vitePluginIndexHtml'
import vitePluginReact from '@vitejs/plugin-react' // vitePluginReact来支持边界到react的热更新
import { vitePluginUserConfigHMR } from './plugins/vitePluginUserConfigHMR'
import { vitePluginRoutes } from './plugins/vitePluginRoutes'
import { createVitePluginMdx } from './plugins/vitePluginMdx'
import UnoCSS from 'unocss/vite'
import { unoConfig } from './unocss.config'
import path from 'path'
import { ISLAND_JSX_RUNTIME_PATH, PACKAGE_ROOT_PATH } from './constants'
import { babelPluginIsland } from './plugins/babelPluginIsland'
import { vitePluginIslandTransform } from './plugins/vitePluginIslandTransform'

export function createPlugins(
  siteConfig: SiteConfig,
  restartServer?: () => Promise<void>,
  isSSR = false,
) {
  return [
    UnoCSS(unoConfig), // https://unocss.dev/integrations/vite#react
    vitePluginIndexHtml(),
    vitePluginUserConfigHMR(siteConfig, restartServer),
    vitePluginRoutes(siteConfig.root, isSSR),
    createVitePluginMdx(),
    vitePluginIslandTransform(isSSR),
    isSSR
      ? []
      : vitePluginReact({
          jsxRuntime: 'automatic',
          jsxImportSource: isSSR ? ISLAND_JSX_RUNTIME_PATH : 'react',
          babel: {
            plugins: [babelPluginIsland],
          },
        }),
  ]
}
