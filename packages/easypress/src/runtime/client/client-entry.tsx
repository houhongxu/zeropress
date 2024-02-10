import { Layout } from '../default-theme/Layout'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import config from 'virtual:config'

console.log('用户配置：', config)

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Layout></Layout>
  </BrowserRouter>,
)
