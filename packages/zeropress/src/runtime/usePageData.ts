import { PageData } from '@/shared/types'
import { createContext, useContext } from 'react'
import config from 'virtual:config'
import routes from 'virtual:routes'

export async function getPageData(pathname: string): Promise<PageData> {
  const matched = routes.find((route) => route.path === pathname)

  if (matched) {
    const module = await matched.preload()

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
  setPageData?: React.Dispatch<React.SetStateAction<PageData | undefined>>
}

export const PageDataContext = createContext<Props>({})

export const usePageData = () => {
  return useContext(PageDataContext)
}
