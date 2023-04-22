// 热更新 https://cn.vitejs.dev/guide/api-javascript.html#vitedevserver

import { createServer } from 'vite'
import { vitePluginIndexHtml } from './plugins/vitePluginIndexHtml'
import vitePluginReact from '@vitejs/plugin-react' // vitePluginReact来支持边界到react的热更新
import { resolveConfig } from './config'

/**
 * 创建vite静态服务
 * @description 对vite的jsapi-createServer进行参数处理
 */
export async function createViteServer(root: string) {
  const config = await resolveConfig(root, 'serve', 'development')
  console.log(config)

  return createServer({
    root, // root配置默认为process.cwd()，并接受相对路径，不需要处理
    server: {
      host: true, // 开启局域网与公网ip
    },
    plugins: [vitePluginIndexHtml(), vitePluginReact()],
  })
}
