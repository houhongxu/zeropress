# 博客库 hhxpress

## 功能

- 支持 mdx2，docusaurus2 只支持 mdx1，vitepress1 不支持
- 减少 js 体积的孤岛架构
- 约定式侧边栏
- TODO 首页加载完后和侧边栏打开时预加载文件

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
- [x] 导航栏
- [x] 深色模式
- [x] 首页
- [x] 约定式侧边栏：根据文件路由生成侧边栏，注意需要实现热更新
- [x] 正文
- [x] TOC

## unocss 痛点

- uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- 抽离配置时 uno 插件无效，不知道使用 config.js 是否能生效
- 使用 windi 插件时，配置的 theme 没有智能提示，attr 有前缀时也没有 https://github.com/unocss/unocss/issues/2619
- 配置的 key 不能用 'xxx-xxx'的方式，起码 bg 不行
- spacing 配置 不能用在 height 与 width
- breakpoints 配置 不支持 css 变量
- zIndex 配置无效
- overflow-ellipsis 无效

## 约定

### 约定根文件夹 site

### 约定路由

在根文件夹 site 下面的文件夹会自动生成路由

### 约定侧边栏

- 自动生成的路由会自动根据文件夹生成侧边栏，不同文件夹入口可以在 config 里配置 nav
- 侧边栏顺序按文件系统顺序，可以在文件名前使用 1234 排序
- 仅支持一层侧边栏文件夹
- 侧边栏名称按 文章标题 || 去开头数字的文件名 || 文件名 生成

## 发版

- 确定变动版本级别 patch | minor | major，遵循 semver 规范
- TODO 执行测试命令
- 自动修改 package.json 中的 version 字段
- 执行 pnpm build
- 生成 CHANGELOG.md
- 生成 release 相关的 commit
- 执行 npm publish
- 执行 git push 并打 tag

## 生产环境问题

- [x] 修复 plugin-react 无法编译 node_modules 下代码的问题
- [x] build 找不到 React 的问题
- [x] 包产物线上路由失效
- [ ] 包 config 热更新失效

## TODO

- [x] 配置 uno 变量
- [x] 开启 ts 严格模式识别可选类型
- [x] 避免 uno 使用 css 变量或者使用 text-$xxx 语法
- [x] 取消 uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- [x] 生成侧边栏数据的函数
- [x] 文档多级菜单
- [x] 侧边栏热更新
- [ ] 支持当前文件夹下使用 img 文件夹引入图片
- [ ] 支持侧边栏跳转页面

## FIX

- [x] 侧边栏顺序不对
- [x] 侧边栏滚动条不应该被 header 遮挡
- [x] 侧边栏部分高亮失效
- [x] TOC 应该不能换行
- [x] header anchor 应该精准定位
- [ ] header anchor 定位有 bug，滚动后无法精准定位
- [ ] 侧边栏点击后不应该跳转到头部->不应该跳转 html->使用 spa 模式->islandjs 也没解决
