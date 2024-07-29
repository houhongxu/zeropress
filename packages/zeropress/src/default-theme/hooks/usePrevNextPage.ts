import { useSidebar } from './useSidebar'
import { SidebarItem } from '@/shared/types'
import { useLocation } from 'react-router-dom'

export function usePrevNextPage() {
  const { sidebar } = useSidebar()
  const { pathname } = useLocation()

  const flatted = sidebar?.map((dir) => dir.items ?? []).flat() ?? []

  const currentPageIndex = flatted.findIndex((item) => item?.link === pathname)
  const prevPage = flatted[currentPageIndex - 1] as SidebarItem | undefined
  const nextPage = flatted[currentPageIndex + 1] as SidebarItem | undefined

  return { prevPage, nextPage }
}
