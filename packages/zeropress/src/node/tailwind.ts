import { addDynamicIconSelectors } from '@iconify/tailwind'
import path from 'path'
import { Config } from 'tailwindcss'

export const tailwindcssConfig: Config = {
  content: [
    path.join(
      __dirname,
      '..',
      '..',
      './src/default-theme/**/*.{tsx,ts,jsx,js}',
    ), // 相对于lib的路径，tailwind引入是在node/config,打包后是lib/node/cli
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        pc: '768px',
        full: '1060px',
      },

      /** 声明时dark在下面所以默认显示dark主题颜色 */
      colors: {
        divider: 'var(--ep-color-divider)',

        brand: 'var(--ep-color-brand)',

        bg: {
          default: 'var(--ep-color-bg-default)',
          switch: 'var(--ep-color-bg-switch)',
          inverse: 'var(--ep-color-bg-inverse)',
          sidebar: 'var(--ep-color-bg-sidebar)',
        },

        text: {
          1: 'var(--ep-color-text-1)',
          2: 'var(--ep-color-text-2)',
          3: 'var(--ep-color-text-3)',
          4: 'var(--ep-color-text-4)',
        },

        gray: {
          1: 'var(--ep-color-gray-1)',
        },
      },
      boxShadow: {
        1: '0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        2: '0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)',
        3: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)',
        4: '0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)',
        5: '0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)',
      },
      spacing: { nav: '56px', sidebar: '250px', toc: '200px' },
    },
  },
  plugins: [addDynamicIconSelectors()],
}
