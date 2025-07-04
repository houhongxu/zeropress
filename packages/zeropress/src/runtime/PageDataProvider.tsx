import { TitleHelmet } from './TitleHelmet'
import { getPageData } from './getPageData'
import { PageDataContext } from './usePageData'
import { useUpdateEffect } from './useUpdateEffect'
import { ComponentProps, PropsWithChildren, useEffect, useState } from 'react'
import { HelmetData } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

export function ClientPageDataProvider({
  children,
  value,
}: PropsWithChildren<ComponentProps<typeof PageDataContext.Provider>>) {
  const [pageData, setPageData] = useState(value.pageData)

  const location = useLocation()

  useUpdateEffect(() => {
    getPageData(location.pathname).then(setPageData)
  }, [location.pathname])

  useEffect(() => {
    // mdx更新后重新获取pageData
    if (import.meta.hot) {
      import.meta.hot.on('mdx?-update', () =>
        getPageData(location.pathname).then(setPageData),
      )
    }
  })

  return (
    <PageDataContext.Provider value={{ pageData, setPageData }}>
      <TitleHelmet pageData={pageData}></TitleHelmet>

      {children}
    </PageDataContext.Provider>
  )
}

export function ServerPageDataProvider({
  children,
  value,
  helmetContext,
}: PropsWithChildren<
  ComponentProps<typeof PageDataContext.Provider> & {
    helmetContext?: HelmetData['context']
  }
>) {
  const [pageData, setPageData] = useState(value.pageData)

  return (
    <PageDataContext.Provider value={{ pageData, setPageData }}>
      <TitleHelmet
        helmetContext={helmetContext}
        pageData={pageData}
      ></TitleHelmet>

      {children}
    </PageDataContext.Provider>
  )
}
