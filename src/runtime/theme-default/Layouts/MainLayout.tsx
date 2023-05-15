import 'virtual:uno.css'
import '../styles/base.css'
import '../styles/vars.css'

import { usePageData } from 'runtime/hooks'
import { Nav } from '../components/Nav'
import { HomeLayout } from './HomeLayout'

export function MainLayout() {
  const { pageType } = usePageData()

  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />
    } else if (pageType === 'doc') {
      return <div>正文页面</div>
    } else {
      return <div>404 页面</div>
    }
  }

  return (
    <div>
      <Nav></Nav>
      {getContent()}
    </div>
  )
}
