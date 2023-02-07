import { createServer as createViteDevServer } from 'vite'
import { pluginIndexHtml } from './vite-plugin/index-html'
import pluginReact from '@vitejs/plugin-react'
import { PACKAGE_ROOT_PATH } from './constants'
import { resolveConfig } from './config';

/**
 * 创建vite-dev-server实例
 */
export async function createDevServer(root = process.cwd()) {
  const config = await resolveConfig(root, 'serve', 'development');
  console.log(config);
  
  return createViteDevServer({
    root,
    plugins: [pluginIndexHtml(), pluginReact()],
    server: {
      fs: {
        allow: [PACKAGE_ROOT_PATH],
      },
    },
  })
}
