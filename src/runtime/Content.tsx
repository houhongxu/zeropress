import A from '../../docs/guide/A'
import B from '../../docs/B'
import Index from '../../docs/guide/index'
import { useRoutes } from 'react-router-dom'

const routes = [
  {
    path: '/guide',
    element: <Index />,
  },
  {
    path: '/guide/a',
    element: <A />,
  },
  {
    path: '/b',
    element: <B />,
  },
]

export const Content = () => {
  // 生成路由组件
  const routeElement = useRoutes(routes)
  return routeElement
}
