import { useRoutes } from 'react-router-dom'
import { routes } from 'hhx-docs:routes'

export const Content = () => {
  // 生成注册路由的组件
  const routeElement = useRoutes(routes)
  return routeElement
}
