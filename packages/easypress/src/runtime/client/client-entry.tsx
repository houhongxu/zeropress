import { Layout } from 'default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageDataProvider } from 'runtime/PageDataProvider'
import { getPageData } from 'runtime/usePageData'

async function render() {
  const pageData = await getPageData(location.pathname)

  if (import.meta.env.PROD) {
    hydrateRoot(
      document.getElementById('root')!,
      <PageDataProvider value={{ pageData, toc: pageData.toc }}>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataProvider>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <PageDataProvider value={{ pageData, toc: pageData.toc }}>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataProvider>,
    )
  }
}

render()
