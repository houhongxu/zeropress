import { PageDataProvider } from '../PageDataProvider'
import { getPageData } from '../usePageData'
import { Layout } from '@/default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

async function render() {
  console.log('当前环境：', import.meta.env.PROD ? 'PROD' : 'DEV')

  const pageData = await getPageData(location.pathname)

  if (import.meta.env.PROD) {
    hydrateRoot(
      document.getElementById('root')!,
      <BrowserRouter>
        <PageDataProvider value={{ pageData }}>
          <Layout></Layout>
        </PageDataProvider>
      </BrowserRouter>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
        <PageDataProvider value={{ pageData }}>
          <Layout></Layout>
        </PageDataProvider>
      </BrowserRouter>,
    )
  }
}

render()
