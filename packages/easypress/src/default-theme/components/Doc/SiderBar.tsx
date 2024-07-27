import classNames from 'classnames'
import { useSidebar } from 'default-theme/hooks'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'runtime'
import { SidebarDir, SidebarItem } from 'shared/types'

export function MobileSiderbar({
  visible,
  onClick,
}: {
  visible?: boolean
  onClick?: () => void
}) {
  const { sidebar } = useSidebar()

  if (!Array.isArray(sidebar) || sidebar.length < 1) {
    return <></>
  }

  return (
    <>
      <div
        className={classNames(
          'fixed inset-0 bg-[#00000060] transition-all duration-300',
          visible ? 'opacity-100' : 'opacity-0',
          visible ? 'visible' : 'invisible',
        )}
        onClick={onClick}
      ></div>

      <aside
        className={classNames(
          'w-sidebar border-divider bg-bg-sidebar fixed inset-y-0 left-0 z-40 overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300',
          visible ? '-translate-x-0' : '-translate-x-full',
        )}
        onClick={onClick}
      >
        {sidebar.map((dir) => {
          return <SiderbarDir key={dir.text} dir={dir}></SiderbarDir>
        })}
      </aside>
    </>
  )
}

export function Siderbar() {
  const { sidebar } = useSidebar()

  if (!Array.isArray(sidebar) || Object.keys(sidebar).length < 1) {
    return <></>
  }

  return (
    <aside className="mt-nav w-sidebar border-divider bg-bg-sidebar pc:-translate-x-0 fixed inset-y-0 left-0 z-40 -translate-x-full overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300">
      {sidebar.map((dir) => {
        return <SiderbarDir key={dir.text} dir={dir}></SiderbarDir>
      })}
    </aside>
  )
}

function SiderbarDir({
  dir,
  onClick,
}: {
  dir: SidebarDir
  onClick?: () => void
}) {
  const [isExpand, setIsExpand] = useState(!dir.collapsed)

  return (
    <div
      onClick={onClick}
      className="border-divider mt-[4px] border-t first:mt-0 first:border-t-0"
    >
      <h2
        onClick={() => setIsExpand((pre) => !pre)}
        className="text-text-1 mb-[6px] mt-[12px] flex cursor-pointer items-center justify-between font-[700]"
      >
        <span>{dir.text}</span>
        <span
          className={classNames(
            isExpand ? 'rotate-90' : 'rotate-0',
            'icon-[carbon--chevron-right]',
            'transition-transform duration-300',
          )}
        ></span>
      </h2>

      <div
        style={{
          height: isExpand ? `${(dir.items?.length ?? 0) * 25}px` : '0',
        }}
        className={classNames(
          'mb-[12px] flex flex-col overflow-hidden pl-[1rem] transition-[height] duration-300',
        )}
      >
        {dir.items?.map((item) => (
          <SiderbarItem key={item.link} item={item}></SiderbarItem>
        ))}
      </div>
    </div>
  )
}

function SiderbarItem({
  item,
  onClick,
}: {
  item: SidebarItem
  onClick?: () => void
}) {
  const { text, link } = item
  const { pathname } = useLocation()
  const active = pathname === link

  return (
    <Link
      href={link}
      onClick={onClick}
      className={classNames(
        active ? 'text-brand' : 'text-text-2',
        'text-hover p-[2px] text-[14px]',
      )}
    >
      {text}
    </Link>
  )
}
