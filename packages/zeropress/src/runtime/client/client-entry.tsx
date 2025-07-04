import { ClientPageDataProvider } from '../PageDataProvider'
import { getPageData } from '../getPageData'
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
        <ClientPageDataProvider value={{ pageData }}>
          <Layout></Layout>
        </ClientPageDataProvider>
      </BrowserRouter>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
        <ClientPageDataProvider value={{ pageData }}>
          <Layout></Layout>
        </ClientPageDataProvider>
      </BrowserRouter>,
    )
  }
}

render()
