import { buildRuntime } from './build'
import { resolveSiteConfig } from './config'
import { ROOT_PATH } from './constants'
import { createRuntimeDevServer } from './server'
import { program } from 'commander'
import fse from 'fs-extra'
import path from 'path'

// 作者推荐以单文件组织cli https://github.com/tj/commander.js/issues/983

export const cli = program

const { version } = fse.readJSONSync(path.join(ROOT_PATH, './package.json'))

cli.name('zeropress').version(version)

cli
  .command('dev', { isDefault: true })
  .description('dev server') // 单独使用description才使命令参数生效
  .option('-p,--port <value>', 'dev server port')
  .action(async ({ port }) => {
    const createServer = async () => {
      // 每次开启服务都要先读取配置文件
      const siteConfig = await resolveSiteConfig({
        mode: 'development',
        command: 'serve',
      })

      const server = await createRuntimeDevServer({
        siteConfig,
        restartRuntimeDevServer: async () => {
          await server.close()

          await createServer()
        },
      })

      await server.listen(port)

      server.printUrls()

      let isRestarting = false

      server.watcher.on('all', async (event, path) => {
        if (!isRestarting && event !== 'change') {
          console.log('监听到文件增删改，重启服务中:', path)

          isRestarting = true

          await server.close()
          await createServer()

          isRestarting = false
        }
      })
    }

    await createServer()
  })

cli
  .command('build')
  .description('build')
  .action(async () => {
    try {
      const siteConfig = await resolveSiteConfig({
        mode: 'production',
        command: 'build',
      })

      await buildRuntime({ siteConfig })

      console.log('构建成功')
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
