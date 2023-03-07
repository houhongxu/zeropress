import { Plugin } from 'vite'
import { pluginMdxHMR } from './mdxHmr'
import { rollupPluginMdx } from './rollupPluginMdx'

// vite热更新机制
// 1. 监听文件变动
// 2. 定位到热更新边界模块
// 3. 执行更新逻辑

// import.meta.hot.accept()热更新关键api

export async function createPluginMdx(): Promise<Plugin[]> {
  return [await rollupPluginMdx(), pluginMdxHMR()]
}
