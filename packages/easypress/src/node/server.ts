import { EasypressSiteConfig } from '../shared/types'
import { createPlugins } from './createPlugins'
import { createServer } from 'vite'

// 因为是ssg所以dev使用传统的服务模式，如果是ssr dev也需要服务端返回html
export async function createRuntimeDevServer({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer,
}: {
  root?: string
  siteConfig: EasypressSiteConfig
  restartRuntimeDevServer: () => Promise<void>
}) {
  return createServer({
    root,
    server: {
      host: true, // 开启局域网与公网ip,
    },
    plugins: createPlugins({ restartRuntimeDevServer, siteConfig }),
  })
}
