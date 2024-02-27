import { UserConfig } from './user-config'

export interface SiteConfig {
  root: string
  userConfigPath?: string
  userConfig: UserConfig
}
