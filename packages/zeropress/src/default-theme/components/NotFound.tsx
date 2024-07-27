export function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <p className="text-[60px] font-[600]">404</p>

        <h1 className="text-[20px] font-[700]">页面失踪</h1>

        <div className="pt-[16px]">
          <a
            href={'/'}
            className="hover:border-brand hover:text-brand text-brand block rounded-[16px] border px-[16px] py-[4px] text-[14px] font-[500] transition-colors duration-300"
            un-hover=""
          >
            返回主页
          </a>
        </div>
      </div>
    </div>
  )
}
