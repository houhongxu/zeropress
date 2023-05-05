import { Plugin } from 'vite'
import { createRollupPluginMdx } from './rollupPluginMdx'

export function createVitePluginMdx(): Plugin[] {
  return [createRollupPluginMdx()]
}
