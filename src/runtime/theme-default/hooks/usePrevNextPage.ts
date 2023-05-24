import { useLocation } from 'react-router-dom'
import { SidebarItem } from 'shared/types'
import { useSidebarData } from './useSidebarData'

export function usePrevNextPage() {
  const { pathname } = useLocation()
  const { data } = useSidebarData()

  // TODO data链接与标题平铺到一个数组里面

  const titles = [
    { text: 'docs', link: '/docs/' },
    { text: 'floor', link: '/docs/depth/next/floor' },
    {
      text: 'set',
      link: '/docs/depth/set',
    },
    {
      text: 'intro',
      link: '/docs/intro',
    },
    {
      text: 'sec',
      link: '/docs/sec/',
    },
    {
      text: 'md',
      link: '/docs/test/md',
    },
    {
      text: 'mdx',
      link: '/docs/test/mdx',
    },
    {
      text: 'tsx',
      link: '/docs/test/tsx',
    },
  ]
  const pageIndex = titles.findIndex((item) => item.link === pathname)

  const prevPage: SidebarItem | undefined = titles[pageIndex - 1]
  const nextPage: SidebarItem | undefined = titles[pageIndex + 1]

  return { prevPage, nextPage }
}
