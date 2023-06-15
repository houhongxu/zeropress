import classNames from 'classnames'
import { NavItem as NavItemType } from 'shared/types'
import { usePageData } from '../../usePageData'
import { SwitchAppearance } from './SwitchAppearance'

export function Nav({ pathname }: { pathname: string }) {
  const { userConfig } = usePageData()
  const nav = userConfig.themeConfig?.nav || []
  return (
    <header className="w-full z-10 fixed top-0 left-0">
      <div className="flex items-center justify-between px-32px h-nav divider-bottom bg-bg-default">
        <a
          href="/"
          className="flex items-center w-full h-full font-600 transition-opacity duration-250"
          un-hover="opacity-60"
        >
          HHXPRESS
        </a>

        <div className="h-full flex">
          {nav.map((item) => (
            <NavItem key={item.link} item={item} pathname={pathname}></NavItem>
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
          <a href="/">
            <div className="i-carbon-logo-github w-25px h-25px"></div>
          </a>
        </div>
      </div>
    </header>
  )
}

function NavItem({ item, pathname }: { item: NavItemType; pathname: string }) {
  const { text, link } = item
  const nav = link.split('/')[1]

  const active = nav && pathname.includes(nav)

  return (
    <div className="h-full mx-12px">
      <a
        href={link}
        className={classNames(
          'block h-full before:contents flex items-center whitespace-nowrap text-14px font-500 transition-colors duration-250',
          active && 'text-brand-default',
        )}
        un-hover="text-brand-default"
      >
        {text}
      </a>
    </div>
  )
}
