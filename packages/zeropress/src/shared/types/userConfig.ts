import { UserConfig as ViteUserConfig } from 'vite'

export interface UserConfig {
  /**
   * md/mdx文档目录
   * @default docs
   */
  docs?: string
  /**
   * 标题，首页以及文档使用
   */
  title?: string
  /**
   * 描述，首页使用
   */
  description?: string
  /**
   * 主题设置
   */
  themeConfig?: ThemeConfig
  /**
   * vite设置
   */
  vite?: ViteUserConfig
  /**
   * 备案号
   */
  icp?: string
}

export interface ThemeConfig {
  /**
   * 自动文档侧边栏
   */
  autoSidebar?: boolean
  /**
   * 自动头部导航栏，仅支持文字，固定在右边配置项的左边增加
   */
  autoNav?: boolean
  /**
   * 头部导航栏，支持 图片、链接、文字，支持固定logo如github等，支持调整左右
   */
  nav?: NavItem[]
  /**
   * 侧边栏
   */
  sidebar?: Sidebar
  /**
   * 底部
   */
  footer?: Footer
  /**
   * 编辑页面
   */
  editLink?: {
    pattern: string
    text?: string
  }
  /**
   * 更新时间
   */
  lastUpdated?: {
    text?: string
    format?: string
  }
}

export type NavItem = {
  text?: string
  link?: string

  logo?: NavLogo
  img?: string

  /**
   * 深色切换按钮
   */
  dark?: boolean

  /**
   * 导航项目的位置
   * @default right
   */
  position?: NavDirection
}

export type NavDirection = 'left' | 'right'
export type NavLogo = 'github' | 'twitter'

export interface Sidebar {
  [path: string]: SidebarDir[]
}

export interface SidebarDir {
  text?: string
  items?: SidebarItem[]
  link?: string
  collapsed?: boolean
}

export type SidebarItem =
  | { text: string; link: string }
  | { text: string; link?: string; items: SidebarItem[] }

export interface Footer {
  message?: string
  copyright?: string
}
