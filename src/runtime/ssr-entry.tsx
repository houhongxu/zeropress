// 会将renderInServer()返回结果注入服务端产物内

import { App } from './app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

export function renderInServer(pagePath: string) {
  return renderToString(
    <StaticRouter location={pagePath}>
      <App />
    </StaticRouter>
  )
}

export { routes } from 'hhx-docs:routes'
