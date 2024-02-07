import { createRuntimeDevServer } from './server'
import { program } from 'commander'
import path from 'path'

// 作者推荐以单文件组织cli https://github.com/tj/commander.js/issues/983

export const cli = program

const { version } = require(path.join(__dirname, '../../package.json'))

cli.name('easypress').version(version)

cli
  .command('dev', { isDefault: true })
  .argument('[root]', 'dev server root dir', process.cwd())
  .description('dev server') // 单独使用description才使命令参数生效
  .option('-p,--port <value>', 'dev server port')
  .action(async (root, { port }) => {
    console.log(root, { port })

    const absRoot = path.resolve(root)

    const server = await createRuntimeDevServer({ root: absRoot })

    await server.listen(port)

    server.printUrls()
  })

cli
  .command('build')
  .description('build')
  .action(async () => {
    try {
      console.log('build')
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
