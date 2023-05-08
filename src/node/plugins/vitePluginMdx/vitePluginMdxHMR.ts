import assert from 'assert'
import { Plugin } from 'vite'

// 参考 https://github.com/vitejs/vite-plugin-react/issues/38
// TODO vite-plugin-react-swc 与 vite-plugin-react4 支持mdx 同时需要升级vite4 https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%404.0.0
export function vitePluginMdxHMR(): Plugin {
  let vitePluginReact: Plugin

  return {
    name: 'hhxpress:vite-plugin-mdx-hmr',
    apply: 'serve',
    configResolved(config) {
      // 找到react插件
      vitePluginReact = config.plugins.find(
        (plugin) => plugin.name === 'vite:react-babel',
      )

      if (!vitePluginReact) {
        throw new Error(`Can't find an instance of @vitejs/plugin-react`)
      }
    },
    async transform(code, id, options) {
      if (/.mdx?$/.test(id)) {
        // 通过vitePluginReact的transform处理mdx热更新
        assert(typeof vitePluginReact.transform === 'function')
        const result = await vitePluginReact.transform?.call(
          this,
          code,
          id + '?.jsx', // 匹配内部正侧 https://github.com/vitejs/vite-plugin-react/blob/b647e74c38565696bd6fb931b8bd9ac7f3bebe88/packages/plugin-react/src/index.ts#L215
          options,
        )

        // 确保添加热更新
        const selfAcceptCode = 'import.meta.hot.accept();'
        if (
          typeof result === 'object' &&
          !result.code.includes(selfAcceptCode)
        ) {
          result.code += selfAcceptCode
        }

        return result
      }
    },
  }
}
