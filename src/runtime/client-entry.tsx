// 会在模板html内引入该文件，在浏览器开始渲染react组件

import { createRoot } from 'react-dom/client'
import { App, initPageData } from './App'
import { BrowserRouter } from 'react-router-dom'
import { DataContext } from './hooks'

async function renderInBrowser() {
  const containerEl = document.getElementById('root')
  if (!containerEl) {
    throw new Error('#root element not found')
  }
  // 初始化页面数据
  const pageData = await initPageData(location.pathname)
  createRoot(containerEl).render(
    <DataContext.Provider value={pageData}>
      {/* 根据浏览器url访问注册的路由 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataContext.Provider>
  )
}

renderInBrowser()
