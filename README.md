# 实现博客库

首先一个终端执行 pnpm dev 进行库文件监听编译

另一个终端执行 hhx-docs dev docs 进行博客调试

## 客户端入口开发调试

hhx-docs dev .

## 博客构建产物调试

hhx-docs build docs

npx serve docs/build

## 如何不进行 link 执行脚手架

cd 进入当前文件夹
执行`node bin/cli.js dev docs`

## path.join 和 path.resolve 区别

1. join 是把各个 path 片段连接在一起， resolve 把'/'当成根目录

2. resolve 在传入的第一参数为非根路径时，会返回一个带当前目录路径的绝对路径，而 join 仅仅用于路径拼接

## vite 版本

需要 vite3.1.4

对应的插件需要 @vitejs/plugin-react 2.2.0

## TODO

- [ ] fornt-matter 中 hero 只有 name+text 属性时 无法生成页面
- [ ] 根据 docs 内的 md 文件动态生成侧边栏
- [ ] 折叠侧边栏点击范围扩大，需要在 configPlugin 里读取路由？还是用路由插件？
- [ ] ## md 文件标题显示问题
