import { getPageData, usePageData } from './usePageData'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export function Link({
  href = '/',
  className,
  children,
}: PropsWithChildren<{
  href?: string
  className?: string
}>) {
  const navigate = useNavigate()
  const { setPageData } = usePageData()

  // TODO 通过配置文件区分mpa与spa模式，解决mpa的跳转后侧边栏移动等问题
  const isSpa = true

  // spa模式是首页使用ssg请求html，后续跳转使用csg路由
  const isCsg = isSpa && !href?.startsWith('http')

  const handleCsgNavigate = async () => {
    const newPageData = await getPageData(href)

    setPageData?.(newPageData)

    navigate(href)
  }

  return (
    <a
      {...(isCsg ? { onClick: handleCsgNavigate } : { href })}
      className={classNames('cursor-pointer', className)}
    >
      {children}
    </a>
  )
}
