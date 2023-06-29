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
  const nav = pathname.split('/')[1]

  const { routes, sidebarTitles, title } = usePageData()

  const titleIndexs: number[] = []
  const paths = routes
    .map((route) => route.path)
    .map((path, index) =>
      path.endsWith('/')
        ? path.slice(0, -1) + '>' + sidebarTitles?.[index]?.replace('/', '<')
        : path,
    ) // 标记跳转的文件夹
    .filter((path, index) =>
      RegExp(`^(/${nav}/).+`).test(path)
        ? titleIndexs.push(index) && true
        : false,
    )

  const initSidebarTitles =
    sidebarTitles?.filter((_, index) => titleIndexs.includes(index)) ?? []

  const titles = useSidebarHMR(initSidebarTitles, title)

  const path2Title = (path: string) =>
    titles[paths.findIndex((item) => item === path)]

  const sidebarData = paths2tree(paths, path2Title, nav).items
  console.log(paths)

  return { data: sidebarData }
}

// ---

function paths2tree(
  paths: string[],
  path2Title: (path: string) => string | undefined,
  nav: string,
): SidebarItem {
  const tree: SidebarItem = { text: nav, items: [] }

  const getNumber = (str: string) => parseInt(str.replace(/[^\d]/g, ''))

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
          link: `/${names[depth].replace('>', '/').replace('<', '/')}?${nav}`,
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
