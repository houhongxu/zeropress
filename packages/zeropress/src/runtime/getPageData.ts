import { PageData, Route } from '@/shared/types'
import config from 'virtual:config'
import routes from 'virtual:routes'

export async function getPageData(pathname: string): Promise<PageData> {
  const matched = routes.find((route) => route.path === pathname) as Route

  let pageData: PageData = {
    pageType: '404',
    pagePath: pathname,
    toc: [],
    userConfig: config,
    timestamp: '',
  }

  if (matched) {
    const module = await matched.preload()

    pageData = {
      pageType: module?.GetFrontMatter?.()?.pageType || 'doc',
      pagePath: pathname,
      frontmatter: module.GetFrontMatter?.() ?? {},
      toc: module.GetToc?.() ?? [],
      userConfig: config,
      file: matched.file,
      timestamp: matched.timestamp,
    }
  }

  if (import.meta.env.DEV) {
    console.log(
      `${new Date()}
页面数据：`,
      pageData,
    )
  }

  return pageData
}
