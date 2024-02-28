import { Layout } from '../default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageDataLayout } from 'runtime/PageDataLayout'

async function render() {
  if (import.meta.env.PROD) {
    hydrateRoot(
      document.getElementById('root')!,
      <PageDataLayout>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataLayout>,
    )
  } else {
    createRoot(document.getElementById('root')!).render(
      <PageDataLayout>
        <BrowserRouter>
          <Layout></Layout>
        </BrowserRouter>
      </PageDataLayout>,
    )
  }
}

render()
