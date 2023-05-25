// 脚手架 https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts

import cac from 'cac'
import path from 'path'
import { build } from './build'

// 配置命令

const cli = cac('hhxpress')

cli
  .command('[root]', 'Start Dev Server')
  .alias('dev') // root默认应该为命令行当前路径
  .action(async (root = process.cwd()) => {
    // 完整化root路径，虽然vite支持相对路径，保护性编程
    root = path.resolve(root)

    // 开启服务的函数因为需要传入pluginConfig所以单独声明
    const createServer = async () => {
      const { createViteServer } = await import('./dev.js')

      // 重启服务函数
      const restartServer = async () => {
        await server.close()
        await createServer()
      }

      // 创建vite静态服务,并传入重启服务函数给pluginConfig
      const server = await createViteServer(root, restartServer)

      // 开启监听
      await server.listen()

      // 打印服务url
      server.printUrls()
    }

    // 开启服务
    await createServer()
  })

cli
  .command('build [root]', 'Start Build')
  .action(async (root = process.cwd()) => {
    try {
      root = path.resolve(root)

      await build(root)
    } catch (e: any) {
      console.error(`Failed to build / 构建失败`)
      throw new Error(e)
    }
  })

cli.parse()
