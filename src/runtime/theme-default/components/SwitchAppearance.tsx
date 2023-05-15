// https://unocss.dev/presets/mini#dark-mode

import classNames from 'classnames'
import { ReactNode } from 'react'
import { toggleAppearance } from '../logic/toggleAppearance'

export function SwitchAppearance() {
  return (
    <Switch onClick={toggleAppearance}>
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
        'rounded-[11px] w-40px h-22px bg-[var(--hp-c-bg-mute)]',
      )}
      shrink="0"
      relative
      block
      border="1px solid [var(--hp-c-divider)]"
      transition="colors duration-250"
      hover="border-[var(--hp-c-gray)]"
    >
      <span
        className="w-18px h-18px rounded-1/2 bg-[var(--hp-c-white)] shadow-[var(--hp-shadow-1)]"
        absolute
        pos="top-1px left-1px"
        transition="all duration-250"
        dark="bg-[var(--hp-c-black)] translate-x-18px"
      >
        <span
          relative
          block
          className="w-full h-full rounded-1/2 overflow-hidden"
          un-children="w-12px h-12px color-[var(--hp-c-text-2)] absolute top-3px left-3px transition-opacity duration-250 dark:color-[var(--hp-c-text-1)] first:opacity-100 first:dark:opacity-0  last:opacity-0 last:dark:opacity-100"
        >
          {children}
        </span>
      </span>
    </button>
  )
}
