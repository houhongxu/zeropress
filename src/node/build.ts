import { build as viteBuild, InlineConfig } from 'vite'
import { CLIENT_ENTRY_PATH, SERVER_ENTRY_PATH } from './constants'
import path from 'path'
import type { RollupOutput } from 'rollup'
import fs from 'fs-extra'
import { SiteConfig } from 'shared/types'
import { createVitePlugins } from './vitePlugin'
import { Route } from './vitePlugins/routes'

/**
 * 构建
 */
export async function build(root: string = process.cwd(), config: SiteConfig) {
  // 打包代码，包括 client 端 + server 端
  const [clientBundle] = await bundle(root, config)
  // 引入 server-entry 产物 js
  const serverEntryPath = path.join(root, '.temp', 'ssr-entry.js')
  const { renderInServer, routes } = await import(serverEntryPath)
  // 服务端渲染，产出
  await renderPage(renderInServer, root, clientBundle, routes)
}

/**
 * 打包双端代码
 */
export async function bundle(root: string, config: SiteConfig) {
  // 获取打包配置
  const resolveViteConfig = async (
    isServer: boolean
  ): Promise<InlineConfig> => ({
    mode: 'production',
    root,
    // 注意加上pluginReact这个插件，自动注入 import React from 'react'，避免 React is not defined 的错误
    // TODO 类型问题
    plugins: (await createVitePlugins(config, undefined, isServer)) as any,
    ssr: {
      // 注意加上这个配置，防止 cjs 产物中 require ESM 的产物，通过一起打包仅cjs产物的方法，因为 react-router-dom 的产物为 ESM 格式
      noExternal: ['react-router-dom'],
    },
    build: {
      ssr: isServer,
      // 打包因为plugin-config路径固定为根路径
      outDir: isServer ? path.join(root, '.temp') : path.join(root, 'build'),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          format: isServer ? 'cjs' : 'esm',
        },
      },
    },
  })

  console.log(
    `Building client + server bundles... / 构建客户端与服务端中。。。`
  )

  try {
    // 获取双端产物，并发速度更快
    const [clientBundle, serverBundle] = await Promise.all([
      // client
      viteBuild(await resolveViteConfig(false)),
      // server
      viteBuild(await resolveViteConfig(true)),
    ])
    return [clientBundle, serverBundle] as [RollupOutput, RollupOutput]
  } catch (e) {
    console.log(e)
  }
}

/**
 * 渲染服务端产物
 */
export async function renderPage(
  render: (pagePath: string) => string,
  root: string,
  clientBundle: RollupOutput,
  routes: Route[]
) {
  const clientChunk = clientBundle.output.find(
    (chunk) => chunk.type === 'chunk' && chunk.isEntry
  )
  console.log(`Rendering page in server side... / 服务端渲染页面中。。。`)

  await Promise.all(
    routes.map(async (route) => {
      const routePath = route.path
      // 获取服务端的react组件字符串
      const appHtml = render(routePath)
      // 服务端html模板
      const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>server</title>
    <meta name="description" content="xxx">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/${clientChunk?.fileName}"></script>
  </body>
</html>`.trim()

      const fileName = routePath.endsWith('/')
        ? `${routePath}index.html`
        : `${routePath}.html`

      await fs.ensureDir(path.join(root, 'build', path.dirname(fileName)))
      // 生成服务端html入口
      await fs.writeFile(path.join(root, 'build', fileName), html)
      // 移除服务端产物，因为已经写入服务端html，客户端产物留下进行访问时同构
    })
  )

  await fs.remove(path.join(root, '.temp'))
}
