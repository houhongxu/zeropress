import { PageData } from '@/shared/types'
import { parse } from 'acorn'
import { Program } from 'estree'
import Slugger from 'github-slugger'
import { Root } from 'mdast'
import { MdxjsEsm } from 'mdast-util-mdxjs-esm'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

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
//   children: [{
//     type: 'text',
//     value: 'title'
//   }]
// }
// 3. 内联代码节点，如 '## `title`'
// 结构如下:
// {
//   type: 'inlineCode',
//   value: 'title'
// }

interface ChildNode {
  type: 'link' | 'text' | 'inlineCode'
  value: string
  children?: ChildNode[]
}

// 导出mdx toc 对象，并使用slug id对应rehypeSlug
export const remarkMdxToc: Plugin<[], Root> = () => {
  return function (tree) {
    const toc: PageData['toc'] = []

    // 遍历mdast tree的heading节点
    visit(tree, 'heading', (node) => {
      // h2 - h6
      if (node.depth > 1 && node.depth < 8) {
        const children = node.children as ChildNode[]

        const headText = children
          .map((child) => {
            switch (child.type) {
              case 'link':
                return (
                  child.children?.map((child) => child.value).join('') || ''
                )
              default:
                return child.value
            }
          })
          .join('')

        // 每次生成新实例，避免单一实例生成多次id产生后缀-1,-2等
        const slugger = new Slugger()
        const id = slugger.slug(headText)

        toc.push({
          id,
          text: headText,
          depth: node.depth,
        })
      }
    })

    // GetToc为了符合react-refresh规则
    const template = `export const GetToc = () => ${JSON.stringify(toc, null, 2)};`

    // acorn解析template为esast节点，acorn类型不准确，所以需要用estree官方类型 https://github.com/acornjs/acorn/tree/master/acorn/#interface
    const estree = parse(template, {
      ecmaVersion: 'latest',
      sourceType: 'module',
    }) as unknown as Program

    // 组成mdast节点 https://github.com/syntax-tree/mdast-util-mdxjs-esm#syntax-tree
    const mdastNode: MdxjsEsm = {
      type: 'mdxjsEsm',
      value: '',
      data: {
        estree,
      },
    }

    // 放入mdast tree
    tree.children.unshift(mdastNode)
  }
}
