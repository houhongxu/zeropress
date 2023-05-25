import classNames from 'classnames'
import { SidebarItem as SidebarItemType } from 'shared/types'
import { Link } from './Link'

interface SidebarProps {
  sidebarData?: SidebarItemType[]
  pathname: string
}

export function Sidebar({ sidebarData, pathname }: SidebarProps) {
  return (
    <aside
      className="fixed inset-y-0 left-0 opacity-0 -translate-x-full pt-nav w-sidebar px-32px pb-32px bg-bg-alt overflow-x-hidden overflow-y-auto transition-opacity transition-transform duration-500"
      un-md="opacity-100 translate-x-0"
    >
      <nav>
        {sidebarData?.map((sidebarGroupData) => (
          <SidebarGroup
            key={sidebarGroupData.text}
            {...sidebarGroupData}
            pathname={pathname}
          ></SidebarGroup>
        ))}
      </nav>
    </aside>
  )
}

function SidebarGroup({
  text,
  link,
  items,
  pathname,
}: SidebarItemType & { pathname: string }) {
  return (
    <section className="divider-top mt-16px" un-first="border-0 mt-0">
      <Link href={link}>
        <h2 className="mt-12px mb-8px text-text-1 font-700">{text}</h2>
      </Link>

      <div className="mb-4px">
        {items?.map((item) => (
          <SidebarItem
            key={item.text}
            {...item}
            pathname={pathname}
          ></SidebarItem>
        ))}
      </div>
    </section>
  )
}

function SidebarItem({
  text,
  link,
  pathname,
}: SidebarItemType & { pathname: string }) {
  const active = link === pathname
  return (
    <div className="ml-20px">
      <div
        className={classNames(
          'p-4px text-14px font-500',
          active ? 'text-brand-default' : 'text-text-2',
        )}
      >
        <Link href={link} hover>
          {text}
        </Link>
      </div>
    </div>
  )
}
