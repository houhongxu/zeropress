import { UserConfig as ViteConfig } from 'vite'
export interface SiteConfig {
  root: string
  userConfigPath: string
  userConfig: UserConfig
}

export interface UserConfig {
  title?: string
  description?: string
  themeConfig?: ThemeConfig
  vite?: ViteConfig
}

export interface ThemeConfig {
  nav?: NavItem[]
  footer?: Footer
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
