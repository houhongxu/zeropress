import classNames from 'classnames'
import { SidebarItem as SidebarItemType } from 'shared/types'
import { normalizeHref } from '../utils'
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
          <SidebarDir
            key={sidebarGroupData.text}
            data={sidebarGroupData}
            pathname={pathname}
          ></SidebarDir>
        ))}
      </nav>
    </aside>
  )
}

function SidebarDir({
  data,
  pathname,
}: {
  data: SidebarItemType
  pathname: string
}) {
  const { text, link, items } = data
  const active = link === pathname

  return (
    <>
      {link ? (
        <div className="mt-4px" un-first="mt-16px">
          <div
            className={classNames(
              'p-4px text-14px font-500',
              active ? 'text-brand-default' : 'text-text-2',
            )}
          >
            <Link href={normalizeHref(link)} hover>
              {text}
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
}: {
  data: SidebarItemType
  pathname: string
}) {
  const { text, link } = data
  const active = link === pathname

  return (
    <div className="ml-20px">
      <div
        className={classNames(
          'p-4px text-14px font-500',
          active ? 'text-brand-default' : 'text-text-2',
        )}
      >
        <Link href={normalizeHref(link)} hover>
          {text}
        </Link>
      </div>
    </div>
  )
}
