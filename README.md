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
