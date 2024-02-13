import { useRoutes } from 'react-router-dom'
import routes from 'virtual:routes'

/**
 * 路由内容
 * @description 通过虚拟模块提供spa路由内容
 */
export function Content() {
  const element = useRoutes(routes)

  console.log('文件路由', routes)

  return element
}
