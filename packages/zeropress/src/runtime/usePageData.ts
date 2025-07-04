import { PageData } from '@/shared/types'
import { createContext, useContext } from 'react'

interface Props {
  pageData?: PageData
  setPageData?: React.Dispatch<React.SetStateAction<PageData | undefined>>
}

export const PageDataContext = createContext<Props>({})

export const usePageData = () => {
  return useContext(PageDataContext)
}
