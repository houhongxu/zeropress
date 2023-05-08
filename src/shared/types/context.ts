import { UserConfig } from './config'
import { ComponentType } from 'react'

export interface PageData {
  pageType: PageType
  routePath: string
  userConfig: UserConfig
  frontmatter?: FrontMatter
  toc?: TocItem[]
}

export interface PageModule {
  default: ComponentType
  frontmatter?: FrontMatter
  toc?: TocItem[]
  [key: string]: unknown
}

// ---

export interface TocItem {
  id: string
  text: string
  depth: number
}

export interface FrontMatter {
  title?: string
  description?: string
  pageType?: PageType
  sidebar?: boolean
  outline?: boolean
}

export type PageType = 'home' | 'doc' | 'custom' | '404'
