import { buildRuntime } from './build'
import { resolveSiteConfig } from './config'
import { ROOT_PATH } from './consts'
import { createRuntimeDevServer } from './server.js'
import { program } from 'commander'
import fse from 'fs-extra'
import path from 'path'

// 作者推荐以单文件组织cli https://github.com/tj/commander.js/issues/983

export const cli = program

const { version } = fse.readJSONSync(path.join(ROOT_PATH, './package.json'))

cli.name('easypress').version(version)

cli
  .command('dev', { isDefault: true })
  .description('dev server') // 单独使用description才使命令参数生效
  .option('-p,--port <value>', 'dev server port')
  .option('-d,--docs <value>', 'docs dir', 'docs')
  .action(async ({ port, docs }) => {
    const createServer = async () => {
      // 每次开启服务都要先读取配置文件
      const siteConfig = await resolveSiteConfig({
        mode: 'development',
        command: 'serve',
      })

      const absDocs = path.resolve(siteConfig.userConfig.docs || docs)

      const server = await createRuntimeDevServer({
        docs: absDocs,
        siteConfig,
        restartRuntimeDevServer: async () => {
          await server.close()

          await createServer()
        },
      })

      await server.listen(port)

      server.printUrls()
    }

    await createServer()
  })

cli
  .command('build')
  .description('build')
  .option('-d,--docs <value>', 'docs dir', 'docs')
  .action(async ({ docs }) => {
    try {
      const absDocs = path.resolve(docs)

      const siteConfig = await resolveSiteConfig({
        mode: 'production',
        command: 'build',
      })

      await buildRuntime({ siteConfig, docs: absDocs })
    } catch (e) {
      console.log(e)
    }
  })

cli.parse()
