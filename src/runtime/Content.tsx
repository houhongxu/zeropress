import { useRoutes } from 'react-router-dom'
import routes from 'virtual:routes'

console.log('路由配置：', routes)

export const Content = () => {
  const routeElement = useRoutes(routes)
  return routeElement
}
