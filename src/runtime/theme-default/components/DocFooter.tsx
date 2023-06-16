import { usePrevNextPage } from '../hooks/usePrevNextPage'
import { normalizeHref } from '../utils'

export function DocFooter() {
  const { prevPage, nextPage } = usePrevNextPage()

  return (
    <footer className="mt-32px">
      <div className="flex justify-between divider-top pt-24px">
        <div className="w-[calc(50%-4px)]">
          {prevPage && (
            <a
              href={normalizeHref(prevPage.link)}
              className="group block border-px border-divider-light rounded-8px py-8px px-16px w-full h-full transition-colors duration-250"
              un-hover="border-brand-default"
            >
              <div className="leading-20px text-12px font-500 text-text-2">
                上一页
              </div>
              <div
                className="leading-20px text-14px font-500 text-brand-default transition-colors duration-250"
                un-group-hover="text-brand-dark"
              >
                {prevPage.text}
              </div>
            </a>
          )}
        </div>
        <div className="w-[calc(50%-4px)]">
          {nextPage && (
            <a
              href={normalizeHref(nextPage.link)}
              className="group block border-px border-divider-light rounded-8px py-8px px-16px w-full h-full transition-colors duration-250"
              un-hover="border-brand-default"
            >
              <div className="leading-20px text-12px font-500 text-text-2">
                下一页
              </div>
              <div
                className="leading-20px text-14px font-500 text-brand-default transition-colors duration-250"
                un-group-hover="text-brand-dark"
              >
                {nextPage.text}
              </div>
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
