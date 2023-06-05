// react应用，导入不可以用baseUrl路径简化，因为runtime文件夹内容并未由ts打包，而是由vite-build构建

import { matchRoutes } from 'react-router-dom'
import { MainLayout } from 'runtime/theme-default/Layouts/MainLayout'
import { PageData } from 'shared/types'
import routes from 'virtual:routes'
import userConfig from 'virtual:user-config'

export function App() {
  return <MainLayout></MainLayout>
}

/**
 * 初始化读取pageData
 */
export async function initPageData(routePath: string): Promise<PageData> {
  // 获取路由组件编译后的模块内容 https://reactrouter.com/en/main/utils/match-routes
  const matched = matchRoutes(routes, routePath)

  // 获取侧边栏需要的路由标题
  const modules = await Promise.all(routes.map((route) => route.preload()))
  const titles = modules.map((module) => module.title)

  if (matched) {
    const moduleInfo = await matched[0].route.preload()

    return {
      pageType: moduleInfo.frontmatter?.pageType || 'doc',
      routePath,
      userConfig,
      routes,
      frontmatter: moduleInfo.frontmatter,
      toc: moduleInfo.toc,
      // 首页为用户配置，文档页为frontmatter配置，没有则为文章标题
      siteTitle:
        moduleInfo.frontmatter?.pageType === 'home'
          ? userConfig.title || 'HOME'
          : moduleInfo.frontmatter?.title || moduleInfo.title || 'HHXPRESS DOC',
      sidebarTitles: titles,
    }
  }

  return { pageType: '404', routePath, userConfig, routes, siteTitle: '404' }
}
