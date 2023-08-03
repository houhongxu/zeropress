# unocss 痛点

- uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- 抽离配置时 uno 插件无效，不知道使用 config.js 是否能生效
- 使用 windi 插件时，配置的 theme 没有智能提示，attr 有前缀时也没有 https://github.com/unocss/unocss/issues/2619
- 配置的 key 不能用 'xxx-xxx'的方式，起码 bg 不行
- spacing 配置 不能用在 height 与 width
- breakpoints 配置 不支持 css 变量
- zIndex 配置无效
- overflow-ellipsis 无效
