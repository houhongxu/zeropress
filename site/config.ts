import { defineConfig } from '../dist'

export default defineConfig({
  title: '我的博客',
  themeConfig: {
    nav: {
      title: '测试',
      items: [
        { text: '文档', link: '/docs/5webpack/1使用 node api 学习 webpack' },
        { text: '博客', link: '/blog/2022' },
      ],
    },
  },
})
