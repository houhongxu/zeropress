import { usePrevNextPage } from '@/default-theme/hooks'
import { Link } from '@/runtime'
import { PageData, ThemeConfig } from '@/shared/types'
import dayjs from 'dayjs'
import { PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

export function Footer({
  editLink,
  lastUpdated,
  file,
  timestamp,
}: {
  editLink?: ThemeConfig['editLink']
  lastUpdated?: ThemeConfig['lastUpdated']
  file?: PageData['file']
  timestamp?: PageData['timestamp']
}) {
  const { prevPage, nextPage } = usePrevNextPage()
  const { pathname } = useLocation()

  return (
    <footer className="mt-[48px]">
      <div className="flex justify-between pb-[12px] text-[14px]">
        {editLink && (
          <div className="flex items-center gap-[4px]">
            <span className="icon-[carbon--edit]"></span>

            <Link
              href={
                file && editLink
                  ? editLink.pattern.replace(
                      '/:path',
                      pathname.replace('.html', `.${file.split('.')[1]}`),
                    )
                  : undefined
              }
            >
              {editLink?.text || '在 GitHub 上编辑此页面'}
            </Link>
          </div>
        )}

        {lastUpdated && timestamp && (
          <div className="text-gray-1 text-[14px]">
            {lastUpdated?.text || '最后更新于：'}
            {dayjs
              .unix(parseInt(timestamp))
              .format(lastUpdated?.format || 'YYYY-MM-DD')}
          </div>
        )}
      </div>

      {(prevPage || nextPage) && (
        <div className="border-divider flex justify-between border-t pt-[24px]">
          <div className="w-[calc(50%-4px)]">
            {prevPage && (
              <Button text={prevPage.text} link={prevPage.link}>
                上一页
              </Button>
            )}
          </div>

          <div className="w-[calc(50%-4px)]">
            {nextPage && (
              <Button text={nextPage.text} link={nextPage.link}>
                下一页
              </Button>
            )}
          </div>
        </div>
      )}
    </footer>
  )
}

function Button({
  children,
  text,
  link,
}: PropsWithChildren<{
  text?: string
  link?: string
}>) {
  return (
    <Link
      href={link}
      className="border-divider hover:border-brand group block h-full w-full rounded-[8px] border px-[16px] py-[8px] transition-colors duration-300"
    >
      <div className="text-text-2 text-[12px] font-[500] leading-[20px]">
        {children}
      </div>

      <div className=" text-text-2 group-hover:text-brand text-overflow text-[14px] font-[500] leading-[20px] transition-colors duration-300">
        {text}
      </div>
    </Link>
  )
}
