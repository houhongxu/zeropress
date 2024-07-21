import { getPageData, usePageData } from './usePageData'
import { PropsWithChildren, useEffect } from 'react'

export function PageDataLayout({ children }: PropsWithChildren) {
  const { setPageData, setToc } = usePageData()

  useEffect(() => {
    // 初始化pageData
    getPageData(location.pathname).then((pageData) => {
      setPageData(pageData)
      setToc(pageData.toc)
    })
  }, [])

  useEffect(() => {
    // mdx更新后重新获取pageData
    if (import.meta.hot) {
      import.meta.hot.on('mdx?-update', () =>
        getPageData(location.pathname).then(({ toc }) => setToc(toc)),
      )
    }
  })

  return <>{children}</>
}
