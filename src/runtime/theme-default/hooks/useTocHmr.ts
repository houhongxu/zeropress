import { useEffect, useState } from 'react'
import { TocItem } from 'shared/types'

export function useTocHmr(initToc: TocItem[]) {
  const [toc, setToc] = useState(initToc)

  useEffect(() => {
    if (import.meta.env.DEV) {
      import.meta.hot?.on(
        'mdx-changed',
        ({ filePath }: { filePath: string }) => {
          // TODO 参数是干什么的？未知原因ignore失效
          // 客户端可以使用import()
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
