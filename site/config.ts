import { defineConfig } from '../dist'

export default defineConfig({
  title: '我的博客',
  themeConfig: {
    nav: {
      title: 'xxx',
      items: [
        { text: '文档', link: '/docs/1test/1md' },
        { text: '博客', link: '/blog/2022' },
      ],
    },
  },
})
