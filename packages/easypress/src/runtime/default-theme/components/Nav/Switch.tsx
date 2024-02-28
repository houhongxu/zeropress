import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export function Switch({
  className,
  onClick,
}: PropsWithChildren<{
  className?: string
  onClick: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}>) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        'bg-bg-mute border-divider hover:border-gray-1 relative h-[22px] w-[40px] rounded-[11px] border transition-colors duration-300',
      )}
    >
      <div className="bg-bg-inverse shadow-1 absolute left-px top-px h-[18px] w-[18px] overflow-hidden rounded-[50%] transition-all duration-300 dark:translate-x-[18px]">
        <span
          className={classNames(
            '*:text-text-2 *:absolute *:left-[3px] *:top-[3px] *:h-[12px] *:w-[12px] *:transition-opacity *:duration-300',
          )}
        >
          <div className="icon-[carbon--sun] opacity-100 dark:opacity-0"></div>
          <div className="icon-[carbon--moon] opacity-0 dark:opacity-100"></div>
        </span>
      </div>
    </button>
  )
}
