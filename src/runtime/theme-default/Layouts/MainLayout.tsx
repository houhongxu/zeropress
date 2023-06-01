import 'virtual:uno.css'
import '../styles/base.css'
import '../styles/vars.css'
import '../styles/doc.css'

import { Nav } from '../components/Nav'
import { HomeLayout } from './HomeLayout'
import { DocLayout } from './DocLayout'
import { usePageData } from '../../usePageData'
import { Helmet } from 'react-helmet-async'
import { NotFoundLayout } from './NotFoundLayout'

export function MainLayout() {
  const { pageType, title } = usePageData()

  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout></HomeLayout>
    } else if (pageType === 'doc') {
      return <DocLayout></DocLayout>
    } else {
      return <NotFoundLayout></NotFoundLayout>
    }
  }

  return (
    <div className="pt-nav">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Nav></Nav>
      {getContent()}
    </div>
  )
}
