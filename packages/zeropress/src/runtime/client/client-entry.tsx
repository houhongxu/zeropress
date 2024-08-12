import { ClientPageDataProvider } from '../PageDataProvider'
import { TitleHelmet } from '../TitleHelmet'
import { getPageData } from '../usePageData'
import { Layout } from '@/default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

async function render() {
  console.log('当前环境：', import.meta.env.PROD ? 'PROD' : 'DEV')

  const pageData = await getPageData(location.pathname)

  if (import.meta.env.PROD) {
    hydrateRoot(
      document.getElementById('root')!,
      <HelmetProvider>
        <TitleHelmet pageData={pageData}></TitleHelmet>

        <BrowserRouter>
          <ClientPageDataProvider value={{ pageData }}>
            <Layout></Layout>
          </ClientPageDataProvider>
        </BrowserRouter>
      </HelmetProvider>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <HelmetProvider>
        <TitleHelmet pageData={pageData}></TitleHelmet>

        <BrowserRouter>
          <ClientPageDataProvider value={{ pageData }}>
            <Layout></Layout>
          </ClientPageDataProvider>
        </BrowserRouter>
      </HelmetProvider>,
    )
  }
}

render()
