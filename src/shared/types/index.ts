import { UserConfig as ViteConfiguration } from 'vite'

/**
 * 用户配置
 */
export interface UserConfig {
  title?: string
  description?: string

  themeConfig?: ThemeConfig
  vite?: ViteConfiguration
}

/**
 * 主题配置
 */
export interface ThemeConfig {
  nav?: NavItemWithLink[]
  sidebar?: Sidebar
  footer?: Footer
}

/**
 * 导航栏
 */
export type NavItemWithLink = {
  text: string
  link: string
}

/**
 * 侧边栏
 */
export interface Sidebar {
  [path: string]: SidebarGroup[]
}

export interface SidebarGroup {
  text?: string
  items: SidebarItem[]
}

export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] }

/**
 * 页脚
 */
export interface Footer {
  message?: string
  copyright?: string
}
