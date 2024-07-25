import { PageDataContext, getPageData } from './usePageData'
import { ComponentProps, PropsWithChildren, useEffect, useState } from 'react'

export function PageDataProvider({
  children,
  value,
}: PropsWithChildren<ComponentProps<typeof PageDataContext.Provider>>) {
  const [pageData, setPageData] = useState(value.pageData)

  useEffect(() => {
    // mdx更新后重新获取pageData
    if (import.meta.hot) {
      import.meta.hot.on('mdx?-update', () =>
        getPageData(location.pathname).then(setPageData),
      )
    }
  })

  return (
    <PageDataContext.Provider value={{ pageData }}>
      {children}
    </PageDataContext.Provider>
  )
}
