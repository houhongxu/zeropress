import { UserConfig as ViteUserConfig } from 'vite'

export interface UserConfig {
  /**
   * md/mdx文档目录
   * @default docs
   */
  docs?: string
  title?: string
  description?: string
  autoSidebar?: boolean
  /**
   * 自动头部导航栏，仅支持文字，固定在右边配置项的左边增加
   */
  autoNav?: boolean
  themeConfig?: ThemeConfig
  vite?: ViteUserConfig
}

export interface ThemeConfig {
  /**
   * 头部导航栏，支持 图片、链接、文字，支持固定logo如github等，支持调整左右
   */
  nav?: NavItem[]
  sidebar?: Sidebar
  footer?: Footer
}

export type NavItem = {
  text?: string
  logo?: NavLogo
  img?: string
  /**
   * 深色切换按钮
   */
  dark?: boolean

  link?: string
  /**
   * 导航项目的位置
   * @default right
   */
  position?: NavDirection
}

export type NavDirection = 'left' | 'right'
export type NavLogo = 'github' | 'twitter'

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

export interface Footer {
  message?: string
  copyright?: string
}
