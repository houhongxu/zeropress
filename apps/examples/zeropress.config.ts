import { UserConfig } from 'zeropress'

const config: UserConfig = {
  description: '',

  themeConfig: {
    nav: [
      {
        img: '/logo.jpg',
        link: '/',
        position: 'left',
      },
      {
        dark: true,
      },
      {
        logo: 'github',
        link: 'https://github.com/houhongxu/zeropress',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/houhongxu/zeropress/edit/master/apps/examples/docs/:path',
      text: '编辑',
    },
    lastUpdated: {},
  },
}

export default config
