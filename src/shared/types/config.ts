import { UserConfig as ViteConfig } from 'vite'
export interface SiteConfig {
  root: string
  userConfig: UserConfig
  userConfigPath?: string
  userConfigDeps?: string[]
}

export interface UserConfig {
  title?: string
  description?: string
  themeConfig?: ThemeConfig
  vite?: ViteConfig
  appearance?: boolean
}

export interface ThemeConfig {
  nav?: { title: string; items: NavItem[] }
  footer?: Footer
  // 是否可折叠
  collapsable?: boolean
  // 是否默认折叠
  collapsed?: boolean
  lastUpdatedText?: string
  socialLinks?: SocialLink[]
  tocTitle?: string
  prevPageText?: string
  nextPageText?: string
}

// ---

export type NavItem = {
  text: string
  link: string
}

export type SidebarItem = { text: string; link?: string; items?: SidebarItem[] }

export interface Footer {
  message?: string
  copyright?: string
}

export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}
type SocialLinkIcon = 'github'
