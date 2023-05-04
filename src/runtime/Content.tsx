import { useRoutes } from 'react-router-dom'
import routes from 'virtual:routes'

import r from 'virtual:routes'
console.log('路由配置：', r)

export const Content = () => {
  const routeElement = useRoutes(routes)
  return routeElement
}
