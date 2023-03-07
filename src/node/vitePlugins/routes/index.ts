import { Plugin } from 'vite'
import { RouteService } from './RouteService'

export const CONVENTIONAL_ROUTE_ID = 'hhx-docs:routes'
export const RESOLVED_CONVENTIONAL_ROUTE_ID = '/0' + CONVENTIONAL_ROUTE_ID

export interface Route {
  path: string
  element: React.ReactElement
  filePath: string
}

interface PluginOptions {
  root: string
  isSSR: boolean
}

/**
 * 扫描文件夹生成路由数据
 */
export function pluginRoutes(options: PluginOptions): Plugin {
  // 获取route扫描器实例
  const routeService = new RouteService(options.root)

  return {
    name: 'hhx-docs:routes',
    async configResolved() {
      // Vite 启动时，对 RouteService 进行初始化，扫描options.root文件夹获取路由数据
      await routeService.init()
    },
    resolveId(id: string) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return RESOLVED_CONVENTIONAL_ROUTE_ID
      }
    },

    load(id: string) {
      if (id === RESOLVED_CONVENTIONAL_ROUTE_ID) {
        // 返回导出路由数据的代码
        return routeService.generateRoutesCode(options.isSSR ?? false)
      }
    },
  }
}
