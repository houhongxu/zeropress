import { PACKAGE_ROOT_PATH, PUBLIC_DIR_PATH } from 'node/constants'
import path, { relative } from 'path'
import { Plugin } from 'vite'
import { SiteConfig } from 'shared/types/index'
import fs from 'fs-extra'
import sirv from 'sirv'

const SITE_DATA_ID = 'hhx-docs:site-data'
const RESOLVED_SITE_DATA_ID = '\0' + 'hhx-docs:site-data'

/**
 * 通过虚拟模块使客户端可以访问配置文件并处理配置文件
 */
export function pluginConfig(
  config: SiteConfig,
  restartServer?: () => Promise<void>
): Plugin {
  return {
    name: 'hhx-docs:config',
    // 处理配置文件，固定文件根目录来避免vite静态资源服务影响路由，解析ts路径别名@runtime
    config() {
      return {
        root: PACKAGE_ROOT_PATH,
        resolve: {
          alias: {
            '@runtime': path.join(
              PACKAGE_ROOT_PATH,
              'src',
              'runtime',
              'index.ts'
            ),
          },
        },
        css: {
          modules: {
            localsConvention: 'camelCaseOnly',
          },
        },
      }
    },
    // 解析模块id
    resolveId(id) {
      if (id === SITE_DATA_ID) {
        return RESOLVED_SITE_DATA_ID
      }
    },
    load(id) {
      if (id === RESOLVED_SITE_DATA_ID) {
        return `export default ${JSON.stringify(config.siteData)}`
      }
    },
    // 处理热更新
    async handleHotUpdate(ctx) {
      // 监听的文件路径
      const customWatchedFiles = [config.configPath]

      // 判断文件变化是否包含
      const include = (id: string) =>
        customWatchedFiles.some((file) => id.includes(file))

      if (include(ctx.file)) {
        console.log(
          `\n${relative(
            config.root,
            ctx.file
          )} changed, restarting server... / \n${relative(
            config.root,
            ctx.file
          )} 文件变化, 重启服务中。。。`
        )

        // 重点: 重启 Dev Server需要重新读取配置
        await restartServer()
      }
    },

    configureServer(server) {
      const publicDir = path.join(config.root, PUBLIC_DIR_PATH)
      if (fs.pathExistsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir))
      }
    },
  }
}
