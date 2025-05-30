import { NAV_HEIGHT } from '@/default-theme/consts'
import { useDisableScroll, useTocScroll } from '@/default-theme/hooks'
import { PageData, TocItem as TocItemType } from '@/shared/types'
import classNames from 'classnames'

export function MobileToc({
  visible,
  onClick,
  toc,
}: {
  visible?: boolean
  onClick?: () => void
  toc?: PageData['toc']
}) {
  useDisableScroll(visible)

  if (!Array.isArray(toc) || toc.length < 1) {
    return <div className="w-toc full:block hidden h-[100px]"></div>
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
          'w-toc border-divider bg-bg-sidebar fixed inset-y-0 right-0 h-full border-l px-[28px] py-[16px] transition-transform duration-300',
          visible ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <TocBody onClick={onClick} toc={toc}></TocBody>
      </aside>
    </>
  )
}

export function Toc({ toc }: { toc?: PageData['toc'] }) {
  if (!Array.isArray(toc) || toc.length < 1) {
    return <div className="w-toc full:block hidden h-[100px]"></div>
  }

  return (
    <aside className="w-toc full:flex sticky top-[calc(theme(spacing.nav)+48px)] hidden h-full flex-col">
      <TocBody toc={toc}></TocBody>
    </aside>
  )
}

function TocBody({
  toc,
  onClick,
}: {
  toc: PageData['toc']
  onClick?: () => void
}) {
  const [index] = useTocScroll()

  return (
    <div className="border-divider pc:border-l px-[16px] font-[500]">
      <div
        className="pc:block bg-brand absolute left-0 hidden h-[18px] w-px transition-[opacity,top] duration-300"
        style={
          index !== undefined
            ? { top: index * 28 + 33, opacity: 100 }
            : { top: 33, opacity: 0 }
        }
      ></div>

      <div className="text-[14px] font-[600] leading-[28px]">本页目录</div>

      <div>
        {toc.map((item, i) => (
          <TocItem
            onClick={onClick}
            active={index === i}
            key={item.id}
            item={item}
          ></TocItem>
        ))}
      </div>
    </div>
  )
}

function TocItem({
  item,
  active = false,
  onClick,
}: {
  item: TocItemType
  active?: boolean
  onClick?: () => void
}) {
  return (
    <div>
      <a
        href={`#${item.id}`}
        className={classNames(
          active ? 'text-brand' : 'text-text-2',
          'text-hover text-overflow block text-[13px] leading-[28px]',
        )}
        onClick={(event) => {
          onClick?.()

          event.preventDefault()

          const target = document.getElementById(item.id)

          const top = (target?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

          scrollTo({ top })
        }}
        style={{
          paddingLeft: `${item.depth - 2}rem`,
        }}
      >
        {item.text}
      </a>
    </div>
  )
}
