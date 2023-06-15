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
}

export interface ThemeConfig {
  nav?: { title: string; items: NavItem[] }
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
