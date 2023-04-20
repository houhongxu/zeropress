// 脚手架 https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts

import cac from 'cac'
import { build } from './build'
import { createViteServer } from './dev'

// 配置命令

const cli = cac('hhxpress')

cli
  .command('[root]', 'Start Dev Server')
  .alias('dev')
  .action(async (root = process.cwd()) => {
    // 创建vite静态服务
    const server = await createViteServer(root)

    // 开启监听
    await server.listen()

    // 打印服务url
    server.printUrls()
  })

cli
  .command('build [root]', 'Start Build')
  .action(async (root = process.cwd()) => {
    try {
      await build(root)
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
