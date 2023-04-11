import { Layout } from '../theme-default'
import { matchRoutes } from 'react-router-dom'
import { routes } from 'hhx-docs:routes'
import { Route } from 'node/vitePlugins/routes'
import { PageData } from 'shared/types'
import siteData from 'hhx-docs:site-data'

/**
 * 生成页面数据
 */
export async function initPageData(routePath: string): Promise<PageData> {
  const matched = matchRoutes(routes, routePath)

  // 匹配路由
  if (matched) {
    const route = matched[0].route as Route
    const moduleInfo = await route.preload()

    return {
      pageType: moduleInfo.frontmatter?.pageType ?? 'doc',
      siteData,
      frontmatter: moduleInfo.frontmatter,
      pagePath: routePath,
      toc: moduleInfo.toc,
    }
  }

  return {
    pageType: '404',
    siteData,
    pagePath: routePath,
    frontmatter: {},
  }
}

export function App() {
  return <Layout />
}
