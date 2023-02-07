import path from 'path'
import fse from 'fs-extra'
import * as execa from 'execa'
import type { SyncOptions } from 'execa'

const exampleDir = path.resolve(__dirname, '../e2e/playground/basic')
const ROOT_PATH = path.resolve(__dirname, '../')

// 将execa子进程命令行log信息传入父进程内
const defaultExecaOpts: SyncOptions = {
  stdout: process.stdout,
  stdin: process.stdin,
  stderr: process.stderr,
}

async function prepareE2E() {
  // 确保已经构建
  if (!fse.existsSync(path.resolve(__dirname, '../dist'))) {
    execa.execaCommandSync('pnpm build', {
      cwd: ROOT_PATH,
      ...defaultExecaOpts,
    })
  }
  // 安装浏览器的内核包，执行的时间会比较长，第一次运行可能导致测试超时，
  execa.execaCommandSync('npx playwright install', {
    cwd: ROOT_PATH,
    ...defaultExecaOpts,
  })

  execa.execaCommandSync('pnpm i', {
    ...defaultExecaOpts,
  })

  execa.execaCommandSync('pnpm dev', {
    cwd: exampleDir,
    ...defaultExecaOpts,
  })
}

prepareE2E()
