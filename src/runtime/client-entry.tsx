// 在模板html内引入，在浏览器开始渲染react组件

import { createRoot } from 'react-dom/client'
import { App } from './App'

function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  createRoot(containerEl).render(<App />)
}

renderInBrowser()
