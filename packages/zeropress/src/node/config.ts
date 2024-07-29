import { CONFIG_OPTIONS, DEFAULT_USER_CONFIG } from './consts'
import {
  UserConfig,
  SiteConfig,
  Sidebar,
  NavItem,
  SidebarDir,
  SidebarItem,
} from '@/shared/types'
import { groupBy, keyBy, normalizeUrl } from '@/shared/utils'
import fg from 'fast-glob'
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
  const { userConfigPath, userConfig = {} } = await resolveUserConfig({
    root,
    mode,
    command,
  })

  const docs = userConfig.docs || DEFAULT_USER_CONFIG.docs

  const auto = await autoSidebarAndNav({ docs })

  const navLeftIndex =
    userConfig.themeConfig?.nav?.findIndex(
      (item) => item.position === 'left',
    ) ?? 0

  const nav =
    userConfig.themeConfig?.autoNav === false
      ? userConfig.themeConfig.nav ?? []
      : (userConfig.themeConfig?.nav ?? []).toSpliced(
          navLeftIndex === -1 ? 0 : navLeftIndex,
          0,
          ...auto.nav,
        )

  const sidebar =
    userConfig.themeConfig?.autoSidebar === false
      ? userConfig.themeConfig.sidebar ?? {}
      : auto.sidebar

  const normalizedNav = nav.map((item) => ({
    ...item,
    link: normalizeUrl(item.link),
  }))

  const normalizedSidebar = Object.entries(sidebar).reduce<Sidebar>(
    (pre, [key, value]) => {
      pre[normalizeUrl(key)] = value.map((item) => ({
        ...item,
        items: item.items?.map((i) => ({ ...i, link: normalizeUrl(i.link) })),
      }))

      return pre
    },
    {},
  )

  const requiredUserConfig: Required<UserConfig> = {
    docs,
    title: userConfig.title || DEFAULT_USER_CONFIG.title,
    description: userConfig.description || DEFAULT_USER_CONFIG.description,
    themeConfig: userConfig.themeConfig
      ? {
          ...userConfig.themeConfig,
          nav: normalizedNav,
          sidebar: normalizedSidebar,
          autoNav: true,
          autoSidebar: true,
        }
      : {
          ...DEFAULT_USER_CONFIG.themeConfig,
          nav: normalizedNav,
          sidebar: normalizedSidebar,
          autoNav: true,
          autoSidebar: true,
        },
    vite: userConfig.vite ?? DEFAULT_USER_CONFIG.vite,
  }

  const siteConfig: SiteConfig = {
    root,
    userConfigPath,
    userConfig: requiredUserConfig,
  }

  return siteConfig
}

async function autoSidebarAndNav({ docs }: { docs?: string }) {
  // glob文件
  const files = (
    await fg.glob('**/*.{jsx,tsx,md,mdx}', {
      ignore: ['node_modules/**', 'client/**', 'server/**'],
      cwd: docs,
      deep: 3,
    })
  ).filter((item) => !item.endsWith('index.md'))

  const data = files.map((item) => {
    const nav = item.split('/')[0]
    const dir = item.split('/')[1]
    const file = item.split('/')[2]

    const splitedNav = splitIndex(nav)
    const splitedDir = splitIndex(dir)
    const splitedFile = splitIndex(file)

    return {
      path: `/${item.replace(path.extname(item), '')}`,
      nav,
      dir,
      file,
      navIndex: splitedNav.index,
      navText: splitedNav.text,
      navPath: `/${nav}`,
      siderbarDirIndex: splitedDir.index,
      siderbarDirText: splitedDir.text,
      fileIndex: splitedFile.index,
      fileText: splitedFile.text.replace(path.extname(splitedFile.text), ''),
    }
  })

  const nav = Object.entries(groupBy(data, 'navText')).map<NavItem>(
    ([navText, value]) => ({
      text: navText,
      link: value.toSorted((a, b) => a.navIndex - b.navIndex)[0].path,
    }),
  )

  const sidebar = Object.entries(groupBy(data, 'navPath')).reduce<
    Record<string, SidebarDir[]>
  >((pre, [navPath, value]) => {
    const sidebarItemsMap = Object.entries(
      groupBy(value, 'siderbarDirText'),
    ).reduce<Record<string, SidebarItem[]>>((pre, [siderbarDirText, value]) => {
      pre[siderbarDirText] = value
        .toSorted((a, b) => a.fileIndex - b.fileIndex)
        .map((item) => ({
          text: item.fileText,
          link: item.path,
        }))

      return pre
    }, {})

    pre[navPath] = Object.values(
      // keyBy可以根据text字段去重，因为text相同的items也是相同的，所以不会丢失值
      keyBy(
        value
          .toSorted((a, b) => a.siderbarDirIndex - b.siderbarDirIndex)
          .map((item) => ({
            text: item.siderbarDirText,
            items: sidebarItemsMap[item.siderbarDirText],
          })),
        'text',
      ),
    )

    return pre
  }, {})

  return { nav, sidebar }
}

function splitIndex(text?: string) {
  const matched = text?.match(/^(\d+)(\.?\s*)(.*)$/)
  const index = matched?.[1]

  if (index) {
    return {
      index: parseInt(index),
      text: matched?.[3] ?? '',
    }
  } else {
    return {
      index: 0,
      text: text ?? '',
    }
  }
}

async function resolveUserConfig({
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
