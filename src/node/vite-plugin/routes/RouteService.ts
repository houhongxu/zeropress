// 约定式路由的核心逻辑

import fastGlob from 'fast-glob'
import { normalizePath } from 'vite'
import path from 'path'

interface RouteMeta {
  routePath: string
  absolutePath: string
}

export class RouteService {
  #scanDir: string
  #routeData: RouteMeta[] = []

  // 传入扫描的文件夹
  constructor(scanDir: string) {
    this.#scanDir = scanDir
  }

  async init() {
    // 读取文件夹内的文件
    const files = fastGlob
      .sync(['**/*.{js,jsx,ts,tsx,md,mdx}'], {
        cwd: this.#scanDir,
        absolute: true,
        ignore: ['**/node_modules/**', '**/build/**', 'config.ts'],
      })
      .sort()

    files.forEach((file) => {
      // 拼接文件路径
      const fileRelativePath = normalizePath(path.relative(this.#scanDir, file))
      // 1. 路由路径
      const routePath = this.normalizeRoutePath(fileRelativePath)
      // 2. 文件绝对路径
      this.#routeData.push({
        routePath,
        absolutePath: file,
      })
    })
  }

  // 获取路由数据，方便测试
  getRouteMeta(): RouteMeta[] {
    return this.#routeData
  }

  normalizeRoutePath(rawPath: string) {
    const routePath = rawPath.replace(/\.(.*)?$/, '').replace(/index$/, '')
    return routePath.startsWith('/') ? routePath : `/${routePath}`
  }

  // 生成路由数据导出代码
  // loadable是运行时导入库

  generateRoutesCode() {
    return `
  import React from 'react';
  import loadable from '@loadable/component';
  ${this.#routeData
    .map((route, index) => {
      return `const Route${index} = loadable(() => import('${route.absolutePath}'));`
    })
    .join('\n')}
  export const routes = [
  ${this.#routeData
    .map((route, index) => {
      return `{ path: '${route.routePath}', element: React.createElement(Route${index}) }`
    })
    .join(',\n')}
  ];
  `
  }
}
