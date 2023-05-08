import { UserConfig } from 'unocss'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

export const unoConfig: UserConfig = {
  presets: [presetAttributify(), presetUno(), presetIcons()],
}
