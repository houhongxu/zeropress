import { EasypressUserConfig, EasypressSiteConfig } from '../shared/types'
import { CONFIG_OPTIONS } from './consts'
import fse from 'fs-extra'
import path from 'path'
import { loadConfigFromFile } from 'vite'

/**
 * 读取并处理配置文件
 * @description root一般不填，默认为执行命令的根目录
 */
export async function resolveSiteConfig({
  root = process.cwd(),
  command,
  mode,
}: {
  root?: string
  command: 'build' | 'serve'
  mode: 'development' | 'production'
}) {
  const { userConfigPath, userConfig } = await resolveUserConfig({
    root,
    mode,
    command,
  })

  const valuableUserConfig = {
    title: userConfig?.title || 'EASYPRESS',
    description: userConfig?.description || 'SSG Framework',
    themeConfig: userConfig?.themeConfig ?? {},
    vite: userConfig?.vite ?? {},
  }

  const siteConfig: EasypressSiteConfig = {
    root,
    userConfigPath,
    userConfig: valuableUserConfig,
  }

  return siteConfig
}

export async function resolveUserConfig({
  root = process.cwd(),
  command,
  mode,
}: {
  root?: string
  command: 'build' | 'serve'
  mode: 'development' | 'production'
}) {
  const userConfigPath = getUserConfigPath({ root })

  // command和mode和配置中一样 https://cn.vitejs.dev/guide/api-javascript.html#loadconfigfromfile
  const loadResult = await loadConfigFromFile(
    { command, mode },
    userConfigPath,
    root,
  )

  return {
    userConfigPath,
    userConfig: loadResult?.config as EasypressUserConfig | undefined,
  }
}

function getUserConfigPath({ root = process.cwd() }) {
  const userConfigPath = CONFIG_OPTIONS.map((option) =>
    path.join(root, option),
  ).find((path) => fse.existsSync(path))

  return userConfigPath
}
