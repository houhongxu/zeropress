export function NotFoundLayout() {
  return (
    <div className="mx-auto mt-200px pt-64px px-24px pb-96px text-center flex flex-col items-center">
      <p className="text-60px font-600">404</p>
      <h1 className="pt-36px text-20px font-700 leading-20px">页面失踪</h1>

      <div className="w-64px h-1px mt-24px mx-auto mb-18px border-px" />

      <div className="pt-20px">
        <a
          href={'/'}
          className="inline-block border-px rounded-16px py-4px px-16px text-14px text-brand font-500  transition-colors duration-250"
          un-hover="border-brand-default text-brand-default"
        >
          返回主页
        </a>
      </div>
    </div>
  )
}
