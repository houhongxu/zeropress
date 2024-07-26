import { UserConfig } from 'easypress'

const config: UserConfig = {
  themeConfig: {
    nav: [
      {
        img: '/favicon.jpg',
        link: '/',
        position: 'left',
      },
      { text: '主页', link: '/' },
      { text: '指南', link: '/指南/markx' },
      { text: '引导', link: '/nodir/markx' },
      {
        dark: true,
      },
      {
        logo: 'github',
        link: 'https://github.com/houhongxu/hhxpress',
      },
    ],
    sidebar: {
      '/指南': [
        {
          text: '测试mdx',
          items: [
            {
              text: 'mdx',
              link: '/指南/markx',
            },
            {
              text: '计数器',
              link: '/指南/count',
            },
          ],
        },
        {
          text: '测试mdx4',
          items: [
            {
              text: '汉字',
              link: '/指南/汉字',
            },
          ],
        },
      ],
      '/nodir': [
        {
          text: '测试mdx',
          items: [
            {
              text: 'mdx',
              link: '/nodir/markx',
            },
            {
              text: '计数器',
              link: '/nodir/count',
            },
          ],
        },
        {
          text: '测试mdx4',
          items: [
            {
              text: 'no',
              link: '/nodir/no',
            },
          ],
        },
      ],
    },
  },
}

export default config
