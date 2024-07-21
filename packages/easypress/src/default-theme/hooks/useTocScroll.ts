import { NAV_HEIGHT } from '../consts'
import { useEffect, useState } from 'react'

export function useTocScroll() {
  const [index, setIndex] = useState<number>()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const num = handleHighlight()
      setIndex(num)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        const num = handleHighlight()
        setIndex(num)
      })
    }
  }, [])

  return [index, setIndex] as const
}

function handleHighlight() {
  // .autolink-headings是node/plugins/vitePluginMdx中的约定
  const headerADoms = Array.from(
    document.querySelectorAll<HTMLAnchorElement>('.autolink-headings'),
  ).filter((item) => item.parentElement?.tagName !== 'H1')

  // 滚到底时直接高亮最后一个toc
  const isBottom =
    window.scrollY + window.innerHeight >=
    window.document.documentElement.scrollHeight

  if (isBottom) {
    return headerADoms.length - 1
  }

  // 滚到某header范围内查找高亮的toc
  for (let i = 0; i < headerADoms.length; i++) {
    const currentADom = headerADoms[i]
    const nextADom = headerADoms[i + 1]
    const scrollTop = Math.ceil(window.scrollY)

    // 以header的位置为准
    const currentTop =
      (currentADom.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 还没到第一个
    if (i === 0 && scrollTop < currentTop) {
      return
    }

    // 直接亮最后一个
    if (!nextADom) {
      return i
    }

    const nextTop =
      (nextADom.parentElement?.offsetTop ?? NAV_HEIGHT) - NAV_HEIGHT

    // 在当前范围内
    if (scrollTop >= currentTop && scrollTop < nextTop) {
      return i
    }
  }
}
