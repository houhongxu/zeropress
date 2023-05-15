import 'virtual:uno.css'
import '../styles/base.css'
import '../styles/vars.css'

import { Content } from 'runtime/Content'
import { usePageData } from 'runtime/hooks'
import { Nav } from '../components/Nav'

export function MainLayout() {
  const pageData = usePageData()

  return (
    <div>
      <Nav></Nav>
    </div>
  )
}
