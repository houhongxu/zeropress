import { useState, useEffect } from 'react'
import { TocItem } from 'shared/types'

// TODO toc热更新是否可以合并入useData

export function useTocHMR(initialToc?: TocItem[]) {
  const [toc, setToc] = useState(initialToc ?? [])

  useEffect(() => {
    if (import.meta.env.DEV && import.meta.hot) {
      import.meta.hot.on('mdx-update', async ({ filePath }) => {
        //  时间戳参数避免浏览器缓存，ignore是因为规则限制使用相对路径，但是开发环境无需考虑这个问题
        const module = await import(
          /* @vite-ignore */ `${filePath}?t=${Date.now()}`
        )

        setToc(module.toc)
      })
    }
  })

  return toc
}
