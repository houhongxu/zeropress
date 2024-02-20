import { ROOT_PATH } from './consts'
import { createPlugins } from './plugins'
import { EasypressSiteConfig } from 'shared/types'
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
    root: ROOT_PATH, // 避免dev服务访问路由时直接访问静态tsx资源，所以在/开启服务，路由一般在/docs内
    server: {
      host: true, // 开启局域网与公网ip
    },
    plugins: createPlugins({ root, restartRuntimeDevServer, siteConfig }),
  })
}
