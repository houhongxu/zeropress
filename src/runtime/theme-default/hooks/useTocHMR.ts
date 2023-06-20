import { useEffect, useState } from 'react'
import { TocItem } from 'shared/types'

export function useTocHMR(initToc: TocItem[]) {
  const [toc, setToc] = useState(initToc)

  useEffect(() => {
    if (import.meta.env.DEV) {
      import.meta.hot?.on(
        'mdx-changed',
        ({ filePath }: { filePath: string }) => {
          // TODO 未知原因ignore失效
          // 客户端可以使用import()，添加参数是为了避免浏览器请求缓存
          import(/* @vite-ignore */ `${filePath}?import&t=${Date.now()}`).then(
            (module) => {
              setToc(module.toc)
            },
          )
        },
      )
    }
  })

  return toc
}
