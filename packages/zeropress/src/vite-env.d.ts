/// <reference types="vite/client" />

declare module 'virtual:config' {
  import { UserConfig } from 'shared/types'

  const config: UserConfig

  export default config
}

declare module 'virtual:routes' {
  import { Route } from 'shared/types'

  const routes: Route[]
  export default routes
}
