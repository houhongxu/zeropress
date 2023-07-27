import classNames from 'classnames'
import { useEffect, useState } from 'react'
import {
  PropsWithIsland,
  SidebarItem as SidebarItemType,
  ThemeConfig,
} from 'shared/types'
import { isBrowser, normalizeTitle, normalizeUrl } from '../utils'
import { Link } from './Link'

interface SidebarProps {
  sidebarData?: SidebarItemType[]
  nav: ThemeConfig['nav']
}

export function Sidebar({ nav, sidebarData }: SidebarProps & PropsWithIsland) {
  // 文件夹链接需要根据pathname更新侧边栏高亮状态
  const [pathname, setPathname] = useState<string>()
  const [search, setSearch] = useState<string>()

  useEffect(() => {
    if (isBrowser() && typeof location !== 'undefined') {
      // 支持中文
      setPathname(decodeURI(location.pathname))
      setSearch(decodeURI(location.search))
    }
  }, [])

  // 获取配置导航栏
  const { items } = nav ?? {}
  // 获取当前导航文件夹
  const curDir = pathname?.split('/')[1] ?? ''

  // 是否是配置的导航
  const isNav = items?.some((item) => item.link.startsWith('/' + curDir))

  // 是否是跳转文件夹侧边栏
  const isDirLinkSidebar = !isNav

  // 获取当前跳转文件夹属于的导航
  const curNav = search?.slice(1) ?? ''

  // 获取返回链接
  const backLink = items?.find((item) => item.link.includes(curNav))?.link

  // 为sidebar的链接都添加nav标记
  const dirLinkSidebarData = sidebarData?.map((item) => ({
    ...item,
    link: item.link ? item.link + search : item.link,
    items: item.items?.map((item) => ({
      ...item,
      link: item.link ? item.link + search : item.link,
    })),
  }))

  return (
    <aside
      className="fixed inset-y-0 left-0 opacity-0 -translate-x-full mt-nav w-sidebar px-32px pb-32px bg-bg-alt overflow-x-hidden overflow-y-auto transition-opacity transition-transform duration-500"
      un-md="opacity-100 translate-x-0"
    >
      <nav>
        {isDirLinkSidebar && (
          <Link
            href={normalizeUrl(backLink)}
            hover
            className="flex justify-between items-center"
          >
            <h2 className="mt-12px font-700">{normalizeTitle(curDir)}</h2>
            <div className="i-carbon-down-to-bottom mt-12px w-16px h-16px rotate-180"></div>
          </Link>
        )}
        {(isDirLinkSidebar ? dirLinkSidebarData : sidebarData)?.map(
          (sidebarGroupData) => (
            <SidebarDir
              key={sidebarGroupData.text}
              data={sidebarGroupData}
              pathname={pathname}
              search={search}
              nav={nav}
            ></SidebarDir>
          ),
        )}
      </nav>
    </aside>
  )
}

function SidebarDir({
  data,
  pathname,
  search,
  nav,
}: {
  data: SidebarItemType
  pathname?: string
  search?: string

  nav: ThemeConfig['nav']
}) {
  const { text, link, items } = data
  const active =
    normalizeUrl(link ?? '') === normalizeUrl(`${pathname}${search}`)

  const { items: navItems } = nav ?? {}
  const linkDir = normalizeTitle(link?.split('/')[1] ?? '')
  const curDir = normalizeTitle(pathname?.split('/')[1] ?? '')
  const isDirLinkSidebar =
    curDir !== linkDir && !navItems?.some((item) => item.link.includes(linkDir))

  // TODO siderbaritem 优化为选择样式
  return (
    <>
      {link ? (
        <div className="mt-4px" un-first="mt-16px">
          <div
            className={classNames(
              'p-4px text-14px font-500',
              active
                ? 'text-brand-light'
                : isDirLinkSidebar
                ? 'text-text-1'
                : 'text-text-2',
            )}
          >
            <Link
              href={normalizeUrl(link)}
              hover
              className={classNames(
                isDirLinkSidebar && 'flex justify-between items-center',
              )}
            >
              {isDirLinkSidebar ? (
                <h2 className="font-700">{text}</h2>
              ) : (
                <p>{text}</p>
              )}
              {isDirLinkSidebar && (
                <div className="i-carbon-down-to-bottom w-16px h-16px rotate-270"></div>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <section className="divider-top mt-16px" un-first="border-0 mt-0">
          <h2 className="cursor-default mt-12px mb-8px text-text-1 font-700">
            {text}
          </h2>

          <div className="mb-4px">
            {items?.map((item) => (
              <SidebarItem
                key={item.text}
                data={item}
                pathname={pathname}
                search={search}
              ></SidebarItem>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function SidebarItem({
  data,
  pathname,
  search,
}: {
  data: SidebarItemType
  pathname?: string
  search?: string
}) {
  const { text, link } = data
  const active =
    normalizeUrl(link ?? '') === normalizeUrl(`${pathname}${search}`)

  return (
    <div className="ml-20px">
      <div
        className={classNames(
          'p-4px text-14px font-500',
          active ? 'text-brand-light' : 'text-text-2',
        )}
      >
        <Link href={normalizeUrl(link)} hover>
          {text}
        </Link>
      </div>
    </div>
  )
}
