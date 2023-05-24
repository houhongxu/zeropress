import { useLocation } from 'react-router-dom'
import { Content } from 'runtime/Content'
import { DocFooter } from '../components/DocFooter'
import { Sidebar } from '../components/Sidebar'
import { useSidebarData } from '../hooks/useSidebarData'

export function DocLayout() {
  const { pathname } = useLocation()
  const { data } = useSidebarData()

  return (
    <div>
      <Sidebar sidebarData={data} pathname={pathname}></Sidebar>
      <div className="p-48px ml-sidebar">
        <div className="hp-doc">
          <Content></Content>
        </div>
        <DocFooter></DocFooter>
      </div>
    </div>
  )
}
