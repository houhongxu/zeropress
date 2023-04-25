// https://cn.vitejs.dev/guide/features.html#client-types

/// <reference types="vite/client" />

declare module 'virtual:user-config' {
  import type { UserConfig } from 'shared/types'
  const userConfig: UserConfig
  export default userConfig
}
