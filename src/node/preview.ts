import compression from 'compression'
import path from 'path'
import polka from 'polka'
import { resolveSiteConfig } from './config'
import { CLIENT_OUTPUT_DIR } from './constants'
import fse from 'fs-extra'
import sirv from 'sirv'

const DEFAULT_PORT = 5200

interface Options {
  port?: number
}
export async function preview(root: string, { port }: Options) {
  const config = await resolveSiteConfig(root, 'serve', 'production')
  const listenPort = port ?? DEFAULT_PORT
  const outputDir = path.resolve(root, CLIENT_OUTPUT_DIR)

  const notFoundPage = await fse.readFile(
    path.resolve(outputDir, '404.html'),
    'utf-8',
  )
  const compress = compression()

  const serve = sirv(outputDir, {
    etag: true,
    maxAge: 31536000,
    immutable: true,
    setHeaders(res, pathname) {
      if (pathname.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache')
      }
    },
  })

  // polka是express的小型需求替代品，仅1.9kb 是express229.4kb的零头
  const onNoMatch: polka.Options['onNoMatch'] = (_, res) => {
    res.statusCode = 404
    res.end(notFoundPage)
  }

  polka({ onNoMatch })
    .use(compress, serve)
    .listen(listenPort, (err: any) => {
      if (err) {
        throw new Error(err)
      }
      console.log(
        `> Preview server is running at / 预览服务器运行于 http://localhost:${listenPort}`,
      )
    })
}
