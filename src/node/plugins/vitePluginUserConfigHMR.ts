// 读取 用户配置 给ui消费
import { PACKAGE_ROOT_PATH, SUPPORT_CONFIG_FILE } from '../constants'
import path from 'path'
import { Plugin } from 'vite'
import { SiteConfig } from 'shared/types'
import fse from 'fs-extra'
import sirv from 'sirv'
import FastGlob from 'fast-glob'

const CONFIG_ID = 'virtual:user-config'
const RESOLVED_CONFIG_ID = '\0' + 'virtual:user-config' // vite继承的rollup生态的约定https://cn.vitejs.dev/guide/api-plugin.html#virtual-modules-convention

export function vitePluginUserConfigHMR(
  siteConfig: SiteConfig,
  restartServer?: () => Promise<void>,
): Plugin {
  const { root, userConfigPath, userConfig, userConfigDeps = [] } = siteConfig
  let lastFiles: string[] = []
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
        // 解决导入模块报错找不到包的default的问题
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react-dom/client',
            'react-router-dom',
            'react/jsx-runtime',
            'react-helmet-async',
            'lodash-es',
            'classnames',
          ],
        },
        resolve: {
          alias: {
            runtime: path.join(PACKAGE_ROOT_PATH, 'src', 'runtime'),
            shared: path.join(PACKAGE_ROOT_PATH, 'src', 'shared'),
          },
        },
      }
    },
    async handleHotUpdate(ctx) {
      const files = FastGlob.sync(['**/*.{js,jsx,ts,tsx,md,mdx}'], {
        cwd: root,
        absolute: true,
        deep: 3, // 仅支持一层文件夹
        ignore: [
          '**/node_modules/**',
          '**/build/**',
          '**/.temp/**',
          ...SUPPORT_CONFIG_FILE,
        ],
      })

      lastFiles = files

      const hasChange =
        lastFiles.length !== files.length ||
        lastFiles.some((lastFile, index) => lastFile !== files[index])

      // 是插件的热更新而不是react客户端的热更新，热更新触发是相对于命令行传入的根目录
      const watchedFiles = [userConfigPath, ...userConfigDeps].filter(
        Boolean,
      ) as string[] // 监听文件

      const include = (id: string) =>
        watchedFiles.some((path) => id.includes(path))

      if (include(ctx.file) || hasChange) {
        if (!restartServer) return

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
    configureServer(server) {
      // https://cn.vitejs.dev/guide/api-plugin.html#configureserver
      // 兼容基于connect的中间件 https://cn.vitejs.dev/guide/ssr.html#setting-up-the-dev-server
      // 基于connect的静态资源服务中间件 https://github.com/lukeed/sirv
      const publicDir = path.join(siteConfig.root, 'public')

      if (fse.pathExistsSync(publicDir)) {
        server.middlewares.use(sirv(publicDir))
      }
    },
  }
}
