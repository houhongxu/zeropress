import { usePageData } from '@/runtime'
import { useLocation } from 'react-router-dom'

export function useSidebar() {
  const { pageData } = usePageData()
  const sidebar = pageData?.userConfig.themeConfig?.sidebar ?? {}
  const { pathname } = useLocation()

  const sidebarEntry = Object.entries(sidebar).find(([key]) =>
    pathname.startsWith(key),
  )

  const sidebarDir = sidebarEntry?.[1]

  return { sidebar: sidebarDir }
}
