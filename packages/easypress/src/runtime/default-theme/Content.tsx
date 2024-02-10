import { Count } from './pages/count'
import { Hello } from './pages/hello'
import { Me } from './pages/me'
import { RouteObject, useRoutes } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Hello></Hello>,
  },
  {
    path: '/me',
    element: <Me></Me>,
  },
  {
    path: '/count',
    element: <Count></Count>,
  },
]

/**
 * 主题内容 TODO 自动生成路由
 */
export function Content() {
  const element = useRoutes(routes)

  return element
}
