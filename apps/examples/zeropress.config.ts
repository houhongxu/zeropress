import { UserConfig } from 'zeropress'

const config: UserConfig = {
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
        link: 'https://github.com/houhongxu/hhxpress',
      },
    ],
  },
}

export default config
