// https://unocss.dev/presets/mini#dark-mode

import classNames from 'classnames'
import { ReactNode } from 'react'
import { PropsWithIsland } from 'shared/types'
import { useAppearance } from '../hooks/useAppearance'

export function SwitchAppearance({}: PropsWithIsland) {
  const { toggle } = useAppearance()

  return (
    <Switch onClick={toggle}>
      <div className="i-carbon-sun"></div>
      <div className="i-carbon-moon"></div>
    </Switch>
  )
}

interface SwitchProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

function Switch({ children, onClick, className }: SwitchProps) {
  return (
    <button
      {...(onClick ? { onClick } : {})}
      className={classNames(
        className,
        'relative block rounded-11px w-40px h-22px bg-bg-mute flex-shrink-0 border-px border-divider-default transition-colors duration-250',
      )}
      un-hover="border-gray-default"
    >
      <span
        className="absolute top-1px left-1px w-18px h-18px bg-bg-inverse rounded-1/2 shadow-1 transition-all duration-250"
        un-dark="translate-x-18px"
      >
        <span
          className="relative block w-full h-full rounded-1/2 overflow-hidden"
          un-children="w-12px h-12px text-text-2 absolute top-3px left-3px transition-opacity duration-250 dark:text-text-1 first:opacity-100 first:dark:opacity-0 last:opacity-0 last:dark:opacity-100"
        >
          {children}
        </span>
      </span>
    </button>
  )
}
