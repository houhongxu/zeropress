// 配置文件解析

import fse from 'fs-extra'
import path from 'path'
import { loadConfigFromFile, ConfigEnv } from 'vite'
import { SiteConfig, UserConfig } from 'shared/types/index'
import { SUPPORT_CONFIG_FILE } from './constants'

type RawConfig =
  | UserConfig
  | Promise<UserConfig>
  | (() => UserConfig | Promise<UserConfig>)

/**
 * 解析配置文件
 */
export async function resolveSiteConfig(
  root: string,
  command: ConfigEnv['command'],
  mode: ConfigEnv['mode'],
) {
  const [userConfigPath, userConfig, userConfigDeps] = await resolveUserConfig(
    root,
    command,
    mode,
  )

  const siteConfig: SiteConfig = {
    root,
    userConfigPath,
    userConfigDeps,
    userConfig: resolveDefaultConfig(userConfig),
  }

  return siteConfig
}

/**
 * 使用vite的jsapi-loadConfigFromFile读取用户配置文件
 */
async function resolveUserConfig(
  root: string,
  command: ConfigEnv['command'],
  mode: ConfigEnv['mode'],
) {
  // 获取路径
  const userConfigPath = getUserConfigPath(root)

  // 读取配置文件并解析
  const result = await loadConfigFromFile(
    { command, mode },
    userConfigPath,
    root,
  )

  if (result) {
    // vite源码中判断了result https://github.com/vitejs/vite/blob/main/packages/vite/src/node/config.ts#L411
    const { config: rawConfig = {} as RawConfig, dependencies = [] } = result // 根据文档得知config有三种类型，https://cn.vitejs.dev/config/

    const userConfig = (await (typeof rawConfig === 'function'
      ? rawConfig()
      : rawConfig)) as UserConfig

    return [userConfigPath, userConfig, dependencies] as const
  } else {
    return [userConfigPath, {} as UserConfig, [] as string[]] as const
  }
}

function resolveDefaultConfig(userConfig: UserConfig): UserConfig {
  return {
    title: userConfig.title || 'HhxPress',
    description: userConfig.description || 'SSG FrameWork',
    themeConfig: userConfig.themeConfig || {},
    vite: userConfig.vite || {},
  }
}

/**
 * 获取配置文件路径
 */
function getUserConfigPath(root: string) {
  try {
    const configPath = SUPPORT_CONFIG_FILE.map(
      (file) => path.resolve(root, file), // 补全路径
    ).find(fse.pathExistsSync) // 找到存在的配置路径

    if (!configPath) {
      throw Error(`Failed to find user config / 未找到配置文件`)
    }

    return configPath
  } catch (e: any) {
    console.error(`Failed to load user config / 加载配置文件失败`)
    throw new Error(e)
  }
}

export function defineConfig(config: UserConfig): UserConfig {
  return config
}
