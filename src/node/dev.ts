import { createServer as createViteDevServer } from 'vite'
import { PACKAGE_ROOT_PATH } from './constants'
import { resolveConfig } from './config'
import { createVitePlugins } from './vitePlugin'

/**
 * 创建vite-dev-server实例
 */
export async function createDevServer(
  root: string,
  restartServer: () => Promise<void>
) {
  const config = await resolveConfig(root, 'serve', 'development')

  return createViteDevServer({
    plugins: createVitePlugins(config, restartServer),
    server: {
      fs: {
        allow: [PACKAGE_ROOT_PATH],
      },
    },
  })
}
