import { usePageData } from 'runtime/usePageData'

export function Home() {
  const { pageData } = usePageData()
  const title = pageData?.userConfig.title
  const description = pageData?.userConfig.description

  return (
    <>
      <div className="pt-nav flex h-screen flex-col items-center justify-center">
        <div className="text-[10vw]">{title}</div>
        <div className="text-[6vw]"> {description}</div>
      </div>
    </>
  )
}
