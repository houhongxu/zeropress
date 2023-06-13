// 热更新 https://cn.vitejs.dev/guide/api-javascript.html#vitedevserver

import { createServer } from 'vite'
import { resolveSiteConfig } from './config'
import { PACKAGE_ROOT_PATH } from './constants'
import { createPlugins } from './plugin'

/**
 * 创建vite静态服务
 * @description 对vite的jsapi-createServer进行参数处理
 */
export async function createViteServer(
  root: string,
  restartServer: () => Promise<void>,
) {
  const siteConfig = await resolveSiteConfig(root, 'serve', 'development')

  return createServer({
    root: PACKAGE_ROOT_PATH, // 避免vite静态资源服务与路由冲突，如服务路径为tsx返回文件内容，切换静态资源路径不在site可以避免， :5173/a 经过路由逻辑返回:5173/a.tsx，而静态资源会让:5173/a.tsx返回文件内容，切换静态资源路径不在site可以避免
    server: {
      host: true, // 开启局域网与公网ip,
    },
    plugins: createPlugins(siteConfig, restartServer),
  })
}
