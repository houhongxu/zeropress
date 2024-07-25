import { Footer } from './Footer'
import { Siderbar } from './SiderBar'
import { Toc } from './Toc'
import { useHeaderScroll } from 'default-theme/hooks/useHeaderScroll'
import { ReactNode } from 'react'
import { PageData } from 'shared/types'

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
        <div className="doc mx-auto w-full max-w-[768px] p-[48px] transition-[margin] duration-300">
          {content}

          <Footer></Footer>
        </div>

        <Toc toc={toc}></Toc>
      </div>
    </div>
  )
}
