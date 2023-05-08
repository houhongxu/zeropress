import { Plugin } from 'vite'
import { createRollupPluginMdx } from './rollupPluginMdx'
import { vitePluginMdxHMR } from './vitePluginMdxHMR'

export function createVitePluginMdx(): Plugin[] {
  return [createRollupPluginMdx(), vitePluginMdxHMR()]
}
