import { ServerPageDataProvider } from '../PageDataProvider'
import { getPageData } from '../usePageData'
import { Layout } from '@/default-theme/Layout'
import { renderToString } from 'react-dom/server'
import { HelmetData } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom/server.js'
// server端使用cjs包
import routes from 'virtual:routes'

/**
 * 渲染无请求的html
 * @description 不同的location拿到不同路由的的html，多html实现mpa路由
 */
export async function render(
  location: string,
  helmetContext: HelmetData['context'],
) {
  const pageData = await getPageData(location)

  // https://reactrouter.com/en/main/guides/ssr#without-a-data-router
  const html = renderToString(
    <ServerPageDataProvider helmetContext={helmetContext} value={{ pageData }}>
      <StaticRouter location={location}>
        <Layout location={location}></Layout>
      </StaticRouter>
    </ServerPageDataProvider>,
  )

  return html
}

// 导出虚拟模块的路由给build完成mpa渲染html
export { routes }
