// 之前尝试使用rehype插件处理imgsrc发现无法获取md路径
// 使用插件transform移动图片到public并修改src的方式可以支持
// dev时使用内存保存图片，通过server返回，更合适
import { CIIENT_PUBLIC_PATH } from '../consts'
import { SiteConfig } from '@/shared/types'
import fse from 'fs-extra'
import mime from 'mime'
import path from 'path'
import { Plugin } from 'vite'

interface vitePluginServeImgOptions {
  siteConfig: SiteConfig
}

const isImg = (filename?: string): filename is string => {
  if (!filename) return false

  return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(filename)
}

export function vitePluginServeImg({
  siteConfig,
}: vitePluginServeImgOptions): Plugin {
  return {
    name: 'vite-plugin-fixed-image-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (isImg(req.url)) {
          const decodeSrc = decodeURI(req.url)

          const isExits = await fse.exists(
            path.join(siteConfig.root, CIIENT_PUBLIC_PATH, decodeSrc),
          )

          if (!isExits) {
            // 指定要返回的固定图片路径
            const imgPath = path.join(
              siteConfig.root,
              siteConfig.userConfig.docs,
              decodeSrc,
            )

            const imgType = mime.getType(imgPath)

            if (imgType) {
              res.setHeader('Content-Type', imgType)
            }

            fse.createReadStream(imgPath).pipe(res)

            return
          }
        }

        return next()
      })
    },
  }
}
