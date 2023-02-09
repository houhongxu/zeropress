import { Plugin } from 'vite'
import { rollupPluginMdx } from './pluginMdxRollup'

export function createPluginMdx(): Plugin[] {
  return [rollupPluginMdx()]
}
