import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { useSidebar } from 'runtime/default-theme/hooks'
import { SidebarDir, SidebarItem } from 'shared/types'

export function Siderbar() {
  const { sidebar } = useSidebar()

  if (!sidebar || Object.keys(sidebar).length < 1) {
    return <></>
  }

  return (
    <aside className="mt-nav w-sidebar border-divider bg-bg-sidebar pc:-translate-x-0 fixed inset-y-0 left-0 -translate-x-full overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300">
      {sidebar?.map((dir) => {
        return <SiderbarDir key={dir.text} dir={dir}></SiderbarDir>
      })}
    </aside>
  )
}

function SiderbarDir({ dir }: { dir: SidebarDir }) {
  return (
    <div className="border-divider mt-[4px] border-t first:mt-0 first:border-t-0">
      <h2 className="text-text-1 mb-[6px] mt-[12px] cursor-default font-[700]">
        {dir.text}
      </h2>

      <div className="mb-[12px] flex flex-col pl-[1rem]">
        {dir.items?.map((item) => {
          return <SiderbarItem key={item.link} item={item}></SiderbarItem>
        })}
      </div>
    </div>
  )
}

function SiderbarItem({ item }: { item: SidebarItem }) {
  const { text, link } = item
  const { pathname } = useLocation()
  const active = pathname === link

  return (
    <a href={link} className="p-[2px]">
      <span
        className={classNames(
          active ? 'text-brand' : 'text-text-2',
          'text-hover text-[14px]',
        )}
      >
        {text}
      </span>
    </a>
  )
}
