import { Footer } from './Footer'
import { Siderbar } from './SiderBar'
import { Toc } from './Toc'
import { Content } from 'runtime/Content'
import { useHeaderScroll } from 'runtime/default-theme/hooks/useHeaderScroll'

export function Doc() {
  useHeaderScroll()

  return (
    <div className="pt-nav">
      <Siderbar></Siderbar>

      <div className="pc:ml-sidebar ml-0 flex justify-between">
        <div className="doc mx-auto w-full max-w-[768px] p-[48px] transition-[margin] duration-300">
          <Content></Content>

          <Footer></Footer>
        </div>

        <Toc></Toc>
      </div>
    </div>
  )
}
