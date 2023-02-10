import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import type { Element, Root } from 'hast'

// <pre><code class=\\"language-js\\">console.log(123);</code></pre>
// 通过插件preWapper转换上方为下方
// <div class=\\"language-js\\">
// <span class=\\"lang\\">js</span>
// <pre><code class=\\"\\">console.log(123);</code></pre>
// </div>

/**
 * 将md代码块生成的html-dom转换有wrapper的结构
 */
export const rehypePluginPreWrapper: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // 找到 pre 元素
      if (
        node.tagName === 'pre' &&
        node.children[0]?.type === 'element' &&
        node.children[0].tagName === 'code' &&
        !node.data?.isVisited
      ) {
        const codeNode = node.children[0]
        const codeClassName = codeNode.properties?.className?.toString() ?? ''
        const lang = codeClassName.split('-')[1]

        // 保存pre
        const clonedNode: Element = {
          type: 'element',
          tagName: 'pre',
          children: node.children,
          data: {
            isVisited: true, // 自己打的tag防止无限向下找到pre元素
          },
        }

        // 转换pre为wrapper元素div
        node.tagName = 'div'
        node.properties = node.properties ?? {}
        node.properties.className = codeClassName

        node.children = [
          // 生成span
          {
            type: 'element',
            tagName: 'span',
            properties: { className: 'lang' },
            children: [{ type: 'text', value: lang }],
          },
          // 拷贝pre
          clonedNode,
        ]

        // 删除code的className
        codeNode.properties.className = ''
      }
    })
  }
}
