/// <reference types="vite/client" />

declare module 'virtual:config' {
  import type { UserConfig } from '.'

  const config: UserConfig

  export default config
}
