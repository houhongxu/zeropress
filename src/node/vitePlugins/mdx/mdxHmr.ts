import assert from 'assert'
import { Plugin } from 'vite'

/**
 * 拦截vitePluginReact对mdx进行热更新处理
 */
export function pluginMdxHMR(): Plugin {
  let vitePluginReact: Plugin

  return {
    name: 'hhx-docs:mdx-hmr',
    apply: 'serve',
    // 获取插件
    configResolved(config) {
      vitePluginReact = config.plugins.find(
        (plugin) => plugin.name === 'vite:react-babel'
      ) as Plugin
    },
    // 添加热更新
    async transform(code, id, opts) {
      if (/\.mdx?$/.test(id)) {
        assert(typeof vitePluginReact.transform === 'function')
        const result = await vitePluginReact.transform.call(
          this,
          code,
          id + '?.jsx',
          opts
        )

        if (
          result &&
          typeof result === 'object' &&
          !result.code?.includes('import.meta.hot.accept()')
        ) {
          result.code += 'import.meta.hot.accept()'
        }
        return result
      }
    },
  }
}
