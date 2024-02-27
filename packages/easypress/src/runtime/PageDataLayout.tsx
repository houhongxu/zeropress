import { getPageData, usePageData } from './usePageData'
import { PropsWithChildren, useEffect } from 'react'

export function PageDataLayout({ children }: PropsWithChildren) {
  const { setPageData } = usePageData()

  useEffect(() => {
    // 初始化pageData
    getPageData(location.pathname).then(setPageData)
  }, [])

  useEffect(() => {
    // mdx更新后重新获取pageData
    if (import.meta.env.DEV && import.meta.hot) {
      import.meta.hot.on('mdx?-update', () =>
        getPageData(location.pathname).then(setPageData),
      )
    }
  })

  return <>{children}</>
}
