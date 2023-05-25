import { RefObject, useEffect } from 'react'
import { throttle } from 'lodash-es'

/**
 * 开启toc滚动高亮
 */
export function useTocScroll(
  tocHighlightRef: RefObject<HTMLDivElement>,
  tocContainerRef: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const tocHighlight = tocHighlightRef.current
    const tocContainer = tocContainerRef.current

    if (!tocHighlight || !tocContainer) return

    const tocItems = Array.from(tocContainer.getElementsByTagName('a'))

    const { add, remove } = getTocScrollEvent(tocHighlight, tocItems) // 在useEffect中才能拿到对应的dom

    add()

    return () => {
      remove()
    }
  }, [])
}

/**
 * 获取toc滚动高亮的事件监听开关
 */
function getTocScrollEvent(
  tocHighlight: HTMLDivElement,
  tocItems: HTMLAnchorElement[],
) {
  const throttled = throttle(() => highlightToc(tocHighlight, tocItems), 100)

  return {
    add: () => window.addEventListener('scroll', throttled),
    remove: () => window.removeEventListener('scroll', throttled),
  }
}

/**
 * 高亮toc
 */
function highlightToc(
  tocHighlight: HTMLDivElement,
  tocItems: HTMLAnchorElement[],
) {
  // 获取标题，因为类型所以用性能差的querySA，因为在useEffect查不了dom，而又不建议用useLayoutEffect，所以在监听回调函数中查询
  const headers = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.autolink-header'),
  ).filter((item) => item.parentElement?.tagName !== 'H1')

  const NAV_HEIGHT = 56

  // 最后一个header没到底时
  const isBottom =
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.scrollHeight
  if (isBottom) {
    highlightTocItem(tocHighlight, tocItems, headers, headers.length - 1)
    return
  }

  // 每次滚动都遍历headers查找在视口的header，然后高亮对应的tocItem
  for (let i = 0; i < headers.length; i++) {
    const currentHeader = headers[i]
    const nextHeader = headers[i + 1]
    const scrollTop = Math.ceil(window.scrollY)
    const currentHeaderTop =
      (currentHeader.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 第一个header之前
    if (scrollTop < currentHeaderTop) {
      clearTocHighlight(tocHighlight)
      break
    }

    // 最后一个header
    if (!nextHeader) {
      highlightTocItem(tocHighlight, tocItems, headers, i)
      break
    }

    const nextHeaderTop =
      (nextHeader.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 第一个header开始，每两个header之间
    if (scrollTop >= currentHeaderTop && scrollTop < nextHeaderTop) {
      highlightTocItem(tocHighlight, tocItems, headers, i)
      break
    }
  }
}

/**
 * 高亮header对应的tocItem
 */
function highlightTocItem(
  tocHighlight: HTMLDivElement,
  tocItems: HTMLAnchorElement[],
  headers: HTMLAnchorElement[],
  headerIndex: number,
) {
  const tocItemHrefs = tocItems.map((item) => item.getAttribute('href'))
  const header = headers[headerIndex]

  if (header) {
    const headerHref = header.getAttribute('href')

    // 从header找到对应的tocItem，header的href与tocItem的href对应
    const tocIndex = tocItemHrefs.findIndex(
      (tocItemHref) => tocItemHref === headerHref,
    )
    const tocItem = tocItems[tocIndex]

    // 高亮tocItem
    if (tocIndex > -1 && tocItem && tocHighlight) {
      tocHighlight.style.top = `${33 + tocIndex * 28}px`
      tocHighlight.style.opacity = '1'
    }
  }
}

/**
 * 清除toc所有高亮
 */
function clearTocHighlight(tocHighlight: HTMLDivElement) {
  tocHighlight.style.top = `33px`
  tocHighlight.style.opacity = '0'
}
