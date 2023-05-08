import 'virtual:uno.css'

import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { Content } from 'runtime/Content'
import { usePageData } from 'runtime/hooks'
createElement

export function MainLayout() {
  const pageData = usePageData()
  console.log(pageData)

  return (
    <div>
      <div p="2" m="4" bg="emerald-500">
        Mainlayout
      </div>
      <div>
        <Link to="guide">guide</Link>
      </div>
      <div>
        <Link to="guide/a">guide/a</Link>
      </div>
      <Content></Content>
    </div>
  )
}
