import { Switch } from './Switch'
import { LOGO_MAP } from './consts'
import classNames from 'classnames'
import { useDark, useWindowScroll } from 'default-theme/hooks'
import { useLocation } from 'react-router-dom'
import { Link } from 'runtime'
import { usePageData } from 'runtime'
import { NavItem } from 'shared/types'

export function Nav() {
  const { y } = useWindowScroll()
  const { pageData } = usePageData()
  const { pathname } = useLocation()

  const nav = pageData?.userConfig.themeConfig?.nav

  const isScrolled = Boolean(y)
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
    <header className="pc:fixed absolute left-0 top-0 z-50 w-full">
      <div
        className={classNames(
          isScrolled || isNotHome
            ? 'border-divider bg-bg-default'
            : 'border-transparent bg-transparent',
          'h-nav border-b px-[12px] pt-px transition-colors duration-300',
        )}
      >
        <div className="flex h-full items-center justify-between">
          <div className="flex h-full justify-start">
            {left?.map((item, index) => (
              <div className="h-full" key={`${item.link}${index}`}>
                {getItem(item)}
              </div>
            ))}
          </div>

          <div className="flex h-full justify-end">
            {right?.map((item, index) => (
              <div className="h-full" key={`${item.link}${index}`}>
                {getItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

function TextItem({ item, pathname }: { item: NavItem; pathname?: string }) {
  const { text, link } = item
  const getDirname = (url = '/') => url.split('/').at(-2)
  const active = getDirname(pathname) === getDirname(link)

  if (!text) {
    return <></>
  }

  return (
    <nav className="mx-[12px] h-full justify-end">
      <Link
        href={link}
        className={classNames(
          active ? 'text-brand' : 'text-text-2',
          'text-hover flex h-full items-center whitespace-nowrap text-[14px] font-[500]',
        )}
      >
        {text}
      </Link>
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
      <Link
        href={link}
        className="text-text-2 text-hover flex  h-full items-center"
      >
        <span
          className={classNames(LOGO_MAP[logo], 'h-[24px] w-[24px]')}
        ></span>
      </Link>
    </nav>
  )
}

function ImgItem({ item }: { item: NavItem }) {
  const { img, link } = item

  if (!img) {
    return <></>
  }

  return (
    <nav className="mx-[12px] flex h-full items-center">
      <Link href={link}>
        <img src={img} className="h-[24px] w-[24px]"></img>
      </Link>
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
