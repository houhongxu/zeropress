import classNames from 'classnames'
import { Location, useLocation } from 'react-router-dom'
import { SidebarItem as SidebarItemType, ThemeConfig } from 'shared/types'
import { normalizeTitle, normalizeUrl } from '../utils'
import { Link } from './Link'

interface SidebarProps {
  sidebarData?: SidebarItemType[]
  location: Location
  nav: ThemeConfig['nav']
}

export function Sidebar({ nav, sidebarData, location }: SidebarProps) {
  //  根据location 设计一个返回按钮返回跳转来的 /docs,并展示此处为docs->http，并未http添加图标
  const isExtra = !!location.search

  const { items } = nav ?? {}
  const curDir = normalizeTitle(location.pathname.split('/')[1])
  const curNav = location.search.slice(1)
  const backLink = items?.find((item) => item.link.includes(curNav))?.link

  return (
    <aside
      className="fixed inset-y-0 left-0 opacity-0 -translate-x-full mt-nav w-sidebar px-32px pb-32px bg-bg-alt overflow-x-hidden overflow-y-auto transition-opacity transition-transform duration-500"
      un-md="opacity-100 translate-x-0"
    >
      <nav>
        {isExtra && (
          <Link
            href={normalizeUrl(backLink)}
            hover
            className={classNames(
              isExtra && 'flex justify-between items-center',
            )}
          >
            {isExtra ? (
              <h2 className="mt-12px font-700">{curDir}</h2>
            ) : (
              <p>{curDir}</p>
            )}
            {isExtra && (
              <div className="i-carbon-down-to-bottom mt-12px w-16px h-16px rotate-180"></div>
            )}
          </Link>
        )}
        {(isExtra
          ? sidebarData?.map((item) => ({
              ...item,
              link: item.link ? item.link + location.search : item.link,
              items: item.items?.map((item) => ({
                ...item,
                link: item.link ? item.link + location.search : item.link,
              })),
            }))
          : sidebarData
        )?.map((sidebarGroupData) => (
          <SidebarDir
            key={sidebarGroupData.text}
            data={sidebarGroupData}
            location={location}
            nav={nav}
          ></SidebarDir>
        ))}
      </nav>
    </aside>
  )
}

function SidebarDir({
  data,
  location,
  nav,
}: {
  data: SidebarItemType
  location: Location
  nav: ThemeConfig['nav']
}) {
  const { text, link, items } = data
  const active =
    normalizeUrl(link ?? '') ===
    normalizeUrl(decodeURI(location.pathname + location.search))

  const { items: navItems } = nav ?? {}
  const linkDir = normalizeTitle(link?.split('/')[1] ?? '')
  const curDir = normalizeTitle(location.pathname.split('/')[1])
  const isExtra =
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
                : isExtra
                ? 'text-text-1'
                : 'text-text-2',
            )}
          >
            <Link
              href={normalizeUrl(link)}
              hover
              className={classNames(
                isExtra && 'flex justify-between items-center',
              )}
            >
              {isExtra ? <h2 className="font-700">{text}</h2> : <p>{text}</p>}
              {isExtra && (
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
                location={location}
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
  location,
}: {
  data: SidebarItemType
  location: Location
}) {
  const { text, link } = data
  const active =
    normalizeUrl(link ?? '') ===
    normalizeUrl(decodeURI(location.pathname + location.search))

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
