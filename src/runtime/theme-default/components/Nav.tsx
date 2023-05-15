import { usePageData } from 'runtime/hooks'
import { NavItem as NavItemType } from 'shared/types'
import { SwitchAppearance } from './SwitchAppearance'

export function Nav() {
  const { userConfig } = usePageData()
  const nav = userConfig.themeConfig.nav || []
  return (
    <header className="w-full" fixed pos="top-0 left-0">
      <div className="flex items-center justify-between px-32px h-56px divider-bottom">
        <a
          href="/"
          className="flex items-center w-full h-full text-1rem font-600"
          hover="opacity-60"
          transition="opacity duration-250"
        >
          HHXPRESS
        </a>

        <div className="h-full" flex="">
          {nav.map((item) => (
            <NavItem key={item.link} {...item}></NavItem>
          ))}
        </div>

        <div flex before="menu-item-before">
          <SwitchAppearance></SwitchAppearance>
        </div>

        <div
          className="flex color-[var(--hp-c-text-2)]"
          before="menu-item-before"
          hover="color-[var(--hp-c-text-1)]"
          transition="colors duration-250"
        >
          <a href="/">
            <div className="i-carbon-logo-github w-25px h-25px"></div>
          </a>
        </div>
      </div>
    </header>
  )
}

function NavItem({ link, text }: NavItemType) {
  return (
    <div className="h-full mx-12px">
      <a
        href={link}
        className="h-full flex items-center whitespace-nowrap text-14px font-500"
        block
        transition="colors duration-250"
        hover="color-[var(--hp-c-brand)]"
      >
        {text}
      </a>
    </div>
  )
}
