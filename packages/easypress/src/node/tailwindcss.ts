import { ROOT_PATH } from './consts'
import { addDynamicIconSelectors } from '@iconify/tailwind'
import path from 'path'

export const tailwindcssConfig = {
  content: [path.join(ROOT_PATH, './src/runtime/**/*.{tsx,ts,jsx,js}')],
  theme: {
    extend: {
      colors: {
        divider: {
          light: 'rgba(60, 60, 60, 0.29)',
          dark: 'rgba(84, 84, 84, 0.48)',
        },

        bg: {
          soft: { light: '#f9f9f9', dark: '#242424' },
        },

        text: {
          light: {
            1: '#213547',
            2: 'rgba(60, 60, 60, 0.7)',
            3: 'rgba(60, 60, 60, 0.33)',
            4: 'rgba(60, 60, 60, 0.18)',
          },
          dark: {
            1: 'rgba(255, 255, 255, 0.87)',
            2: 'rgba(235, 235, 235, 0.6)',
            3: 'rgba(235, 235, 235, 0.38)',
            4: 'rgba(235, 235, 235, 0.18)',
          },
        },
      },

      spacing: { nav: '56px', sidebar: '272px', toc: '252px' },
    },
  },
  plugins: [addDynamicIconSelectors()],
}
