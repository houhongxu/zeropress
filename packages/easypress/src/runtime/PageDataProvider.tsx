import { PageDataContext, getPageData } from './usePageData'
import { ComponentProps, PropsWithChildren, useEffect, useState } from 'react'

export function PageDataProvider({
  children,
  value,
}: PropsWithChildren<ComponentProps<typeof PageDataContext.Provider>>) {
  const [toc, setToc] = useState(value.toc)

  useEffect(() => {
    // mdx更新后重新获取pageData
    if (import.meta.hot) {
      import.meta.hot.on('mdx?-update', () =>
        getPageData(location.pathname).then(({ toc }) => setToc(toc)),
      )
    }
  })

  return (
    <PageDataContext.Provider value={{ ...value, toc }}>
      {children}
    </PageDataContext.Provider>
  )
}
