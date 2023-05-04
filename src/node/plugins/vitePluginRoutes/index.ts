// 扫描文件目录 生成路由对象代码 给ui消费

import { createElement } from 'react'
import { Plugin } from 'vite'
import { RouteService } from './RouteService'
export interface Route {
  path: string
  element: React.ReactElement
}

const ROUTES_ID = 'virtual:routes'
const RESOLVED_ROUTES_ID = '\0' + 'virtual:routes'

export function vitePluginRoutes(root: string, isSSR = false): Plugin {
  const routeService = new RouteService(root)

  return {
    name: 'hhxpress:vite-plugin-routes',
    async configResolved() {
      // 读取文件目录并生成路由数据
      await routeService.init()
    },
    resolveId(id) {
      if (id === ROUTES_ID) {
        return RESOLVED_ROUTES_ID
      }
    },
    load(id) {
      if (id === RESOLVED_ROUTES_ID) {
        // 返回ui可以消费导出的数据的代码
        return routeService.generateRoutesCode(isSSR)
      }
    },
  }
}
