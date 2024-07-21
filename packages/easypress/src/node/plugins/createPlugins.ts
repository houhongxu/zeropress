import { CLIENT_ENTRY_PATH, HTML_PATH } from '../consts'
import { vitePluginMdx } from './vitePluginMdx'
import { vitePluginServeHtml } from './vitePluginServeHtml'
import { vitePluginVirtualConfig } from './vitePluginVirtualConfig'
import { vitePluginVirtualRoutes } from './vitePluginVirtualRoutes'
import pluginReact from '@vitejs/plugin-react'
import { SiteConfig } from 'shared/types'
import { PluginOption } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export function createPlugins({
  docs,
  siteConfig,
  restartRuntimeDevServer,
}: {
  docs: string
  siteConfig: SiteConfig
  restartRuntimeDevServer?: () => Promise<void>
}): PluginOption[] {
  return [
    vitePluginMdx(),
    pluginReact({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }), // mdx接入hmr与react-refresh，hmr生效，但是react-refresh失效
    // vite https://github.com/vitejs/@vitejs/plugin-react/tree/main/packages/plugin-react#consistent-components-exports 中提到的，“为了更轻松地将简单常量与组件一起导出，模块仅在其值发生变化时才会失效”，所以mdx导出的复杂变量toc或者frontmatter会导致react-refresh失效，具体原因是react-refresh避免复杂变量的副作用
    // webpack也提到了 https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH, // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ siteConfig, docs }),
    tsconfigPaths(), // vite-env.d.ts中declare虚拟模块引入的类型需要绝对路径，所以使用路径别名插件解析tsconfig的baseurl
  ]
}
