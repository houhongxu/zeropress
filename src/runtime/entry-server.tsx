// 服务端执行的入口，通过react的api处理代码为字符串

import { renderToString } from 'react-dom/server'
import { App, initPageData } from './App'
import { StaticRouter } from 'react-router-dom/server'
import routes from 'virtual:routes'
import { PageDataContext } from './hooks/usePageData'

export async function renderInServer(routePath: string) {
  const pageData = await initPageData(routePath)
  return renderToString(
    // https://reactrouter.com/en/main/router-components/static-router
    // BrowserRouter 使用的是 History API 记录位置，而 History API 是属于浏览器的 API ，在 SSR 的环境下，服务端不能使用浏览器 API
    // 通过初始传入的 location 地址找到相应组件
    <PageDataContext.Provider value={pageData}>
      <StaticRouter location={routePath}>
        <App></App>
      </StaticRouter>
    </PageDataContext.Provider>,
  )
}

export { routes }
