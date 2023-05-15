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
}
