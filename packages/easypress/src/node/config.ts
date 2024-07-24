import tailwindcssConfig from '../../tailwind.config'
import { CONFIG_OPTIONS, DEFAULT_USER_CONFIG } from './consts'
import autoprefixer from 'autoprefixer'
import fse from 'fs-extra'
import path from 'path'
import { UserConfig, SiteConfig } from 'shared/types'
import tailwindcss from 'tailwindcss'
import { loadConfigFromFile, UserConfig as ViteUserConfig } from 'vite'

export const baseConfig: Pick<ViteUserConfig, 'css'> = {
  // 配置tailwindcss
  css: {
    postcss: { plugins: [tailwindcss(tailwindcssConfig), autoprefixer({})] },
  },
}

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
  const { userConfigPath, userConfig = {} } = await resolveUserConfig({
    root,
    mode,
    command,
  })

  const requiredUserConfig: Required<UserConfig> = {
    docs: userConfig.docs || DEFAULT_USER_CONFIG.docs,
    title: userConfig.title || DEFAULT_USER_CONFIG.title,
    description: userConfig.description || DEFAULT_USER_CONFIG.description,
    themeConfig: userConfig.themeConfig ?? DEFAULT_USER_CONFIG.themeConfig,
    vite: userConfig.vite ?? DEFAULT_USER_CONFIG.vite,
  }

  const siteConfig: SiteConfig = {
    root,
    userConfigPath,
    userConfig: requiredUserConfig,
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
    userConfig: loadResult?.config as UserConfig | undefined,
  }
}

function getUserConfigPath({ root = process.cwd() }) {
  const userConfigPath = CONFIG_OPTIONS.map((option) =>
    path.join(root, option),
  ).find((path) => fse.existsSync(path))

  return userConfigPath
}
