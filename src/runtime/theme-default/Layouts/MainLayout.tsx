import 'virtual:uno.css'
import '../styles/base.css'
import '../styles/vars.css'
import '../styles/doc.css'

import { usePageData } from 'runtime/hooks'
import { Nav } from '../components/Nav'
import { HomeLayout } from './HomeLayout'
import { DocLayout } from './DocLayout'

export function MainLayout() {
  const { pageType } = usePageData()

  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout></HomeLayout>
    } else if (pageType === 'doc') {
      return <DocLayout></DocLayout>
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
