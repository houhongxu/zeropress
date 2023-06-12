import chalk from 'chalk'
import minimist from 'minimist'
import { execa } from 'execa'
import fse from 'fs-extra'
import path from 'path'
import { prompt } from 'enquirer'
import semver from 'semver'

// https://github.com/minimistjs/minimist#example
const args = minimist(process.argv.slice(2))

// 是否是 dry 模式。dry 模式下只会展示命令，不会真正执行命令，用来测试。

const isDry = args.dry

const versionIncrements = ['patch', 'minor', 'major'] as const

const pkg = require('../package.json')
const currentVersion = pkg.version

const directRun = async (bin: string, args: string[]) => {
  return await execa(bin, args, { stdio: 'inherit' })
}

const dryRun = (bin: string, args: string[]) => {
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`))
  return
}

const run: (bin: string, args: string[]) => void | Promise<any> = isDry
  ? dryRun
  : directRun

const step = (msg: any) => console.log(chalk.cyan('\n' + msg))

async function updateVersion(version: string) {
  pkg.version = version
  await fse.writeFile(
    path.resolve(__dirname, '../package.json'),
    JSON.stringify(pkg, null, 2),
  )
}

// https://github.com/enquirer/enquirer#-usage
async function main() {
  // 1. 确定变动版本级别
  const { release } = await prompt<{ release: string }>({
    type: 'select',
    name: 'release',
    message: 'Select release type / 选择发布种类',
    choices: versionIncrements.map(
      (i) => `${i} (${semver.inc(currentVersion, i)})`,
    ),
  })

  const targetVersion = release.split(' ')[1].slice(1, -1)

  const { confirm } = await prompt<{ confirm: boolean }>({
    type: 'confirm',
    name: 'confirm',
    message: `Releasing ${targetVersion}. Confirm / 发布 ${targetVersion}。 确定 ?`,
  })

  if (!confirm) {
    return
  }

  // TODO 2. 执行测试

  // 3. 自动修改包版本
  if (!isDry) {
    step('Updating version / 更新版本中 ...')
    await updateVersion(targetVersion)
  }
  // 4. 执行 pnpm build
  step('Building package / 构建产物中 ...')
  await run('pnpm', ['build'])

  // 5. 生成 CHANGELOG.md
  step('Generating changelog / 生成改动记录中 ...')
  await run('pnpm', ['changelog'])

  // 6. 生成 release commit
  step('Committing changes / 提交改动中 ...')
  await run('git', ['add', '-A'])
  await run('git', ['commit', '-m', `release: v${targetVersion}`])

  // 7. 执行 npm publish
  step('Publishing packages / 发布包中 ...')
  await run('pnpm', ['publish', '--access', 'public'])

  // 8. git push 并打 tag
  step('\nPushing to GitHub...')
  await run('git', ['tag', `v${targetVersion}`])
  // 将本地仓库中的 vxxx 标签推送到名为 origin 的远程仓库，不推送代码
  await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`])
  await run('git', ['push'])
}

main().catch(async (err) => {
  // 错误兜底处理，回退版本
  console.log(err)
  await updateVersion(currentVersion)
})
