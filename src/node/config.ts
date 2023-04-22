// 配置文件解析

import fse from 'fs-extra'
import path from 'path'
import { loadConfigFromFile, ConfigEnv } from 'vite'
import { UserConfig } from '../shared/types/index'

type RawConfig =
  | UserConfig
  | Promise<UserConfig>
  | (() => UserConfig | Promise<UserConfig>)

const SUPPORT_CONFIG_FILE = ['config.ts', 'config.js']

/**
 * 获取配置文件路径
 */
function getUserConfigPath(root: string) {
  try {
    const configPath = SUPPORT_CONFIG_FILE.map(
      (file) => path.resolve(root, file), // 补全路径
    ).find(fse.pathExistsSync) // 找到存在的配置路径

    return configPath
  } catch (e) {
    console.error(`Failed to load user config / 加载配置文件失败: ${e}`)
    throw e
  }
}

/**
 * 使用vite的jsapi-loadConfigFromFile读取配置文件
 */
export async function resolveConfig(
  root: string,
  command: ConfigEnv['command'],
  mode: ConfigEnv['mode'],
) {
  // 获取路径
  const configPath = getUserConfigPath(root)
  // 读取配置文件并解析

  const result = await loadConfigFromFile({ command, mode }, configPath, root)

  if (result) {
    // vite源码中判断了result https://github.com/vitejs/vite/blob/main/packages/vite/src/node/config.ts#L411
    const { config: rawConfig = {} as RawConfig } = result // 根据文档得知config有三种类型，https://cn.vitejs.dev/config/

    const userConfig = await (typeof rawConfig === 'function'
      ? rawConfig()
      : rawConfig)

    return [configPath, userConfig] as const
  } else {
    return [configPath, {} as UserConfig] as const
  }
}
