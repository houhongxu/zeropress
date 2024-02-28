import { Doc } from './components/Doc/Doc'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { NotFound } from './components/NotFound'
import './styles/base.css'
import { usePageData } from 'runtime/usePageData'

/**
 * 主题入口
 */
export function Layout() {
  const { pageData } = usePageData()
  console.log('页面数据：', pageData)

  const getPage = () => {
    const pageType = pageData?.pageType

    if (pageType === 'home') {
      return <Home></Home>
    } else if (pageType === 'doc') {
      return <Doc></Doc>
    } else {
      return <NotFound></NotFound>
    }
  }

  return (
    <>
      <Nav nav={pageData?.userConfig.themeConfig?.nav}></Nav>

      {getPage()}
    </>
  )
}
