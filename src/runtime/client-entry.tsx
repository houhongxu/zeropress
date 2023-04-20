// 浏览器执行的入口，在模板html中通过script引入执行

import { createRoot } from 'react-dom/client'
import { App } from './App'

function renderInBrower() {
  const rootDom = document.getElementById('root')

  if (!rootDom) {
    throw new Error('#root dom element not found / 未找到名为root的dom节点')
  }

  createRoot(rootDom).render(<App></App>)
}

renderInBrower()
