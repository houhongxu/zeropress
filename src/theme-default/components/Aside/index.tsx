import { Header } from 'shared/types'
import { useRef } from 'react'

interface AsideProps {
  headers: Header[]
}

export function Aside(props: AsideProps) {
  const { headers = [] } = props
  // 是否展示大纲栏
  const hasOutline = headers.length > 0
  // 当前标题会进行高亮处理，我们会在这个标题前面加一个 marker 元素
  const markerRef = useRef<HTMLDivElement>(null)

  const renderHeader = (header: Header) => {
    return (
      <li key={header.id}>
        <a
          href={`#${header.id}`}
          className="block leading-7 text-text-2 hover:text-text-1"
          transition="color duration-300"
          style={{
            paddingLeft: (header.depth - 2) * 12,
          }}
        >
          {header.text}
        </a>
      </li>
    )
  }

  return (
    <div
      flex="~ col 1"
      style={{
        width: 'var(--island-aside-width)',
      }}
    >
      <div>
        {hasOutline && (
          <div
            id="aside-container"
            className="relative divider-left pl-4 text-13px font-medium"
          >
            <div
              ref={markerRef}
              id="aside-marker"
              className="absolute top-33px opacity-0 w-1px h-18px bg-brand"
              style={{
                left: '-1px',
                transition:
                  'top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s',
              }}
            ></div>
            <div leading-7="~" text="13px" font="semibold">
              ON THIS PAGE
            </div>
            <nav>
              <ul relative="~">{headers.map(renderHeader)}</ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
