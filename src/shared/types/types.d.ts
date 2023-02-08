declare module 'hhx-docs:site-data' {
  import type { UserConfig } from 'shared/types'
  const siteData: UserConfig
  export default siteData
}
declare module 'hhx-docs:routes' {
  import type { Route } from 'node/vite-plugin/routes'
  export const routes: Route[]
}
