import { UserConfig } from 'unocss'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export const unoConfig: UserConfig = {
  presets: [presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformerAttributifyJsx()], // 省略 ~ https://unocss.dev/presets/attributify#valueless-attributify
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--hp-c-divider-light)',
      }),
    ],
    [
      'menu-item-before',
      {
        'margin-right': '12px',
        'margin-left': '12px',
        width: '1px',
        height: '24px',
        'background-color': 'var(--hp-c-divider-light)',
        content: '""',
      },
    ],
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
      brand: 'var(--hp-c-brand)',
      'brand-light': 'var(--hp-c-brand-light)',
      'brand-dark': 'var(--hp-c-brand-dark)',
      text: {
        1: 'var(--hp-c-text-1)',
        2: 'var(--hp-c-text-2)',
        3: 'var(--hp-c-text-3)',
        4: 'var(--hp-c-text-4)',
      },
      divider: 'var(--hp-c-divider)',
      'divider-light': 'var(--hp-c-divider-light)',
      'divider-dark': 'var(--hp-c-divider-dark)',
      gray: {
        light: {
          1: 'var(--hp-c-gray-light-1)',
          2: 'var(--hp-c-gray-light-2)',
          3: 'var(--hp-c-gray-light-3)',
          4: 'var(--hp-c-gray-light-4)',
        },
      },
      bg: 'var(--hp-c-bg)',
      'bg-soft': 'var(--hp-c-bg-soft)',
      'bg-mute': 'var(--hp-c-bg-mute)',
    },
    breakpoints: {
      md: '960px',
    },
  },
}
