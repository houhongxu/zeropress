// 热更新

import { createServer } from 'vite'

/**
 * 创建vite静态服务
 * @description 对vite的jsapi-createServer进行参数处理
 */
export function createViteServer(root = process.cwd()) {
  return createServer({
    root, // root配置默认为process.cwd()，并接受相对路径，不需要处理
  })
}
