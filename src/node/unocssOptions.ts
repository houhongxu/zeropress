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
  ],
}
