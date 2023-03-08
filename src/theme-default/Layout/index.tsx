import { Content, usePageData } from '../../runtime'

export function Layout() {
  const pageData = usePageData()
  const { pageType } = pageData

  const getContent = () => {
    if (pageType === 'home') {
      return <div>主页</div>
    } else if (pageType === 'doc') {
      return <div>正文</div>
    } else {
      return <div>404</div>
    }
  }

  return (
    <div>
      <div>Nav</div>
      {getContent()}
    </div>
  )
}
