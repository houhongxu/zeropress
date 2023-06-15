import { useEffect, useState } from 'react'

export function useSidebarHMR(
  initSidebarTitles: (string | undefined)[],
  title?: string,
) {
  const [titles, setTitles] = useState(initSidebarTitles)

  useEffect(() => {
    if (import.meta.env.DEV) {
      import.meta.hot?.on(
        'mdx-changed',
        ({ filePath }: { filePath: string }) => {
          // TODO 未知原因ignore失效
          // 客户端可以使用import()，添加参数是为了避免浏览器请求缓存
          import(/* @vite-ignore */ `${filePath}?import&t=${Date.now()}`).then(
            (module) => {
              setTitles(
                initSidebarTitles.map((sidebarTitle) =>
                  sidebarTitle === title ? module.title : sidebarTitle,
                ),
              )
            },
          )
        },
      )
    }
  })

  return titles
}
