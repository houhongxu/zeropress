# 博客库 hhxpress

## 功能

- 支持 mdx2，docusaurus2 只支持 v1，vitepress1 不支持
- 减少 js 体积的孤岛架构

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

为什么文件系统路由还需要

- [x] 客户端配置路由
- [x] 配置路径别名
- [x] 服务端配置路由
- [x] 完善生产环境构建
- [x] 自动化生成约定式路由的插件
