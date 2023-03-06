import { Plugin } from 'vite'
import { rollupPluginMdx } from './rollupPluginMdx'

export async function createPluginMdx(): Promise<Plugin[]> {
  return [await rollupPluginMdx()]
}
