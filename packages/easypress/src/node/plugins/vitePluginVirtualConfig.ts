import { EasypressSiteConfig } from '../../shared/types'
import { Plugin } from 'vite'

interface vitePluginVirtualConfigOptions {
  siteConfig: EasypressSiteConfig
  restartRuntimeDevServer?: () => Promise<void>
}

// 虚拟模块将node层读取的config数据传递给client层
export function vitePluginVirtualConfig({
  siteConfig,
  restartRuntimeDevServer,
}: vitePluginVirtualConfigOptions): Plugin {
  const virtualModuleId = 'virtual:config'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vitePluginVirtualConfig',
    resolveId(id) {
      if (id === virtualModuleId) {
        // 解析为rollup虚拟模块，避免其他插件load这个id
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(siteConfig.userConfig)}`
      }
    },
    async handleHotUpdate(ctx) {
      const configPath = siteConfig.userConfigPath || ''
      if (ctx.file.includes(configPath)) {
        if (restartRuntimeDevServer) {
          console.log('监听到配置文件更新，重启服务中...')

          await restartRuntimeDevServer()
        }
      }
    },
  }
}
