import { Root } from 'mdast'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import Slugger from 'github-slugger'
import { parse } from 'acorn'
import { MdxjsEsm } from 'mdast-util-mdxjs-esm'
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
    // 遍历标题节点
    visit(tree, 'heading', (node) => {
      // 深度到底或者没有子节点
      if (!node.depth || !node.children) {
        return
      }
      // 提取h2-h4
      if (node.depth > 1 && node.depth < 5) {
        // node.children 是一个数组，包含几种情况:
        // 1. 文本节点，如 '## title'
        // 结构如下:
        // {
        //   type: 'text',
        //   value: 'title'
        // }
        // 2. 链接节点，如 '## [title](/path)'
        // 结构如下:
        // {
        //   type: 'link',
        //   children: [
        //     {
        //       type: 'text',
        //       value: 'title'
        //     }
        //   ]
        // }
        // 3. 内联代码节点，如 '## `title`'
        // 结构如下:
        // {
        //   type: 'inlineCode',
        //   value: 'title'
        // }
        // 获取标题文本
        const originText = (node.children as ChildNode[])
          .map((child) => {
            // 单独处理link
            switch (child.type) {
              case 'link':
                return child.children?.map((c) => c.value).join('') || ''
              default:
                return child.value
            }
          })
          .join('')

        // 获取独一无二的id
        const id = slugger.slug(originText)

        toc.push({
          id,
          text: originText,
          depth: node.depth,
        })
      }
    })

    // mdx->js后注入导出信息
    const insertCode = `export const toc = ${JSON.stringify(toc, null, 2)};`

    tree.children.push({
      type: 'mdxjsEsm',
      value: insertCode,
      data: {
        estree: parse(insertCode, {
          ecmaVersion: 2020,
          sourceType: 'module',
        }) as unknown as Program,
      },
    } as MdxjsEsm)
  }
}
