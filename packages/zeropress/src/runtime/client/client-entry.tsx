import { PageDataProvider } from '../PageDataProvider'
import { getPageData } from '../usePageData'
import { Layout } from '@/default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

async function render() {
  const pageData = await getPageData(location.pathname)
  console.log('当前环境：', import.meta.env.PROD ? 'PROD' : 'DEV')

  if (import.meta.env.PROD) {
    hydrateRoot(
      document.getElementById('root')!,
      <PageDataProvider value={{ pageData }}>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataProvider>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <PageDataProvider value={{ pageData }}>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataProvider>,
    )
  }
}

render()
