import { Root, Text } from 'hast'
import { Plugin } from 'unified'
import shiki from 'shiki'
import { visit } from 'unist-util-visit'
import { fromHtml } from 'hast-util-from-html'

interface Options {
  highlighter: shiki.Highlighter
}

export const rehypePluginShiki: Plugin<[Options], Root> = ({ highlighter }) => {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // 找到 pre 元素
      if (
        node.tagName === 'pre' &&
        node.children[0]?.type === 'element' &&
        node.children[0].tagName === 'code'
      ) {
        const codeNode = node.children[0]
        const codeContent = (codeNode.children[0] as Text).value
        const codeClassName = codeNode.properties?.className?.toString() ?? ''
        const lang = codeClassName.split('-')[1]
        if (!lang) {
          return
        }

        // 获取高亮后的html
        const highlightedCode = highlighter.codeToHtml(codeContent, {
          lang,
        })

        // 高亮后的html转高亮后的ast
        const fragmentAst = fromHtml(highlightedCode, { fragment: true })

        // 替换为高亮后的ast
        parent.children.splice(index, 1, ...fragmentAst.children)
      }
    })
  }
}
