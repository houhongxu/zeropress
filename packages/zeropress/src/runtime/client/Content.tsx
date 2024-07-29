import { normalizeUrl } from '@/shared/utils'
import { useRoutes } from 'react-router-dom'
import routes from 'virtual:routes'

/**
 * 路由内容
 * @description 通过虚拟模块提供spa路由内容
 */
export function Content({ location = '/' }) {
  const element = useRoutes(routes, normalizeUrl(location))

  console.log(
    '文件路由',
    routes.map((i) => i.path),
  )

  return element
}
