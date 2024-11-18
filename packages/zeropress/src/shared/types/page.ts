import { UserConfig } from './userConfig'
import { ReactElement } from 'react'

export type PageType = 'home' | 'doc' | 'custom' | '404'

export interface PageData {
  timestamp: string
  file?: string
  userConfig: UserConfig
  pagePath: string
  pageType: PageType
  toc: TocItem[]
  frontmatter?: FrontMatter
}

export interface PageModule {
  default: ReactElement
  GetFrontMatter?: () => FrontMatter
  GetToc?: () => TocItem[]
  [key: string]: unknown
}

export interface TocItem {
  id: string
  text: string
  depth: number
}

export interface FrontMatter {
  title?: string
  description?: string
  pageType?: PageType
}
