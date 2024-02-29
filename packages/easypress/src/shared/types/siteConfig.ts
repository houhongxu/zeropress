import { UserConfig } from './userConfig'

export interface SiteConfig {
  root: string
  userConfigPath?: string
  userConfig: Required<UserConfig>
}
