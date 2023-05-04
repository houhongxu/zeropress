// 浏览器执行的入口，在模板html中通过script引入执行

import { createRoot } from 'react-dom/client'
import { App } from './App'
import configData from 'virtual:user-config'
import { BrowserRouter } from 'react-router-dom'

function renderInBrower() {
  const rootDom = document.getElementById('root')

  console.log('用户配置：', configData)

  if (!rootDom) {
    throw new Error('#root dom element not found / 未找到名为root的dom节点')
  }

  createRoot(rootDom).render(
    <BrowserRouter>
      <App></App>
    </BrowserRouter>,
  )
}

// TODO 使用react-hydrate同构

renderInBrower()
