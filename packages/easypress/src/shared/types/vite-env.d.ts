/// <reference types="vite/client" />

declare module 'virtual:config' {
  import { UserConfig } from '.'

  const config: UserConfig

  export default config
}

declare module 'virtual:routes' {
  import { RouteObject } from 'react-router-dom'

  const routes: RouteObject[]
  export default routes
}
