import { Content } from '../Content'
import { Doc } from './components/Doc'
import { Hello } from './components/Hello'
import { NotFount } from './components/NotFount'
import './styles/base.css'
import { usePageData } from 'runtime/usePageData'

/**
 * 主题入口
 */
export function Layout() {
  const { pageData } = usePageData()
  console.log(pageData)

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
    <div style={{ padding: '20px' }}>
      {getPage()}

      <Content></Content>
    </div>
  )
}
