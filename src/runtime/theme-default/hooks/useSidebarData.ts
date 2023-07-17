// 生成侧边栏数据
// 目前仅限一层文件夹，空文件夹无视，文件夹不可点击跳转
// 顺序用文件系统
// 标题默认是md#标题，没有则退到文件标准标题（去除开头数字），再没有则退到文件原标题

import { useLocation } from 'react-router-dom'
import { SidebarItem } from 'shared/types'
import { usePageData } from '../../usePageData'
import { normalizeTitle } from '../utils'
import { useSidebarHMR } from './useSidebarHMR'

export function useSidebarData() {
  const { pathname } = useLocation()
  const curNav = pathname.split('/')[1]
  const { routes, sidebarTitles, title } = usePageData()
  const curSidebarTitles = sidebarTitles?.slice(1)

  const titleIndexs: number[] = []

  const paths = routes.map((route) => route.path).filter((path) => path !== '/')

  // 跳转文件夹的链接本身进行标记处理，并携带上链接
  const dirLinkPaths = paths.map((path, index) =>
    path.endsWith('/')
      ? path.slice(0, -1) + '>' + curSidebarTitles?.[index]?.replace('/', '<')
      : path,
  )

  // 筛选当前导航栏的路径，并收集标题索引
  const curPaths = dirLinkPaths.filter((path, index) =>
    RegExp(`^(/${curNav}/).+`).test(path)
      ? titleIndexs.push(index) && true
      : false,
  )

  // 根据收集的索引为当前路径获取初始标题
  const initSidebarTitles =
    curSidebarTitles?.filter((_, index) => titleIndexs.includes(index)) ?? []

  // 根据初始标题获取支持hmr的标题
  const titles = useSidebarHMR(initSidebarTitles, title)

  // 将路径转换为标题的工具函数
  const path2Title = (path: string) =>
    titles[curPaths.findIndex((item) => item === path)]

  // 将路径转换为可给侧边栏消费的树结构
  const sidebarData = paths2tree(curPaths, path2Title, curNav).items ?? []

  return { data: sidebarData }
}

// ---

function paths2tree(
  paths: string[],
  path2Title: (path: string) => string | undefined,
  curNav: string,
): SidebarItem {
  const tree: SidebarItem = { text: curNav, items: [] }

  const getNumber = (str: string) =>
    parseInt(str.split(' ')[0].replace(/[^\d]/g, ''))

  const sortedPaths = [...paths].sort((a, b) => getNumber(a) - getNumber(b))
  const splitPath = (str: string) => str.split('/').filter((i) => !!i)

  const splittedPaths = sortedPaths.map((path) => splitPath(path))

  // 为保证同文件系统顺序，额外存文件夹节点处理文件夹
  const dirNodes: any = []

  splittedPaths.forEach((names, index) => {
    const depth = names.length - 1

    const title =
      path2Title(sortedPaths[index]) ||
      normalizeTitle(names[depth]) ||
      names[depth]

    if (depth === 1) {
      // 肯定是根节点docs的子节点，肯定是文件节点，因为插件中空文件夹不生成路径

      let isDir = false

      if (names[depth].includes('>')) {
        isDir = true

        tree.items?.push({
          text: normalizeTitle(names[depth].split('>')[0]),
          link: `/${names[depth]
            .replace('>', '/')
            .replace('<', '/')}?${curNav}`,
        })
      }

      if (!isDir) {
        tree.items?.push({ text: title, link: sortedPaths[index] })
      }
    }

    if (depth === 2) {
      // 肯定是文件夹内的节点
      const dirName = normalizeTitle(names[depth - 1]) || names[depth - 1]

      // 判断是否有上级文件夹节点
      // 通过dirnode判断
      const hasItems = (arr?: SidebarItem[], text?: string) =>
        !!arr?.some((item) => item.text === text)

      if (!hasItems(dirNodes, dirName)) {
        dirNodes.push({ text: dirName, items: [] })
      }

      const dir = dirNodes.at(-1)

      dir?.items?.push({ text: title, link: sortedPaths[index] })
    }
  })

  // 合并文件夹节点到树上
  tree.items = [...dirNodes, ...(tree.items ?? [])]

  return tree
}
