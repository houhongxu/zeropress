import { cac } from 'cac'
import path from 'path'
import { build } from './build'

// 配置版本
const version = require('../../package.json').version

// 初始化脚手架
const cli = cac('island').version(version).help()

// 开发命令
cli
  .command('[root]', 'start dev server / 开启开发环境服务器')
  .alias('dev')
  .action(async (root: string) => {
    const createServer = async () => {
      // 动态导入createDevServer,重新读取配置
      const { createDevServer } = await import('./dev.js')

      // 重启开发服务器
      const restartServer = async () => {
        await server.close()
        await createServer()
      }

      // 获取vite-dev-server实例
      const server = await createDevServer(root, restartServer)

      // 开启开发监听服务
      await server.listen()
      // 打印服务链接
      server.printUrls()
    }

    await createServer()
  })

// 构建命令
cli
  .command('build [root]', 'build for production / 构建生产环境包')
  .action(async (root: string) => {
    try {
      root = path.resolve(root)
      await build(root)
    } catch (e) {
      console.log(e)
    }
  })

// 解析脚手架
cli.parse()
