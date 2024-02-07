// vite-plugin-html-template等库仅为vite的web应用设计，所以不能复用
import fse from 'fs-extra'
import { Plugin } from 'vite'

interface VitePluginServeHtmlOptions {
  templatePath: string
  entry: string
}
export function vitePluginServeHtml({
  templatePath,
  entry,
}: VitePluginServeHtmlOptions): Plugin {
  return {
    name: 'vitePluginServeHtml',

    // https://cn.vitejs.dev/guide/api-plugin.html#configureserver
    configureServer(server) {
      return () => {
        //  内部中间件 之后 运行return

        server.middlewares.use(async (req, res, next) => {
          // 不是html则跳过
          if (!req.url?.endsWith('.html') && req.url !== '/') {
            return next()
          }

          try {
            const html = await fse.readFile(templatePath, 'utf-8')

            // 使用vite转换html来获取vite的支持
            const viteHtml = await server.transformIndexHtml?.(
              req.url,
              html,
              req.originalUrl,
            )

            // 添加客户端js入口
            const finalHtml = viteHtml.replace(
              '</body>',
              `
              <script type="module" src="${entry}"></script>
              \n
              </body>
              `,
            )

            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(finalHtml)
          } catch (e) {
            console.error(e)

            return next(e)
          }
        })
      }
    },
  }
}
