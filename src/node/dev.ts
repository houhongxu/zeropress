import { createServer as createViteDevServer } from 'vite'

/**
 * 创建vite-dev-server实例
 */
export async function createDevServer(root = process.cwd()) {
  return createViteDevServer({
    root,
  })
}
