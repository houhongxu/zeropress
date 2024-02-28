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
    pluginReact({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }), // 根据热更新规则，仅导出组件时才能保证热更新正确，因为组件副作用是确定的，所以mdx导出frontmatter等对象会提示但是仍然尝试生效，这规则是react refresh特性，所以webpack热更新插件也是这样 https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#consistent-components-exports https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH, // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ docs }),
    tsconfigPaths(), // vite-env.d.ts中declare虚拟模块引入的类型需要绝对路径，所以使用路径别名插件解析tsconfig的baseurl
  ]
}
