// 提供pageData给react组件

import { createContext, useContext } from 'react'
import { PageData } from 'shared/types'

export const PageDataContext = createContext({} as PageData)

export const usePageData = () => {
  return useContext(PageDataContext)
}
