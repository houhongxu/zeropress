import { presetAttributify, presetIcons, presetWind } from 'unocss'
import { VitePluginConfig } from 'unocss/vite'

export const unocssOptions: VitePluginConfig = {
  presets: [presetAttributify(), presetWind(), presetIcons()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--hhx-docs-c-divider-light)',
      }),
    ],
    [
      'menu-item-before',
      {
        'margin-right': '12px',
        'margin-left': '12px',
        width: '1px',
        height: '24px',
        'background-color': 'var(--hhx-docs-c-divider-light)',
        content: '" "',
      },
    ],
  ],
  theme: {
    colors: {
      brandLight: 'var(--hhx-docs-c-brand-light)',
      brandDark: 'var(--hhx-docs-c-brand-dark)',
      brand: 'var(--hhx-docs-c-brand)',
      text: {
        1: 'var(--hhx-docs-c-text-1)',
        2: 'var(--hhx-docs-c-text-2)',
        3: 'var(--hhx-docs-c-text-3)',
        4: 'var(--hhx-docs-c-text-4)',
      },
      divider: {
        default: 'var(--hhx-docs-c-divider)',
        light: 'var(--hhx-docs-c-divider-light)',
        dark: 'var(--hhx-docs-c-divider-dark)',
      },
      gray: {
        light: {
          1: 'var(--hhx-docs-c-gray-light-1)',
          2: 'var(--hhx-docs-c-gray-light-2)',
          3: 'var(--hhx-docs-c-gray-light-3)',
          4: 'var(--hhx-docs-c-gray-light-4)',
        },
      },
      bg: {
        default: 'var(--hhx-docs-c-bg)',
        soft: 'var(--hhx-docs-c-bg-soft)',
        mute: 'var(--hhx-docs-c-bg-mute)',
      },
    },
  },
}
