import { NAV_HEIGHT } from '../consts'
import { useEffect } from 'react'

export function useHeaderScroll() {
  useEffect(() => {
    // .autolink-headings是node/plugins/vitePluginMdx中的约定
    Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.autolink-headings'),
    ).forEach((dom) => {
      const header = dom.parentElement

      if (header) {
        header.onclick = (event) => {
          event.preventDefault()
          scrollTo({
            top: header.offsetTop - NAV_HEIGHT,
          })
        }
      }
    })
  }, [])
}
