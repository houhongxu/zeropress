import { useEffect, useState } from 'react'
import { Header } from 'shared/types/index'

export function useHeaders(initHeaders: Header[]) {
  const [headers, setHeaders] = useState(initHeaders)

  // TODO 类型问题
  useEffect(() => {
    if (import.meta.env.DEV) {
      import.meta.hot.on(
        'mdx-changed',
        ({ filePath }: { filePath: string }) => {
          import(/* @vite-ignore */ `${filePath}?import&t=${Date.now()}`).then(
            (module) => {
              setHeaders(module.toc)
            }
          )
        }
      )
    }
  })
  return headers
}
