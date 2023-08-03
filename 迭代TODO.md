# 迭代 TODO

## FEAT

- [x] 配置 uno 变量
- [x] 开启 ts 严格模式识别可选类型
- [x] 生成侧边栏数据的函数
- [x] 文档多级菜单
- [x] 侧边栏热更新
- [x] 支持侧边栏跳转文件夹链接
- [ ] 支持当前文件夹下使用 img 文件夹引入图片 需要打包时按路径收集图片到 public 并处理相对路径为绝对路径 carbon:down-to-bottom
- [ ] github 图标需要可以自定义链接
- [ ] 上次更新时间 https://github1s.com/sanyuan0704/island.js/blob/HEAD/packages/island/src/node/plugin-mdx/pluginMdxLastUpdated.ts
- [ ] 侧边栏折叠
- [ ] md 支持 tip 和 note 提示
- [ ] 约定式导航栏
- [ ] 将 文件夹链接 与 约定式导航栏 的语法更新为 frontmatter 语法

## FIX

- [x] 避免 uno 使用 css 变量或者使用 text-$xxx 语法
- [x] 取消 uno-attr 方式，适配很差，有些变量不生效需要加 un-，有些加了 un-失效
- [x] 侧边栏顺序不对
- [x] 侧边栏滚动条不应该被 header 遮挡
- [x] 侧边栏部分高亮失效
- [x] TOC 应该不能换行
- [x] header anchor 应该精准定位
- [x] 文件夹链接内文件夹顺序不对
- [ ] header anchor 定位有 bug，滚动后无法精准定位
- [ ] 侧边栏点击后不应该跳转到头部->不应该跳转 html->使用 spa 模式->islandjs 也没解决

## PERF

- [ ] 打包可以优化速度
- [ ] 侧边栏高亮有延迟
- [ ] 约定式侧边栏可以封装为插件
- [ ] 重新整理注释与代码
- [ ] 首页加载完后和侧边栏打开时预加载文件，参考 docusaurus 怎么实现秒开的
