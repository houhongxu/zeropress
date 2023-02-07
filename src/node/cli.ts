import { cac } from 'cac'
import path = require('path')
import { createDevServer } from './dev'

// 配置版本
const version = require('../../package.json').version

// 初始化脚手架
const cli = cac('island').version(version).help()

// 开发命令
cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    // 辨析根路径
    root = root ? path.resolve(root) : process.cwd()
    // 获取vite-dev-server实例
    const server = await createDevServer(root)
    // 开启开发监听服务
    await server.listen()
    // 打印服务链接
    server.printUrls()
  })

// 构建命令
cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    console.log('build', root)
  })

// 解析脚手架
cli.parse()
