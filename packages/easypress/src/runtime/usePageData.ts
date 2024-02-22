import { matchRoutes } from 'react-router-dom'
import { PageData } from 'shared/types'
import config from 'virtual:config'
import routes from 'virtual:routes'
import { create } from 'zustand'

export async function getPageData(pathname: string): Promise<PageData> {
  const matched = matchRoutes(routes, pathname)

  if (matched) {
    const module = await matched[0].route.preload()

    return {
      pageType: module.frontmatter?.pageType || 'doc',
      pagePath: pathname,
      frontmatter: module.frontmatter,
      toc: module.toc,
      userConfig: config,
    }
  }

  return { pageType: '404', pagePath: pathname, toc: [], userConfig: config }
}

export const usePageData = create<{
  pageData?: PageData
  setPageData: (pageData?: PageData) => void
}>((set) => ({
  pageData: undefined,
  setPageData: (pageData?: PageData) => set({ pageData }),
}))
