// react应用，导入不可以用baseUrl路径简化，因为runtime文件夹内容并未由ts打包，而是由vite-build构建

import { matchRoutes } from 'react-router-dom'
import { MainLayout } from 'runtime/default-theme/Layouts/MainLayout'
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

  if (matched) {
    const moduleInfo = await matched[0].route.preload()

    return {
      pageType: 'doc',
      routePath,
      userConfig,
      frontmatter: moduleInfo.frontmatter,
      toc: moduleInfo.toc,
    }
  }

  return { pageType: '404', routePath, userConfig }
}
