import { UserConfig } from './user-config'
import { ReactElement } from 'react'

export type PageType = 'home' | 'doc' | 'custom' | '404'

export interface PageData {
  userConfig: UserConfig
  pagePath: string
  pageType: PageType
  toc: TocItem[]
  frontmatter?: FrontMatter
}

export interface PageModule {
  default: ReactElement
  frontmatter?: FrontMatter
  toc: TocItem[]
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
