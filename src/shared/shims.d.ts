// https://unocss.dev/presets/attributify#react

import type { AttributifyAttributes } from 'unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
