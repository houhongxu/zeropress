import { Root } from 'mdast'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import Slugger from 'github-slugger'
import { parse } from 'acorn'
import { Program } from 'mdast-util-mdxjs-esm/lib'

const slugger = new Slugger()

interface TocItem {
  id: string
  text: string
  depth: number
}

interface ChildNode {
  type: 'link' | 'text' | 'inlineCode'
  value?: string
  children?: ChildNode[]
}

/**
 * 目录插件
 * mdast才有heading节点
 */
export const remarkPluginToc: Plugin<[], Root> = () => {
  return (tree) => {
    const toc: TocItem[] = []
    visit(tree, 'heading', (node) => {
      // 深度到底或者没有子节点
      if (!node.depth || !node.children?.length) {
        return
      }

      // 提取h2-h4
      if (node.depth > 1 && node.depth < 5) {
        const originText = (node.children as ChildNode[])
          .map((child) => {
            // 单独处理link
            switch (child.type) {
              case 'link':
                return child.children?.map((c) => c.value).join('')
              default:
                return child.value
            }
          })
          .join('')
        const id = slugger.slug(originText)
        toc.push({
          id,
          text: originText,
          depth: node.depth,
        })
      }
    })

    // mdx->js后注入导出信息

    const insertCode = `export const toc = ${JSON.stringify(toc, null, 2)}`

    tree.children.push({
      type: 'mdxjsEsm',
      value: insertCode,
      data: {
        estree: parse(insertCode, {
          ecmaVersion: 2020,
          sourceType: 'module',
        }) as unknown as Program,
      },
    })
  }
}
