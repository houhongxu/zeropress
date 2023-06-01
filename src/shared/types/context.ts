import { UserConfig } from './config'
import { ComponentType } from 'react'
import { Route } from 'node/plugins/vitePluginRoutes'

export interface PageData {
  pageType: PageType
  routePath: string
  userConfig: UserConfig
  routes: Route[]
  frontmatter?: FrontMatter
  toc?: TocItem[]
  title: string
}

export interface PageModule {
  default: ComponentType
  frontmatter?: FrontMatter
  toc?: TocItem[]
  title?: string
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
  features?: Feature[]
  hero?: Hero
}

export type PageType = 'home' | 'doc' | 'custom' | '404'

export interface Feature {
  icon: string
  title: string
  details: string
}

export interface Hero {
  name: string
  text: string
  tagline: string
  image?: {
    src: string
    alt: string
  }
  actions: {
    text: string
    link: string
    theme: 'brand' | 'alt'
  }[]
}
