// https://cn.vitejs.dev/guide/features.html#client-types

/// <reference types="vite/client" />

declare module 'virtual:config' {
  import type { UserConfig } from 'shared/types'
  const config: UserConfig
  export default config
}
