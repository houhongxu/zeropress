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
      { text: '指南', link: '/dir/markx' },
      {
        dark: true,
      },
      {
        logo: 'github',
        link: 'https://github.com/houhongxu/hhxpress',
      },
    ],
    sidebar: {
      '/dir': [
        {
          text: '测试mdx',
          items: [
            {
              text: 'mdx',
              link: '/dir/markx',
            },
            {
              text: '计数器',
              link: '/dir/count',
            },
            {
              text: '计数器1',
              link: '/dir/count1',
            },
            {
              text: '计数器2',
              link: '/dir/count2',
            },
            {
              text: '计数器3',
              link: '/dir/count3',
            },
            {
              text: '计数器4',
              link: '/dir/count4',
            },
            {
              text: '计数器5',
              link: '/dir/count5',
            },
          ],
        },

        {
          text: '测试mdx2',
          items: [
            {
              text: '计数器1',
              link: '/dir/count1',
            },
            {
              text: '计数器2',
              link: '/dir/count2',
            },
            {
              text: '计数器3',
              link: '/dir/count3',
            },
            {
              text: '计数器4',
              link: '/dir/count4',
            },
            {
              text: '计数器5',
              link: '/dir/count5',
            },
          ],
        },

        {
          text: '测试mdx3',
          items: [
            {
              text: '计数器1',
              link: '/dir/count1',
            },
            {
              text: '计数器2',
              link: '/dir/count2',
            },
            {
              text: '计数器3',
              link: '/dir/count3',
            },
            {
              text: '计数器4',
              link: '/dir/count4',
            },
            {
              text: '计数器5',
              link: '/dir/count5',
            },
          ],
        },

        {
          text: '测试mdx4',
          items: [
            {
              text: '汉字',
              link: '/dir/汉字',
            },
            {
              text: '计数器2',
              link: '/dir/count2',
            },
            {
              text: '计数器3',
              link: '/dir/count3',
            },
            {
              text: '计数器4',
              link: '/dir/count4',
            },
            {
              text: '计数器5',
              link: '/dir/count5',
            },
          ],
        },

        {
          text: '测试mdx5',
          items: [
            {
              text: '计数器1',
              link: '/dir/count1',
            },
            {
              text: '计数器2',
              link: '/dir/count2',
            },
            {
              text: '计数器3',
              link: '/dir/count3',
            },
            {
              text: '计数器4',
              link: '/dir/count4',
            },
            {
              text: '计数器5',
              link: '/dir/count5',
            },
          ],
        },
      ],
    },
  },
}

export default config
