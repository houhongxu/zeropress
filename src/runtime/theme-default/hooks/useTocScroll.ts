import { RefObject, useEffect } from 'react'

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

function getTocScrollEvent(
  tocHighlight: HTMLDivElement,
  tocItems: HTMLAnchorElement[],
) {
  return {
    add: () =>
      window.addEventListener('scroll', () =>
        highlightToc(tocHighlight, tocItems),
      ),
    remove: () =>
      window.removeEventListener('scroll', () =>
        highlightToc(tocHighlight, tocItems),
      ),
  }
}

function highlightToc(
  tocHighlight: HTMLDivElement,
  tocItems: HTMLAnchorElement[],
) {
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

  for (let i = 0; i < headers.length; i++) {
    const currentHeader = headers[i]
    const nextHeader = headers[i + 1]
    const scrollTop = Math.ceil(window.scrollY)
    const currentHeaderTop =
      (currentHeader.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 第一个header之前
    if (scrollTop < currentHeaderTop) {
      clearHighlight(tocHighlight)
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

function clearHighlight(tocHighlight: HTMLDivElement) {
  tocHighlight.style.top = `33px`
  tocHighlight.style.opacity = '0'
}
