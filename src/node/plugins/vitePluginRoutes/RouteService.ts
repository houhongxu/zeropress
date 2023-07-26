import FastGlob from 'fast-glob'
import { SUPPORT_CONFIG_FILE } from '../../constants'
import path from 'path'

interface RouteItem {
  /**
   * 路由路径
   */
  routePath: string
  /**
   * 绝对路径
   */
  absolutePath: string
}

/**
 * 扫描文件目录并生成路由对象代码
 */
export class RouteService {
  #scanDir: string
  #routeData: RouteItem[] = []

  constructor(scanDir: string) {
    this.#scanDir = scanDir
  }

  async init() {
    const files = FastGlob.sync(['**/*.{js,jsx,ts,tsx,md,mdx}'], {
      cwd: this.#scanDir,
      absolute: true,
      deep: 3, // 仅支持一层文件夹
      ignore: [
        '**/node_modules/**',
        '**/build/**',
        '**/.temp/**',
        ...SUPPORT_CONFIG_FILE,
      ],
    })

    files.forEach((file) => {
      // 生成相对路径
      const relativePath = path.relative(this.#scanDir, file)

      // 相对路径转路由路径
      const cleanPath = relativePath
        .replace(/\.(.*)?$/, '')
        .replace(/index$/, '')

      const routePath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`

      this.#routeData.push({
        routePath,
        absolutePath: file,
      })
    })
  }

  // 生成虚拟模块代码
  generateRoutesCode(ssr = false) {
    return `
    import React from 'react';
    ${
      ssr ? '' : 'import loadable from "@loadable/component";'
    } // 仅客户端组件懒加载
    
    ${this.#routeData
      .map((route, index) => {
        return ssr
          ? `import Route${index} from "${route.absolutePath}";`
          : `const Route${index} = loadable(() => import('${route.absolutePath}'));`
      })
      .join('\n')}

      const routes = [
      ${this.#routeData
        .map((route, index) => {
          return `{ 
            path: '${route.routePath}',
            element: React.createElement(Route${index}),
            preload:()=>import('${route.absolutePath}')
           }`
        })
        .join(',\n')}
      ]

    export default routes
    `
  }
}
