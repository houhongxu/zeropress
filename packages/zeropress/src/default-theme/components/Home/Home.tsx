export function Home({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  return (
    <>
      <div className="pt-nav flex h-screen flex-col items-center justify-between">
        <div></div>

        <div className="flex flex-col items-center justify-center">
          <div className="pc:text-[80px] text-[32px]">{title}</div>
          <div className="pc:text-[40px] text-[16px]"> {description}</div>
        </div>

        <a
          className="pc:text-[16px] mb-[2px] text-[12px]"
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          备案号：苏ICP备2025187299号-1
        </a>
      </div>
    </>
  )
}
