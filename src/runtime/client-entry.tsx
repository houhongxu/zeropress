// 会在模板html内引入该文件，在浏览器开始渲染react组件

import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  createRoot(containerEl).render(
    // 根据浏览器url访问路由
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

renderInBrowser()
