// 会将renderInServer()返回结果注入服务端产物内

import { App } from './app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

// 目前是location单路由打包
export function renderInServer() {
  return renderToString(
    <StaticRouter location={'/guide'}>
      <App />
    </StaticRouter>
  )
}
