import { Plugin } from 'vite'
import { rollupPluginMdx } from './rollupPluginMdx'

export function createPluginMdx(): Plugin[] {
  return [rollupPluginMdx()]
}
