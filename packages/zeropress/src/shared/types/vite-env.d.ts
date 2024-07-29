/// <reference types="vite/client" />

declare module 'virtual:config' {
  import { UserConfig } from './userConfig'

  const config: UserConfig

  export default config
}

declare module 'virtual:routes' {
  import { Route } from './route'

  const routes: Route[]
  export default routes
}
