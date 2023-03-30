import { Nav } from '../components/Nav'
import { usePageData } from '../../runtime'
import 'uno.css'
import '../styles/base.css'
import '../styles/vars.css'
import { HomeLayout } from './HomeLayout'

export function Layout() {
  const pageData = usePageData()
  const { pageType } = pageData

  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout></HomeLayout>
    } else if (pageType === 'doc') {
      return <div>正文</div>
    } else {
      return <div>404</div>
    }
  }

  return (
    <div>
      <Nav />
      {getContent()}
    </div>
  )
}
