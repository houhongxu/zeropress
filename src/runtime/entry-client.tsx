// 浏览器执行的入口，在模板html中通过script引入执行

import { createRoot, hydrateRoot } from 'react-dom/client'
import { App, initPageData } from './App'
import { BrowserRouter } from 'react-router-dom'
import { PageDataContext } from './usePageData'
import { ComponentType } from 'react'

declare global {
  interface Window {
    ISLANDS_NAME_TO_PROPS_MAP: Record<string, ComponentType<unknown>> // TODO 不应该是name:prop吗
    ISLAND_PROPS: any[]
  }
}

async function renderInBrower() {
  const rootDom = document.getElementById('root')

  if (!rootDom) {
    throw new Error('#root dom element not found / 未找到名为root的dom节点')
  }

  if (import.meta.env.DEV) {
    // 开发环境
    const pageData = await initPageData(location.pathname)
    console.log('页面数据：', pageData)

    createRoot(rootDom).render(
      <PageDataContext.Provider value={pageData}>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </PageDataContext.Provider>,
    )
  } else {
    // 生产环境island架构同构

    const islandDoms = document.querySelectorAll('[__island]')

    if (islandDoms.length === 0) return

    islandDoms.forEach((islandDom) => {
      const [name, index] = islandDom.getAttribute('__island')?.split(':') ?? []
      const Element = window.ISLANDS_NAME_TO_PROPS_MAP[name] // TODO 为什么这个可以写成react组件
      const props = window.ISLAND_PROPS[parseInt(index)]
      hydrateRoot(islandDom, <Element {...props}></Element>)
    })
  }
}

renderInBrower()
