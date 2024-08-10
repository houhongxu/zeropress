import { PageData } from '@/shared/types'
import { createContext, useContext } from 'react'
import config from 'virtual:config'
import routes from 'virtual:routes'

export async function getPageData(pathname: string): Promise<PageData> {
  const matched = routes.find((route) => route.path === pathname)

  let pageData: PageData = {
    pageType: '404',
    pagePath: pathname,
    toc: [],
    userConfig: config,
  }

  if (matched) {
    const module = await matched.preload()

    pageData = {
      pageType: module?.GetFrontMatter?.()?.pageType || 'doc',
      pagePath: pathname,
      frontmatter: module.GetFrontMatter?.() ?? {},
      toc: module.GetToc?.() ?? [],
      userConfig: config,
    }
  }

  console.log(
    `${new Date()}
页面数据：`,
    pageData,
  )

  return pageData
}

interface Props {
  pageData?: PageData
  setPageData?: React.Dispatch<React.SetStateAction<PageData | undefined>>
}

export const PageDataContext = createContext<Props>({})

export const usePageData = () => {
  return useContext(PageDataContext)
}
