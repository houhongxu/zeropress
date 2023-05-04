// https://cn.vitejs.dev/guide/features.html#client-types

/// <reference types="vite/client" />


declare module 'virtual:user-config' {
  import type { UserConfig } from 'shared/types'
  const userConfig: UserConfig
  export default userConfig
}

declare module 'virtual:routes' {
  import { Route } from 'node/plugins/vitePluginRoutes'
  const routes: Route[]
  export default routes
}
