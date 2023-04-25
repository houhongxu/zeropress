// 读取用户配置给ui消费
import { PACKAGE_ROOT_PATH } from 'node/constants'
import path from 'path'
import { Plugin } from 'vite'
import { SiteConfig } from '../../shared/types'

const CONFIG_ID = 'virtual:user-config'
const RESOLVED_CONFIG_ID = '\0' + 'virtual:user-config' // vite继承的rollup生态的约定https://cn.vitejs.dev/guide/api-plugin.html#virtual-modules-convention

export function vitePluginUserConfig(
  siteConfig: SiteConfig,
  restartServer?: () => Promise<void>,
): Plugin {
  const { root, userConfigPath, userConfig } = siteConfig
  return {
    name: 'hhxpress:vite-plugin-user-config',
    resolveId(id) {
      if (id === CONFIG_ID) {
        return RESOLVED_CONFIG_ID
      }
    },
    load(id) {
      if (id === RESOLVED_CONFIG_ID) {
        return `export default ${JSON.stringify(userConfig)}`
      }
    },
    config() {
      // 配置路径别名的解析
      return {
        root: PACKAGE_ROOT_PATH,
        resolve: {
          alias: {
            runtime: path.join(PACKAGE_ROOT_PATH, 'src', 'runtime'),
            'default-theme': path.join(
              PACKAGE_ROOT_PATH,
              'src',
              'default-theme',
            ),
          },
        },
      }
    },
    async handleHotUpdate(ctx) {
      // 是插件的热更新而不是react客户端的热更新，热更新触发是相对于命令行传入的根目录
      const watchedFiles = [userConfigPath] // 监听配置文件
      const include = (id: string) =>
        watchedFiles.some((path) => id.includes(path))

      if (include(ctx.file)) {
        console.log(
          `\n${path.relative(
            root,
            ctx.file,
          )}\n changed, restarting server / 文件变化，重启服务中 ...`,
        )

        // 重启 Dev Server
        await restartServer()
      }
    },
  }
}
