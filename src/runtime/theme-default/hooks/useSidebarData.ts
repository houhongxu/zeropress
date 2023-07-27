// 生成侧边栏数据
// 目前仅限一层文件夹，空文件夹无视，文件夹不可点击跳转
// 顺序用文件系统显示的顺序
// 标题默认是md#标题，没有则退到文件标准标题（去除开头数字），再没有则退到文件原标题

import { useLocation } from 'react-router-dom'
import { SidebarItem } from 'shared/types'
import { usePageData } from '../../usePageData'
import { devLog, normalizeTitle } from '../utils'
import { useSidebarHMR } from './useSidebarHMR'

export function encodeDirLink(path: string, curSidebarTitle: string) {
  // curSidebarTitle支持文件夹链接内的index.md的标题为跳转的首篇文章
  return path.slice(0, -1) + '>' + curSidebarTitle.replace('/', '<')
}

export function decodeDirLink(name: string, curNav: string) {
  return {
    text: name.split('>')[0],
    link: `/${name.replace('>', '/').replace('<', '/')}?${curNav}`,
  }
}

export function isDirLink(name: string) {
  return name.includes('>')
}

/**
 * 获取当前侧边栏数据
 */
export function useSidebarData() {
  const { pathname } = useLocation()
  const decodedPathname = decodeURI(pathname)
  const curNav = decodedPathname.split('/')[1]
  const { routes, sidebarTitles, title } = usePageData()

  // 去除根路由的标题和路径
  const allSidebarTitles = sidebarTitles?.slice(1)
  const allPaths = routes
    .map((route) => route.path)
    .filter((path) => path !== '/')

  devLog('<==========侧边栏==========>')

  // 筛选出当前导航栏的路径，并收集对应的标题索引
  const titleIndexs: number[] = []

  // 跳转文件夹的链接本身进行标记处理，并携带上链接
  const dirLinkPaths = allPaths.map((path, index) =>
    path.endsWith('/')
      ? encodeDirLink(path, allSidebarTitles?.[index] || '')
      : path,
  )

  // 当前侧边栏链接
  const curPaths = dirLinkPaths.filter((path, index) =>
    // 兼容汉字
    RegExp(`^(/${decodeURI(curNav)}/).+`).test(path)
      ? titleIndexs.push(index) && true
      : false,
  )

  // 根据收集的标题索引为当前路径获取初始侧边栏标题
  const initSidebarTitles =
    allSidebarTitles?.filter((_, index) => titleIndexs.includes(index)) ?? []

  // 根据初始侧边栏标题获取支持hmr的标题
  const curSidebarTitles = useSidebarHMR(initSidebarTitles, title)

  devLog('当前侧边栏标题：', curSidebarTitles)
  devLog('当前侧边栏路径：', curPaths)

  // 将路径转换为标题的工具函数
  const path2Title = (path: string) =>
    curSidebarTitles[curPaths.findIndex((item) => item === path)]

  // 将路径转换为可给侧边栏消费的树结构
  const sidebarData = paths2tree(curPaths, path2Title, curNav).items ?? []

  devLog('侧边栏树', sidebarData)

  return { data: sidebarData }
}

// ---

/**
 * 将路径转换为侧边栏消费的树结构
 */
function paths2tree(
  paths: string[],
  path2Title: (path: string) => string | undefined,
  curNav: string,
): SidebarItem {
  const tree: SidebarItem = { text: curNav, items: [] }

  // 获取分割的路径的方法
  const splitPath = (str: string) => str.split('/').filter((i) => !!i)

  // 获取排序依据的数字的方法
  const getSortNumbers = (str: string) =>
    splitPath(str).reduce((p, c) => {
      const curNum = parseInt(c.match(/\d+/)?.[0] || '0')

      return [...p, curNum]
    }, [] as number[])

  // 获取排序的路径
  const sortedPaths = [...paths].sort((a, b) => {
    const aNums = getSortNumbers(a)
    const bNums = getSortNumbers(b)

    for (let i = 0; i < aNums.length; ) {
      if (aNums[i] !== bNums[i]) {
        return aNums[i] - bNums[i]
      } else {
        i++
      }
    }

    return 0
  })

  devLog('排序的路径：', sortedPaths, sortedPaths.map(getSortNumbers))

  // 获取分割的路径
  const splittedPaths = sortedPaths.map((path) => splitPath(path))

  devLog('分割的路径：', splittedPaths)

  // 为保证同文件系统顺序，额外存文件夹节点处理文件夹顺序
  const dirNodes: any = []

  splittedPaths.forEach((names, index) => {
    // 根据文件深度进行处理
    const depth = names.length - 1

    // 标题依次为 文章标题>文件格式化的标题>文件原标题
    const title =
      path2Title(sortedPaths[index]) ||
      normalizeTitle(names[depth]) ||
      names[depth]

    if (depth === 1) {
      // 肯定是根节点docs的子节点，肯定是文件节点，因为插件中空文件夹不生成路径

      // 如果包含文件夹链接的标志，则为文件夹链接跳转
      let isDir = isDirLink(names[depth])
      if (isDir) {
        const { text, link } = decodeDirLink(names[depth], curNav)

        tree.items?.push({
          text: normalizeTitle(text),
          link,
        })
      } else {
        // 普通文件侧边栏
        tree.items?.push({ text: title, link: sortedPaths[index] })
      }
    }

    if (depth === 2) {
      // 肯定是文件夹内的子文件节点
      const dirName = normalizeTitle(names[depth - 1]) || names[depth - 1]

      // 判断是否缓存上级文件夹节点的方法
      const hasItems = (arr?: SidebarItem[], text?: string) =>
        !!arr?.some((item) => item.text === text)

      // 判断是否缓存上级文件夹，没有就压入
      if (!hasItems(dirNodes, dirName)) {
        dirNodes.push({ text: dirName, items: [] })
      }

      // 在上级文件夹节点下新增当前文件节点
      const dir = dirNodes.at(-1)

      dir?.items?.push({ text: title, link: sortedPaths[index] })
    }
  })

  // 合并文件夹节点到树上
  tree.items = [...dirNodes, ...(tree.items ?? [])]

  return tree
}
