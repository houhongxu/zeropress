import { defineConfig } from '../dist'

export default defineConfig({
  title: 'docs',
  description: 'hot',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '指南',
        link: '/',
      },
    ],
  },
})
