import { Layout } from '../default-theme/Layout'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

// https://reactrouter.com/en/main/guides/ssr#without-a-data-router
export function render() {
  const html = renderToString(
    <StaticRouter location={'/'}>
      <Layout></Layout>
    </StaticRouter>,
  )

  return html
}
