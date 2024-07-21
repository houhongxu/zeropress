import { Switch } from './Switch'
import { LOGO_MAP } from './consts'
import classNames from 'classnames'
import { useDark, useWindowScroll } from 'default-theme/hooks'
import { useLocation } from 'react-router-dom'
import { usePageData } from 'runtime/usePageData'
import { NavItem } from 'shared/types'

export function Nav() {
  const { y: isScrolled } = useWindowScroll()
  const { pageData } = usePageData()
  const { pathname } = useLocation()
  const nav = pageData?.userConfig.themeConfig?.nav
  const isNotHome = pathname !== '/'

  const left = nav?.filter((item) => item.position === 'left')

  const right = nav?.filter(
    (item) => item.position === 'right' || item.position === undefined,
  )

  const getItem = (item: NavItem) => {
    const { text, img, logo, dark } = item

    if (text) {
      return <TextItem item={item} pathname={pathname}></TextItem>
    } else if (logo) {
      return <LogoItem item={item}></LogoItem>
    } else if (img) {
      return <ImgItem item={item}></ImgItem>
    } else if (dark) {
      return <DarkItem></DarkItem>
    } else {
      return <></>
    }
  }

  if (!nav || nav.length < 1) {
    return <></>
  }

  return (
    <header className="fixed left-0 top-0 z-10 w-full">
      <div
        className={classNames(
          isScrolled || isNotHome
            ? 'border-divider bg-bg-default'
            : 'border-transparent bg-transparent',
          'h-nav border-b px-[12px] pt-px transition-colors duration-300',
        )}
      >
        <div className="flex h-full items-center justify-between">
          <div className="flex justify-start">
            {left?.map((item, index) => (
              <div key={`${item.link}${index}`}>{getItem(item)}</div>
            ))}
          </div>

          <div className="flex justify-end">
            {right?.map((item, index) => (
              <div key={`${item.link}${index}`}>{getItem(item)}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

function TextItem({ item, pathname }: { item: NavItem; pathname?: string }) {
  const { text, link } = item
  const active = pathname === link

  if (!text) {
    return <></>
  }

  return (
    <nav className="mx-[12px] h-full justify-end">
      <a href={link} className="flex h-full items-center">
        <span
          className={classNames(
            active ? 'text-brand' : 'text-text-2',
            'text-hover whitespace-nowrap text-[14px] font-[500]',
          )}
        >
          {text}
        </span>
      </a>
    </nav>
  )
}

function LogoItem({ item }: { item: NavItem }) {
  const { logo, link } = item

  if (!logo) {
    return <></>
  }

  return (
    <nav className="mx-[12px] h-full">
      <a href={link} className="flex h-full items-center">
        <span
          className={classNames(
            LOGO_MAP[logo],
            'text-text-2 text-hover h-[24px] w-[24px]',
          )}
        ></span>
      </a>
    </nav>
  )
}

function ImgItem({ item }: { item: NavItem }) {
  const { img, link } = item

  if (!img) {
    return <></>
  }

  return (
    <nav className="mx-[12px] h-full">
      <a href={link} className="flex h-full items-center">
        <img src={img} className="h-[24px] w-[24px]"></img>
      </a>
    </nav>
  )
}

function DarkItem() {
  const { toggle } = useDark()

  return (
    <nav className="mx-[4px] flex h-full items-center">
      <Switch onClick={toggle}></Switch>
    </nav>
  )
}
