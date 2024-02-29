import { Siderbar } from './SiderBar'
import { Content } from 'runtime/Content'

export function Doc() {
  return (
    <div className="pt-nav">
      <Siderbar></Siderbar>

      <div className="pc:ml-sidebar max-w-960px ml-0 p-[48px] transition-[margin] duration-300">
        <Content></Content>
      </div>
    </div>
  )
}
