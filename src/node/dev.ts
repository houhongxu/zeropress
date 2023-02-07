import { createServer as createViteDevServer } from 'vite'
import { pluginIndexHtml } from './vite-plugin/index-html'
import pluginReact from '@vitejs/plugin-react'

/**
 * 创建vite-dev-server实例
 */
export async function createDevServer(root = process.cwd()) {
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
  })
}
