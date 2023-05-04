// 服务端执行的入口，通过react的api处理代码为字符串

import { renderToString } from 'react-dom/server'
import { App } from './App'
import { StaticRouter } from 'react-router-dom/server'
import routes from 'virtual:routes'

export function renderInServer() {
  return renderToString(
    // TODO location应该是根据客户端url
    // https://reactrouter.com/en/main/router-components/static-router
    <StaticRouter location={'/'}>
      <App></App>
    </StaticRouter>,
  )
}

export { routes }
