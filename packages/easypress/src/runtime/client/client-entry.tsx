import { Layout } from '../default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageDataLayout } from 'runtime/PageDataLayout'
import config from 'virtual:config'

console.log('用户配置：', config)

function render() {
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
