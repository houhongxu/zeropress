import { resolve } from 'path'
import fs from 'fs-extra'
import { loadConfigFromFile } from 'vite'
import { UserConfig } from '../shared/types/index'

type RawConfig =
  | UserConfig
  | Promise<UserConfig>
  | (() => UserConfig | Promise<UserConfig>)

/**
 * 解析配置
 */
export async function resolveConfig(
  root: string,
  command: 'serve' | 'build',
  mode: 'development' | 'production'
) {
  const [configPath, userConfig] = await resolveUserConfig(root, command, mode)

  return userConfig
}

export async function resolveUserConfig(
  root: string,
  command: 'serve' | 'build',
  mode: 'development' | 'production'
) {
  // 1. 获取配置文件路径，支持 js、ts 格式
  const configPath = getUserConfigPath(root)
  // 2. 读取配置文件
  const result = await loadConfigFromFile({ command, mode }, configPath, root)

  if (result) {
    const { config: rawConfig = {} as RawConfig } = result
    // 三种情况:
    // 1. object
    // 2. promise
    // 3. function
    const userConfig = (await (typeof rawConfig === 'function'
      ? rawConfig()
      : rawConfig)) as UserConfig

    return [configPath, userConfig] as const
  } else {
    return [configPath, {}] as const
  }
}

/**
 * 获取用户配置文件路径
 */
function getUserConfigPath(root: string) {
  try {
    // 支持的配置文件格式
    const supportConfigFiles = ['config.ts', 'config.js']
    // 获取配置文件路径
    const configPath = supportConfigFiles
      .map((file) => resolve(root, file))
      .find(fs.pathExistsSync)

    return configPath
  } catch (e) {
    console.error(`Failed to load user config: ${e} / 加载用户配置失败：${e}`)
    throw e
  }
}

/**
 * 用户配置时进行类型提示
 */
export function defineConfig(config: UserConfig) {
  return config
}
