import { Layout } from '../default-theme/Layout'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import config from 'virtual:config'

console.log('用户配置：', config)

// build时是cjs，可以使用process
if (typeof process !== 'undefined') {
  hydrateRoot(
    document.getElementById('root')!,
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>,
  )
} else {
  createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>,
  )
}
