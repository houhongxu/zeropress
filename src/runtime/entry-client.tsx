// 浏览器执行的入口，在模板html中通过script引入执行

import { createRoot } from 'react-dom/client'
import { App, initPageData } from './App'
import { BrowserRouter } from 'react-router-dom'
import { PageDataContext } from './hooks/usePageData'

async function renderInBrower() {
  const rootDom = document.getElementById('root')

  if (!rootDom) {
    throw new Error('#root dom element not found / 未找到名为root的dom节点')
  }

  const pageData = await initPageData(location.pathname)
  console.log('页面数据：', pageData)

  createRoot(rootDom).render(
    <PageDataContext.Provider value={pageData}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </PageDataContext.Provider>,
  )
}

// TODO 使用react-hydrate同构

renderInBrower()
