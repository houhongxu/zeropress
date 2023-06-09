import { defineConfig } from '../dist'

export default defineConfig({
  title: '我的博客11',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/1test/1md' },
      { text: '博客', link: '/blog/2022' },
    ],
  },
})
