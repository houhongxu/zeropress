import assert from 'assert'
import { Plugin } from 'vite'

// 参考 https://github.com/vitejs/vite-plugin-react/issues/38
// TODO vite-plugin-react-swc 与 vite-plugin-react4 支持mdx 同时需要升级vite4 https://github.com/vitejs/vite-plugin-react/releases/tag/plugin-react%404.0.0
export function vitePluginMdxHMR(): Plugin {
  let vitePluginReact: Plugin | undefined
  const isMdx = (file: string) => /.mdx?$/.test(file)

  return {
    name: 'hhxpress:vite-plugin-mdx-hmr',
    apply: 'serve',
    configResolved(config) {
      // 找到react插件
      vitePluginReact = config.plugins.find(
        (plugin) => plugin.name === 'vite:react-babel',
      )

      if (!vitePluginReact) {
        throw new Error(
          `Can't find an instance of @vitejs/plugin-react / 未找到插件@vitejs/plugin-react`,
        )
      }
    },
    // 将热更新边界拓展到mdx文件
    async transform(code, id, options) {
      if (isMdx(id)) {
        // 通过vitePluginReact的transform处理mdx热更新
        assert(typeof vitePluginReact!.transform === 'function')
        const result = await vitePluginReact!.transform.call(
          this,
          code,
          id + '?.jsx', // 匹配内部正侧 https://github.com/vitejs/vite-plugin-react/blob/b647e74c38565696bd6fb931b8bd9ac7f3bebe88/packages/plugin-react/src/index.ts#L215
          options,
        )

        // 确保添加热更新
        // https://cn.vitejs.dev/guide/api-hmr.html#hot-accept-cb
        const selfAcceptCode = 'import.meta.hot.accept();'

        if (
          result &&
          typeof result === 'object' &&
          !result.code?.includes(selfAcceptCode)
        ) {
          result.code += selfAcceptCode
        }

        return result
      }
    },
    // https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
    handleHotUpdate(ctx) {
      // 将热更新边界拓展到接受该事件并处理的组件
      if (isMdx(ctx.file)) {
        // 发送热更新事件给客户端
        ctx.server.ws.send({
          type: 'custom',
          event: 'mdx-changed',
          data: { filePath: ctx.file },
        })
      }
    },
  }
}
