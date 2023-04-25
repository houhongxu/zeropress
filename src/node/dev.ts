// 热更新 https://cn.vitejs.dev/guide/api-javascript.html#vitedevserver

import { createServer } from 'vite'
import { vitePluginIndexHtml } from './plugins/vitePluginIndexHtml'
import vitePluginReact from '@vitejs/plugin-react' // vitePluginReact来支持边界到react的热更新
import { resolveSiteConfig } from './config'
import { vitePluginUserConfig } from './plugins/vitePluginConfig'
import { PACKAGE_ROOT_PATH } from './constants'

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
    root: PACKAGE_ROOT_PATH, // 避免vite静态资源服务与路由冲突，如服务路径为docs， :5173/a 经过路由逻辑返回:5173/a.tsx，而静态资源会让:5173/a.tsx返回文件内容，切换静态资源路径不在docs可以避免
    server: {
      host: true, // 开启局域网与公网ip
    },
    plugins: [
      vitePluginIndexHtml(),
      vitePluginReact(),
      vitePluginUserConfig(siteConfig, restartServer),
    ],
  })
}
