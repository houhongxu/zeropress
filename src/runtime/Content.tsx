import { useRoutes } from 'react-router-dom'
import Index from '../../docs/guide'
import A from '../../docs/guide/a'
import B from '../../docs/b'

const routes = [
  // TODO 约定式路由自动读取文件生成路由
  {
    path: '/guide',
    element: <Index />,
  },
  {
    path: '/guide/a',
    element: <A />,
  },
  {
    path: '/',
    element: <B />,
  },
]

export const Content = () => {
  const routeElement = useRoutes(routes)
  return routeElement
}
