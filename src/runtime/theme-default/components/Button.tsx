import classNames from 'classnames'
import { createElement } from 'react'
import { Link } from './Link'

interface ButtonProps {
  type?: 'button' | 'a'
  size?: 'medium' | 'big'
  theme?: 'brand' | 'alt'
  text: string
  href?: string
  external?: boolean
  className?: string
}

export function Button({
  text,
  className,
  type = 'a',
  theme = 'brand',
  size = 'big',
  href = '/',
  external = false,
}: ButtonProps) {
  const sizeStyles = {
    medium: 'rounded-20px px-20px leading-38px text-14px',
    big: 'rounded-24px px-24px leading-46px text-16px',
  }

  const themeStyles = {
    brand:
      'border-button-brand-border text-button-brand-text bg-button-brand-bg hover:border-button-brand-hover-border hover:text-button-brand-hover-text hover:bg-button-brand-hover-bg active:border-button-brand-active-border active:text-button-brand-active-text active:bg-button-brand-active-bg',
    alt: 'border-button-alt-border text-button-alt-text bg-button-alt-bg hover:border-button-alt-hover-border hover:text-button-alt-hover-text hover:bg-button-alt-hover-bg active:border-button-alt-active-border active:text-button-alt-active-text active:bg-button-alt-active-bg',
  }

  const elemType = type === 'a' && !external ? Link : type

  return createElement(
    elemType,
    {
      className: classNames(
        className,
        themeStyles[theme],
        sizeStyles[size],
        'inlinne-block border-px text-center font-500 whitespace-nowrap transition-colors duration-250 active:duration-100',
      ),
      href,
    },
    text,
  )
}
