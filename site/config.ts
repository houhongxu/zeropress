import { defineConfig } from '../dist'

export default defineConfig({
  title: '我的博客',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/1test/1md' },
    ],
  },
})
