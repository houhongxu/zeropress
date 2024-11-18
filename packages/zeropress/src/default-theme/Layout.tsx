import { Doc } from './components/Doc/Doc'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { NotFound } from './components/NotFound'
import './styles/base.css'
import './styles/doc.css'
import { Content, usePageData } from '@/runtime'

/**
 * 主题入口
 */
export function Layout({ location = window.location.pathname }) {
  const { pageData } = usePageData()

  const getPage = () => {
    const pageType = pageData?.pageType

    if (pageType === 'home') {
      return (
        <Home
          title={pageData?.userConfig.title}
          description={pageData?.userConfig.description}
        ></Home>
      )
    } else if (pageType === 'doc') {
      return (
        <Doc
          content={<Content location={location}></Content>}
          toc={pageData?.toc}
          editLink={pageData?.userConfig.themeConfig?.editLink}
          lastUpdated={pageData?.userConfig.themeConfig?.lastUpdated}
          file={pageData?.file}
          timestamp={pageData?.timestamp}
        ></Doc>
      )
    } else if (pageType === '404') {
      return <NotFound></NotFound>
    } else {
      return <></>
    }
  }

  return (
    <>
      <Nav nav={pageData?.userConfig.themeConfig?.nav}></Nav>
      {getPage()}
    </>
  )
}
