import { usePrevNextPage } from '@/default-theme/hooks'
import { Link } from '@/runtime'
import { PropsWithChildren } from 'react'

export function Footer() {
  const { prevPage, nextPage } = usePrevNextPage()

  return (
    <footer className="mt-[32px]">
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
