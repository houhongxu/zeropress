import { EasypressUserConfig } from './user-config'

export interface EasypressSiteConfig {
  root: string
  userConfigPath?: string
  userConfig: EasypressUserConfig
}
