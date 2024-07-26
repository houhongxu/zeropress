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
      { text: '指南', link: '/指南/测试mdx/markx' },
      { text: '引导', link: '/1. nodir/2. text/markx' },
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
              link: '/指南/测试mdx/markx',
            },
            {
              text: '计数器',
              link: '/指南/测试mdx/count',
            },
          ],
        },
        {
          text: '测试mdx4',
          items: [
            {
              text: '汉字',
              link: '/指南/测试mdx/汉字',
            },
          ],
        },
      ],
      '/1. nodir': [
        {
          text: '测试mdx',
          items: [
            {
              text: 'mdx',
              link: '/1. nodir/2. text/markx',
            },
            {
              text: '计数器',
              link: '/1. nodir/2. text/count',
            },
          ],
        },
        {
          text: '测试mdx4',
          items: [
            {
              text: 'no',
              link: '/1. nodir/2. text/1. no',
            },
          ],
        },
      ],
    },
  },
}

export default config
