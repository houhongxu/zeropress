// 会将renderInServer()返回结果注入服务端产物内

import { App, initPageData } from './app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { DataContext } from './hooks'

export async function renderInServer(pagePath: string) {
  const pageData = await initPageData(pagePath)
  return renderToString(
    <DataContext.Provider value={pageData}>
      <StaticRouter location={pagePath}>
        <App />
      </StaticRouter>
    </DataContext.Provider>
  )
}

export { routes } from 'hhx-docs:routes'
