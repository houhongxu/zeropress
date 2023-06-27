import { RefObject, useEffect } from 'react'
import { throttle } from 'lodash-es'
import { isBrowser } from '../utils'

const NAV_HEIGHT = 56

/**
 * 开启toc滚动高亮
 */
export function useTocScroll(
  tocHighlightRef: RefObject<HTMLDivElement>,
  tocContainerRef: RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    const tocHighlightDom = tocHighlightRef.current
    const tocContainerDom = tocContainerRef.current

    if (!tocHighlightDom || !tocContainerDom) return

    const tocItemDoms = Array.from(tocContainerDom.getElementsByTagName('a'))

    const { add, remove } = getTocScrollEvent(tocHighlightDom, tocItemDoms) // 在useEffect中才能拿到对应的dom

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
  tocHighlightDom: HTMLDivElement,
  tocItemDoms: HTMLAnchorElement[],
) {
  const throttled = throttle(
    () => highlightToc(tocHighlightDom, tocItemDoms),
    100,
  )

  return {
    add: () => window.addEventListener('scroll', throttled),
    remove: () => window.removeEventListener('scroll', throttled),
  }
}

/**
 * 高亮toc
 */
function highlightToc(
  tocHighlightDom: HTMLDivElement,
  tocItemDoms: HTMLAnchorElement[],
) {
  // 获取标题，因为类型所以用性能差的querySA，因为在useEffect查不了dom，而又不建议用useLayoutEffect，所以在监听回调函数中查询
  const headerDoms = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.autolink-header'),
  ).filter((item) => item.parentElement?.tagName !== 'H1')

  // 最后一个header没到底时
  const isBottom =
    document.documentElement.scrollTop + window.innerHeight >=
    document.documentElement.scrollHeight
  if (isBottom) {
    highlightTocItem(
      tocHighlightDom,
      tocItemDoms,
      headerDoms,
      headerDoms.length - 1,
    )
    return
  }

  // 每次滚动都遍历headers查找在视口的header，然后高亮对应的tocItem
  for (let i = 0; i < headerDoms.length; i++) {
    const currentHeaderDom = headerDoms[i]
    const nextHeaderDom = headerDoms[i + 1]
    const scrollTop = Math.ceil(window.scrollY)
    const currentHeaderTop =
      (currentHeaderDom.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 第一个header之前
    if (scrollTop < currentHeaderTop) {
      clearTocHighlight(tocHighlightDom)
      break
    }

    // 最后一个header
    if (!nextHeaderDom) {
      highlightTocItem(tocHighlightDom, tocItemDoms, headerDoms, i)
      break
    }

    const nextHeaderTop =
      (nextHeaderDom.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 第一个header开始，每两个header之间
    if (scrollTop >= currentHeaderTop && scrollTop < nextHeaderTop) {
      highlightTocItem(tocHighlightDom, tocItemDoms, headerDoms, i)
      break
    }
  }
}

/**
 * 高亮header对应的tocItem
 */
function highlightTocItem(
  tocHighlightDom: HTMLDivElement,
  tocItemDoms: HTMLAnchorElement[],
  headerDoms: HTMLAnchorElement[],
  headerIndex: number,
) {
  const tocItemHrefs = tocItemDoms.map((item) => item.getAttribute('href'))
  const header = headerDoms[headerIndex]

  if (header) {
    const headerHref = header.getAttribute('href')

    // 从header找到对应的tocItem，header的href与tocItem的href对应
    const tocIndex = tocItemHrefs.findIndex(
      (tocItemHref) => tocItemHref === headerHref,
    )
    const tocItemDom = tocItemDoms[tocIndex]

    // 高亮tocItem
    if (tocIndex > -1 && tocItemDom && tocHighlightDom) {
      tocHighlightDom.style.top = `${33 + tocIndex * 28}px`
      tocHighlightDom.style.opacity = '1'
    }
  }
}

/**
 * 清除toc所有高亮
 */
function clearTocHighlight(tocHighlightDom: HTMLDivElement) {
  tocHighlightDom.style.top = `33px`
  tocHighlightDom.style.opacity = '0'
}

export function scrollToTarget(target: HTMLElement, isSmooth: boolean = false) {
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
  const targetPaddingTop = parseInt(
    window.getComputedStyle(target).paddingTop,
    10,
  )

  // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  const targetTop =
    window.scrollY +
    target.getBoundingClientRect().top +
    targetPaddingTop -
    NAV_HEIGHT

  // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? 'smooth' : 'auto',
  })
}

// Control the scroll behavior of the browser when user clicks on a link
function bindingWindowScroll() {
  // Initial scroll position
  function scrollTo(el: HTMLElement, hash: string, isSmooth = false) {
    let target: HTMLElement | null = null
    try {
      target = el.classList.contains('autolink-header')
        ? el
        : document.getElementById(decodeURIComponent(hash.slice(1)))
    } catch (e) {
      console.warn(e)
    }
    if (target) {
      scrollToTarget(target, isSmooth)
    }
  }

  window.addEventListener(
    'click',
    (e) => {
      // Only handle a tag click
      const link = (e.target as Element).closest('a')
      if (link) {
        const { origin, hash, target, pathname, search } = link
        const currentUrl = window.location
        // only intercept inbound links
        if (hash && target !== '_blank' && origin === currentUrl.origin) {
          // scroll between hash anchors in the same page
          if (
            pathname === currentUrl.pathname &&
            search === currentUrl.search &&
            hash &&
            hash !== currentUrl.hash &&
            link.classList.contains('autolink-header')
          ) {
            e.preventDefault()
            history.pushState(null, '', hash)
            // use smooth scroll when clicking on header anchor links
            scrollTo(link, hash, true)
            // still emit the event so we can listen to it in themes
            window.dispatchEvent(new Event('hashchange'))
          }
        }
      }
    },
    { capture: true },
  )
  window.addEventListener('hashchange', (e) => {
    e.preventDefault()
  })
}

export function setup() {
  if (!isBrowser()) {
    return
  }
  bindingWindowScroll()
}
