import classNames from 'classnames'
import { DOMAttributes, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

export function Link({
  href = '/',
  className,
  children,
  onClick,
}: PropsWithChildren<{
  href?: string
  className?: string
  onClick?: () => void
}>) {
  const navigate = useNavigate()

  // TODO 通过配置文件区分mpa与spa模式，解决mpa的跳转后侧边栏移动等问题
  const isSpa = true

  // spa模式是首页使用ssg请求html，后续跳转使用csg路由
  const isCsr = isSpa && !href?.startsWith('http')

  const handleCsrNavigate: DOMAttributes<HTMLAnchorElement>['onClick'] = async (
    event,
  ) => {
    event.preventDefault()

    onClick?.()

    navigate(href.slice(1))
  }

  return (
    <a
      href={href}
      {...(isCsr ? { onClick: handleCsrNavigate } : { onClick })}
      className={classNames('cursor-pointer', className)}
    >
      {children}
    </a>
  )
}
