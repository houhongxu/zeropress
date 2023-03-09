import { presetAttributify, presetIcons, presetWind } from 'unocss'
import { VitePluginConfig } from 'unocss/vite'

export const unocssOptions: VitePluginConfig = {
  presets: [presetAttributify(), presetWind(), presetIcons()],
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
}
