import { Footer } from './Footer'
import { MobileBar } from './MobileBar'
import { Siderbar } from './SiderBar'
import { Toc } from './Toc'
import { useHeaderScroll } from '@/default-theme/hooks/useHeaderScroll'
import { PageData, ThemeConfig } from '@/shared/types'
import { ReactNode } from 'react'

export function Doc({
  content,
  toc,
  editLink,
  lastUpdated,
  file,
  timestamp,
}: {
  content: ReactNode
  toc?: PageData['toc']
  editLink?: ThemeConfig['editLink']
  lastUpdated?: ThemeConfig['lastUpdated']
  file?: PageData['file']
  timestamp?: PageData['timestamp']
}) {
  useHeaderScroll()

  return (
    <div className="pt-nav">
      <Siderbar></Siderbar>

      <div className="pc:ml-sidebar ml-0 flex justify-between">
        <div className="mx-auto w-full max-w-[768px] transition-[margin] duration-300">
          <MobileBar toc={toc}></MobileBar>

          <div className="p-[48px]">
            <div className="doc">{content}</div>

            <Footer
              editLink={editLink}
              lastUpdated={lastUpdated}
              file={file}
              timestamp={timestamp}
            ></Footer>
          </div>
        </div>

        <Toc toc={toc}></Toc>
      </div>
    </div>
  )
}
