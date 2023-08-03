import classNames from 'classnames'
import { useEffect, useState } from 'react'
import {
  NavItem as NavItemType,
  PropsWithIsland,
  ThemeConfig,
} from 'shared/types'
import { isBrowser, normalizeUrl } from '../utils'
import { SwitchAppearance } from './SwitchAppearance'

export function Nav({ nav }: { nav: ThemeConfig['nav'] } & PropsWithIsland) {
  const { title, items } = nav ?? {}

  // 文件夹链接需要根据pathname更新nav高亮状态
  const [pathname, setPathname] = useState<string>()
  const [search, setSearch] = useState<string>()

  // 更新阅读文件夹链接内文章时的nav状态
  useEffect(() => {
    if (isBrowser() && typeof location !== 'undefined') {
      // 支持中文
      setPathname(decodeURI(location.pathname))
      setSearch(decodeURI(location.search))
    }
  }, [])

  return (
    <header className="w-full z-10 fixed top-0 left-0">
      <div className="flex items-center justify-between px-32px h-nav divider-bottom bg-bg-default">
        <a
          href="/"
          className="flex items-center w-full h-full font-600 transition-opacity duration-250"
          un-hover="opacity-60"
        >
          {title || 'HHXPRESS'}
        </a>

        <div className="h-full flex">
          {items?.map((item) => (
            <NavItem
              key={item.link}
              item={item}
              pathname={pathname}
              search={search}
            ></NavItem>
          ))}
        </div>

        <div className="flex" un-before="menu-item-before">
          <SwitchAppearance __island></SwitchAppearance>
        </div>

        <div
          className="flex text-text-2 transition-colors duration-250"
          un-before="menu-item-before"
          un-hover="text-text-1"
        >
          <a href="https://github.com/903040380/hhxpress">
            <div className="i-carbon-logo-github w-25px h-25px"></div>
          </a>
        </div>
      </div>
    </header>
  )
}

function NavItem({
  item,
  pathname,
  search,
}: {
  item: NavItemType
  pathname?: string
  search?: string
}) {
  const { text, link } = item
  const nav = link.split('/')[1]
  const active = nav && (pathname?.includes(nav) || search?.includes(nav))

  return (
    <div className="h-full mx-12px">
      <a
        href={normalizeUrl(link)}
        className={classNames(
          'block h-full before:contents flex items-center whitespace-nowrap text-14px font-500 transition-colors duration-250',
          active && 'text-brand-light',
        )}
        un-hover="text-brand-light"
      >
        {text}
      </a>
    </div>
  )
}
