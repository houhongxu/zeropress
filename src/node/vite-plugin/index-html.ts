import { readFile } from 'fs/promises'
import { Plugin } from 'vite'
import { CLIENT_ENTRY_PATH, DEFAULT_HTML_PATH } from '../constants'

/**
 * 拦截开发时请求进行模板html处理
 */
export function pluginIndexHtml(): Plugin {
  return {
    name: 'hhx-docs:index-html',
    // 仅在服务时开启
    apply: 'serve',
    // 插入入口 script 标签到模板html中
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              type: 'module',
              src: `/@fs/${CLIENT_ENTRY_PATH}`, // vite约定绝对路径前添加
            },
            injectTo: 'body',
          },
        ],
      }
    },
    // 获取 vite-dev-server 实例
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          // 获取模板html
          let html = await readFile(DEFAULT_HTML_PATH, 'utf-8')
          // 转化为vite模板html
          html = await server.transformIndexHtml(req.url, html, req.originalUrl)

          // 开发服务返回模板html
          try {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(html)
          } catch (e) {
            return next(e)
          }
        })
      }
    },
  }
}
