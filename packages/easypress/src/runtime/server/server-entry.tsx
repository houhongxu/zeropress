import { Layout } from '../default-theme/Layout'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

/**
 * 渲染无请求的html
 * @description 不同的location拿到不同路由的的html，多html实现mpa路由
 */
export function render() {
  // TODO location参数，不同的location拿到不同路由的的html，多html实现mpa路由
  // https://reactrouter.com/en/main/guides/ssr#without-a-data-router
  const html = renderToString(
    <StaticRouter location={'/'}>
      <Layout></Layout>
    </StaticRouter>,
  )

  return html
}
