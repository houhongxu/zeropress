import classNames from 'classnames'
import { NAV_HEIGHT } from 'default-theme/consts'
import { useTocScroll } from 'default-theme/hooks'
import { TocItem as TocItemType } from 'shared/types'

export function Toc({ toc }: { toc?: TocItemType[] }) {
  const [index] = useTocScroll()

  if (!toc || toc.length < 1) {
    return <></>
  }

  return (
    <aside className="w-toc full:flex sticky top-[calc(theme(spacing.nav)+48px)] hidden h-full flex-col">
      <div className="border-divider border-l px-[16px] font-[500]">
        <div
          className="bg-brand absolute left-0 h-[18px] w-px transition-[opacity,top] duration-300"
          style={
            index !== undefined
              ? { top: index * 28 + 33, opacity: 100 }
              : { top: 33, opacity: 0 }
          }
        ></div>

        <div className="text-[14px] font-[600] leading-[28px]">本页目录</div>

        <div>
          {toc.map((item, i) => (
            <TocItem active={index === i} key={item.id} item={item}></TocItem>
          ))}
        </div>
      </div>
    </aside>
  )
}

function TocItem({
  item,
  active = false,
}: {
  item: TocItemType
  active?: boolean
}) {
  return (
    <div>
      <a
        href={`#${item.id}`}
        className={classNames(
          active ? 'text-brand' : 'text-text-2',
          'text-hover block overflow-hidden text-ellipsis whitespace-nowrap text-[13px] leading-[28px]',
        )}
        onClick={(event) => {
          event.preventDefault()
          const target = document.getElementById(item.id)
          scrollTo({ top: (target?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT })
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
