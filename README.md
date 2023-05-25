# 博客库 hhxpress

## 功能

- 支持 mdx2，docusaurus2 只支持 v1，vitepress1 不支持
- 减少 js 体积的孤岛架构
- 约定式侧边栏

## MVP 版本

- [x] CLI 脚手架搭建

- [x] 基于 Vite 的 DevServer 封装

- [x] HTML 模板插件 与 支持热更新

- [x] React 主题组件的渲染

- [x] 服务端渲染实现，产出 模板 HTML 与客户端 js 同构（尚未使用 react 同构）

## tsup

- [x] 使用 tsup 进行构建

## config 解析

- [x] 使用 vite jsapi-loadConfigFromFile 进行配置解析
- [x] 增加配置类型提示函数 definConfig
- [x] 开发配置插件支持 UI 获取配置数据
- [x] 配置插件支持热更新

## 约定式路由

- [x] 客户端配置路由
- [x] 配置路径别名
- [x] 服务端配置路由
- [x] 完善配置路由构建
- [x] 自动化生成约定式路由的插件，支持 UI 获取生成的路由配置
- [x] 多路由构建

## mdx

- [x] mdx 支持
- [x] 常用插件支持：代码块，标题跳转，frontmatter，gfm
- [x] 自定义插件 remarkPluginMdxToc 未使用 remark-slug 对应的 id 生成库 https://github.com/DCsunset/remark-mdx-toc
- [x] 自定义插件 vitePluginMdxHMR

## ui

- [x] 接入 unocss
- [x] UI 获取 pageData
- [x] 导航栏：TODO 约定式导航栏
- [x] 深色模式
- [x] 首页
- [ ] 约定式侧边栏：根据文件路由生成侧边栏，注意需要实现热更新
- [ ] 正文
- [ ] TOC

## TODO

- [x] 配置 uno 变量
- [x] 开启 ts 严格模式识别可选类型
- [x] 避免 uno 使用 css 变量或者使用 text-$xxx 语法
- [x] 取消 uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- [ ] 生成侧边栏数据的函数
- [ ] 文档多级菜单

## unocss 痛点

- uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- 抽离配置时 uno 插件无效，不知道使用 config.js 是否能生效
- 使用 windi 插件时，配置的 theme 没有智能提示，attr 有前缀时也没有 https://github.com/unocss/unocss/issues/2619
- 配置的 key 不能用 'xxx-xxx'的方式，起码 bg 不行
- spacing 配置 不能用在 height 与 width
- breakpoints 配置 不支持 css 变量
- zIndex 配置无效
