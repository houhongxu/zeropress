import { UserConfig } from 'unocss'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

export const unoConfig: UserConfig = {
  presets: [presetAttributify(), presetUno(), presetIcons()],
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--hp-c-divider-light)',
      }),
    ],
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'menu-item-before':
      'mr-12px ml-12px w-1px h-24px bg-divider-light content-[""]',
  },
  theme: {
    colors: {
      // 包含dark主题的
      bg: {
        default: 'var(--hp-c-bg)',
        soft: 'var(--hp-c-bg-soft)',
        mute: 'var(--hp-c-bg-mute)',
        alt: 'var(--hp-c-bg-alt)',
        inverse: 'var(--hp-c-bg-inverse)',
      },
      divider: {
        default: 'var(--hp-c-divider)',
        light: 'var(--hp-c-divider-light)',
        dark: 'var(--hp-c-divider-dark)',
      },
      brand: {
        default: 'var(--hp-c-brand)',
        light: 'var(--hp-c-brand-light)',
        dark: 'var(--hp-c-brand-dark)',
      },
      text: {
        1: 'var(--hp-c-text-1)',
        2: 'var(--hp-c-text-2)',
        3: 'var(--hp-c-text-3)',
        4: 'var(--hp-c-text-4)',
        code: 'var(--hp-c-indigo-soft)',
      },
      // 基础
      gray: {
        default: 'var(--hp-c-gray)',
        1: 'var(--hp-c-gray-light-1)',
        2: 'var(--hp-c-gray-light-2)',
        3: 'var(--hp-c-gray-light-3)',
        4: 'var(--hp-c-gray-light-4)',
      },
    },
    boxShadow: {
      1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
      2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
      3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
      4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
      5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
    },
    breakpoints: {
      md: '560px',
      lg: '1440px',
    },
    height: {
      nav: 'var(--hp-nav-height)',
    },
    spacing: {
      nav: 'var(--hp-nav-height)',
      sidebar: 'var(--hp-sidebar-width)',
    },
    width: {
      sidebar: 'var(--hp-sidebar-width)',
    },
  },
}
