import { UserConfig } from 'easypress'

const config: UserConfig = {
  title: 'EASYPRESS',
  description: 'u know me',
  themeConfig: {
    nav: [
      {
        img: '/favicon.jpg',
        link: '/',
        position: 'left',
      },

      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        dark: true,
      },
      {
        logo: 'github',
        link: 'https://github.com/houhongxu/hhxpress',
      },
    ],
  },
}

export default config
