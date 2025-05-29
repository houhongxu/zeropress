import chalk from 'chalk'
import enquirer from 'enquirer'
import { execa } from 'execa'
import fse from 'fs-extra'
import minimist from 'minimist'
import path from 'path'
import { exit } from 'process'
import semver from 'semver'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://github.com/minimistjs/minimist#example
const args = minimist(process.argv.slice(2))

// 是否是 dry 模式。dry 模式下只会展示命令，不会真正执行命令，用来测试。
const isDry = args.dry

const versionIncrements = ['patch', 'minor', 'major'] as const

const { default: pkg } = await import('../package.json')
const currentVersion = pkg.version
const currentName = pkg.name

const directRun = async (bin: string, args: string[]) => {
  return await execa(bin, args, { stdio: 'inherit' })
}

const dryRun = (bin: string, args: string[]) => {
  console.log(chalk.blue(`[dryrun] ${bin} ${args.join(' ')}`))
  return
}

const run: (bin: string, args: string[]) => void | Promise<unknown> = isDry
  ? dryRun
  : directRun

const step = (msg: string) => console.log(chalk.cyan('\n' + msg))

async function updateVersion(version: string) {
  await fse.writeFile(
    path.join(__dirname, '../package.json'),
    JSON.stringify({ ...pkg, version }, null, 2),
  )
}

const rollback: (Promise<unknown> | void)[] = []

async function handleErr(
  err: unknown,
  tasks?: (Promise<unknown> | void) | (Promise<unknown> | void)[],
) {
  try {
    console.log(err)
    rollback.concat(Array.isArray(tasks) ? tasks : [tasks])
    await Promise.all(rollback)
  } catch (err) {
    console.log('回退失败:', err)
  }

  exit(1)
}

// https://github.com/enquirer/enquirer#-usage
async function main() {
  // 1. 确定变动版本级别
  const { release } = await enquirer.prompt<{ release: string }>({
    type: 'select',
    name: 'release',
    message: 'Select release type / 选择发布种类',
    choices: versionIncrements.map(
      (i) => `${i} (${semver.inc(currentVersion, i)})`,
    ),
  })

  const targetVersion = release.split(' ')[1].slice(1, -1)

  const { confirm } = await enquirer.prompt<{ confirm: boolean }>({
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
    try {
      step('Updating version / 更新版本中 ...')
      await updateVersion(targetVersion)
    } catch (err) {
      await handleErr(err, updateVersion(currentVersion))
    }
  }

  // 4. 执行 pnpm build
  step('Building package / 构建产物中 ...')
  await run('pnpm', ['build'])

  // 5. 生成 CHANGELOG.md
  step('Generating changelog / 生成改动记录中 ...')
  await run('pnpm', ['changelog'])

  // 6. 生成 release commit
  try {
    step('Committing changes / 提交改动中 ...')
    await run('git', ['add', '-A'])
    await run('git', ['commit', '-m', `release: v${targetVersion}`])
  } catch (err) {
    await handleErr(err, run('git', ['reset', '--soft', 'HEAD~1']))
  }

  // 7. git push 并打 tag
  const tagName = `${currentName}-v${targetVersion}`

  try {
    step('Pushing to GitHub / 推送到github中...')
    await run('git', ['tag', tagName])
    // 将本地仓库中的 vxxx 标签推送到名为 origin 的远程仓库，不推送代码
    await run('git', ['push', 'origin', tagName])
  } catch (err) {
    await handleErr(err, [
      run('git', ['tag', '-d', tagName]),
      run('git', ['push', 'origin', '--delete', 'tag', tagName]),
    ])
  }

  // 8. 执行 npm publish
  try {
    step('Publishing packages / 发布npm包中 ...')
    await run('pnpm', ['publish', '--access', 'public'])
  } catch (err) {
    console.warn('发布失败请检查npm账号是否登录，然后手动发布即可')
    await handleErr(err)
  }
}

main().catch(async (err) => {
  console.log(err)
})
