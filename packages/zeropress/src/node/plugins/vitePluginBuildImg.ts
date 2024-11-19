// 之前尝试使用rehype插件处理imgsrc发现无法获取md路径
// 使用插件transform移动图片到public并修改src的方式可以支持
// dev时使用内存保存图片，通过server返回，更合适
import { CLIENT_OUT_PATH } from '../consts'
import { SiteConfig } from '@/shared/types'
import fse from 'fs-extra'
import path from 'path'
import { Plugin } from 'vite'

// code内部代码例子
// 通过img函数处理img
// const _components = {
//   a: "a",
//   code: "code",
//   h1: "h1",
//   img: "img",
//   li: "li",
//   ol: "ol",
//   p: "p",
//   span: "span",
//   ul: "ul",
//   ...props.components
// };
// 调用使用jsxapi
// _jsxDEV(
//   _components.img,
//   {
//     src: '/img/note/5/z-6-3.jpg',
//     alt: 'z-6-3',
//   },
//   undefined,
//   false,
//   {
//     fileName:
//       '/Users/houhongxu/workspace/hhx/zeropress/apps/examples/docs/测试超级超级超级超级长的头部/5webpack/6esm to cjs.md',
//     lineNumber: 17,
//     columnNumber: 4,
//   },
//   this,
// )
// 所以通过匹配_components.img即可定位src

interface vitePluginBuildImgOptions {
  siteConfig: SiteConfig
}

const isMdx = (file: string) => /\.mdx?/.test(file)

export function vitePluginBuildImg({
  siteConfig,
}: vitePluginBuildImgOptions): Plugin {
  return {
    name: 'vitePluginBuildImg',
    apply: 'build',
    transform(code, id) {
      let newCode = code

      // 含有img的md和mdx文件
      if (isMdx(id) && code.includes('_components.img')) {
        const dirname = path.dirname(id)

        // 相对public根路径的文件夹绝对路径
        const [, publicDirname] = dirname.split('docs')

        // 正则查找所有src路径
        const imageRegex = /_components\.img[^}]*?\bsrc:\s*["']([^"']+)["']/g

        const srcs = Array.from(code.matchAll(imageRegex), (match) => match[1])

        srcs.forEach(async (src) => {
          const decodeSrc = decodeURI(src)

          if (src.startsWith('./')) {
            // 相对路径使用publicDirname补全为绝对路径
            const newSrc = path.join(encodeURI(publicDirname), src)

            newCode = newCode.replace(src, newSrc)

            // 移动图片到dist public对应路径
            const oldPath = path.join(dirname, decodeSrc)

            const newPath = path.join(
              siteConfig.root,
              CLIENT_OUT_PATH,
              publicDirname,
              decodeSrc,
            )

            const isOldExits = await fse.exists(oldPath)

            const isNewExits = await fse.exists(newPath)

            if (isOldExits && !isNewExits) {
              await fse.ensureDir(path.dirname(newPath))

              await fse.copyFile(oldPath, newPath)
            }
          }
        })
      }

      return newCode
    },
  }
}
