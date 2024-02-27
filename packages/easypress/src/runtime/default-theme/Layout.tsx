import { Content } from '../Content'
import { Doc } from './components/Doc'
import { Hello } from './components/Hello'
import { NotFount } from './components/NotFount'
import './styles/base.css'
import { Link } from 'react-router-dom'
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
      return <Hello></Hello>
    } else if (pageType === 'doc') {
      return <Doc></Doc>
    } else {
      return <NotFount></NotFount>
    }
  }

  return (
    <div className="p-[40px]">
      {getPage()}
      <Link to={'/markx'}>go to markx</Link>
      <Content></Content>
    </div>
  )
}
