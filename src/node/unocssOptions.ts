import { presetAttributify, presetIcons, presetWind } from 'unocss'
import { VitePluginConfig } from 'unocss/vite'

export const unocssOptions: VitePluginConfig = {
  presets: [presetAttributify(), presetWind(), presetIcons()],
}
