import { getDocs } from '../utils'
import { SiteConfig } from '@/shared/types'
import { Plugin } from 'vite'

interface vitePluginFileChangeOptions {
  siteConfig: SiteConfig
  restartRuntimeDevServer?: () => Promise<void>
}

// markdown增删时
export function vitePluginFileChange({
  siteConfig,
  restartRuntimeDevServer,
}: vitePluginFileChangeOptions): Plugin {
  let preFiles: string[]

  return {
    name: 'vitePluginFileChange',

    async configResolved() {
      preFiles = await getDocs(siteConfig.userConfig.docs)
    },

    async handleHotUpdate(ctx) {
      const curFiles = await getDocs(siteConfig.userConfig.docs)

      if (preFiles.length !== curFiles.length) {
        if (restartRuntimeDevServer) {
          console.log('监听到markdown文件增删，重启服务中:', ctx.file)

          await restartRuntimeDevServer()
        }
      }

      preFiles = curFiles
    },
  }
}
