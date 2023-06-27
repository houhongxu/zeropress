import { useLocation } from 'react-router-dom'
import { SidebarItem } from 'shared/types'
import { normalizeUrl } from '../utils'
import { useSidebarData } from './useSidebarData'

export function usePrevNextPage() {
  const { pathname } = useLocation()
  const { data } = useSidebarData()

  const flattendTitles: SidebarItem[] | undefined = data?.reduce(
    (pre, cur) => [...pre, ...(cur.items ? cur.items : [cur])],
    [] as SidebarItem[],
  )

  const pageIndex =
    flattendTitles?.findIndex(
      (item) =>
        normalizeUrl(item.link ?? '') === normalizeUrl(decodeURI(pathname)),
    ) ?? -1

  const prevPage: SidebarItem | undefined = flattendTitles
    ? flattendTitles[pageIndex - 1]
    : undefined
  const nextPage: SidebarItem | undefined = flattendTitles
    ? flattendTitles[pageIndex + 1]
    : undefined

  return { prevPage, nextPage }
}
