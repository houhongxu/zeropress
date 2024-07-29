import { MobileSiderbar } from './SiderBar'
import { MobileToc } from './Toc'
import { PageData } from '@/shared/types'
import { useState } from 'react'

export function MobileBar({ toc }: { toc?: PageData['toc'] }) {
  const [state, setState] = useState({
    siderber: false,
    toc: false,
  })

  return (
    <div className="h-nav pc:hidden bg-bg-default sticky top-0 z-50 w-full border-b">
      <div className="flex h-full items-center justify-between px-[24px]">
        <a
          className="icon-[carbon--list] h-[24px] w-[24px] cursor-pointer"
          onClick={() => {
            setState({ siderber: true, toc: false })
          }}
        ></a>

        {toc && toc.length > 0 && (
          <a
            className="icon-[carbon--border-top] h-[24px] w-[24px] cursor-pointer"
            onClick={() => {
              setState({ siderber: false, toc: true })
            }}
          ></a>
        )}
      </div>

      <MobileSiderbar
        visible={state.siderber}
        onClick={() => setState({ siderber: false, toc: false })}
      ></MobileSiderbar>

      <MobileToc
        toc={toc}
        visible={state.toc}
        onClick={() => setState({ siderber: false, toc: false })}
      ></MobileToc>
    </div>
  )
}
