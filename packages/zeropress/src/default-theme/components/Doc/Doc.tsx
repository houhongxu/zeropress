import { Footer } from './Footer'
import { MobileBar } from './MobileBar'
import { Siderbar } from './SiderBar'
import { Toc } from './Toc'
import { useHeaderScroll } from '@/default-theme/hooks/useHeaderScroll'
import { PageData } from '@/shared/types'
import { ReactNode } from 'react'

export function Doc({
  content,
  toc,
}: {
  content: ReactNode
  toc?: PageData['toc']
}) {
  useHeaderScroll()

  return (
    <div className="pt-nav">
      <Siderbar></Siderbar>

      <div className="pc:ml-sidebar ml-0 flex justify-between">
        <div className="mx-auto w-full max-w-[768px] transition-[margin] duration-300">
          <MobileBar toc={toc}></MobileBar>

          <div className="doc p-[48px]">
            {content}

            <Footer></Footer>
          </div>
        </div>

        <Toc toc={toc}></Toc>
      </div>
    </div>
  )
}
