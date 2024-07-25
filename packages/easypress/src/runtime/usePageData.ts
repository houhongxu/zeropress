import { createContext, useContext } from 'react'
import { matchRoutes } from 'react-router-dom'
import { PageData } from 'shared/types'
import config from 'virtual:config'
import routes from 'virtual:routes'

export async function getPageData(pathname: string): Promise<PageData> {
  const matched = matchRoutes(routes, pathname)

  if (matched) {
    const module = await matched[0].route.preload()

    return {
      pageType: module?.GetFrontMatter?.()?.pageType || 'doc',
      pagePath: pathname,
      frontmatter: module.GetFrontMatter?.() ?? {},
      toc: module.GetToc?.() ?? [],
      userConfig: config,
    }
  }

  return { pageType: '404', pagePath: pathname, toc: [], userConfig: config }
}

interface Props {
  pageData?: PageData
}

export const PageDataContext = createContext<Props>({})

export const usePageData = () => {
  return useContext(PageDataContext)
}
