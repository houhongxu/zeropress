import { parse } from 'acorn'
import GithubSlugger from 'github-slugger'
import { Root } from 'mdast'
import { Program } from 'mdast-util-mdxjs-esm/lib'
import { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

interface TocItem {
  id: string
  text: string
  depth: number
}

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
interface ChildNode {
  type: 'link' | 'text' | 'inlineCode'
  value: string
  children?: ChildNode[]
}

export const remarkPluginMdxToc: Plugin<[], Root> = () => {
  return (tree) => {
    const toc: TocItem[] = []

    let title = ''

    // https://github.com/syntax-tree/unist-util-visit#use
    // https://github.com/syntax-tree/mdast#heading
    visit(tree, 'heading', (node) => {
      if (!node.depth || !node.children) {
        return
      }

      // 配置网站标题为文档标题
      if (node.depth === 1) {
        title = (node.children[0] as ChildNode).value
      }

      if (node.depth > 1 && node.depth < 5) {
        // 感觉标题节点类型分别处理
        const children = node.children as ChildNode[]
        const headText = children
          .map((child) => {
            switch (child.type) {
              case 'link':
                return child.children?.map((c) => c.value).join('') || ''
              default:
                return child.value
            }
          })
          .join('')

        // 使用 rehype-slug 使用的生成id的库github-slugger https://github.com/rehypejs/rehype-slug
        const slugger = new GithubSlugger()
        const id = slugger.slug(headText)

        toc.push({
          id,
          text: headText,
          depth: node.depth,
        })
      }
    })

    const insertCode = `export const toc = ${JSON.stringify(toc, null, 2)};`

    tree.children.unshift({
      type: 'mdxjsEsm',
      value: '',
      data: {
        // acorn解析为esast节点 https://github.com/acornjs/acorn/tree/master/acorn/#interface
        estree: parse(insertCode, {
          ecmaVersion: 'latest',
          sourceType: 'module',
        }) as unknown as Program,
      },
    })

    if (title) {
      const insertedTitle = `export const title='${title}'`

      tree.children.push({
        type: 'mdxjsEsm',
        value: '',
        data: {
          estree: parse(insertedTitle, {
            ecmaVersion: 'latest',
            sourceType: 'module',
          }) as unknown as Program,
        },
      })
    }
  }
}
