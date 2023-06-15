// 生产环境plugin-react无法编译node_modules

import { ISLAND_JSX_RUNTIME_PATH, MD_REGEX, TS_REGEX } from '../constants'
import { Plugin, transformWithEsbuild } from 'vite'
import { transformAsync } from '@babel/core'
import { babelPluginIsland } from './babelPluginIsland'

export function vitePluginIslandTransform(isServer: boolean): Plugin {
  return {
    name: 'hhxpress:vite-plugin-island-yransform',
    async transform(code, id, options) {
      if (options?.ssr && (TS_REGEX.test(id) || MD_REGEX.test(id))) {
        const strippedTypes = await transformWithEsbuild(code, id, {
          jsx: 'preserve',
          loader: 'tsx',
        })

        const result = await transformAsync((await strippedTypes).code, {
          filename: id,
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic',
                importSource: isServer ? ISLAND_JSX_RUNTIME_PATH : 'react',
              },
            ],
          ],
          plugins: [babelPluginIsland],
        })
        return {
          code: result?.code || code,
          map: result?.map,
        }
      }
    },
  }
}
