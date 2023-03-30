import { usePageData } from '@runtime'
import { NavItemWithLink } from 'shared/types'
import styles from './index.module.scss'
import { SwitchApperance } from './SwitchAppearance'

export function Nav() {
  const { siteData } = usePageData()
  const nav = siteData?.themeConfig?.nav ?? []
  return (
    <header fixed="~" pos="t-0 l-0" w="full" z="10">
      <div
        flex="~"
        items="center"
        justify="between"
        className={`h-14 divider-bottom ${styles.nav}`}
      >
        <div>
          <a
            href="/"
            className="w-full h-full text-1rem font-semibold felx items-center"
            hover="opacity-60"
          >
            HHX-DOCS
          </a>
        </div>

        <div flex="~">
          <div flex="~">
            {nav.map((item) => (
              <MenuItem {...item} key={item.text}></MenuItem>
            ))}
          </div>

          <div before="menu-item-before" flex="~">
            <SwitchApperance></SwitchApperance>
          </div>

          <div
            className={styles.socialLinkIcon}
            before="menu-item-before"
            ml="2"
          >
            <a href="/">
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function MenuItem(item: NavItemWithLink) {
  return (
    <div className="text-sm font-medium mx-3">
      <a href={item.link} className={styles.link}>
        {item.text}
      </a>
    </div>
  )
}
