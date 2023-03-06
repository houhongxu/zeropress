import { unified } from 'unified'
import { describe, test, expect } from 'vitest'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { rehypePluginPreWrapper } from '../vitePlugins/mdx/rehypePlugins/preWrapper'
import shiki from 'shiki'
import { rehypePluginShiki } from '../vitePlugins/mdx/rehypePlugins/shiki'
import remarkMdx from 'remark-mdx'
import { remarkPluginToc } from '../vitePlugins/mdx/remarkPlugins/toc'
import remarkStringify from 'remark-stringify'

describe('Markdown compile cases', async () => {
  // 初始化 processor
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypePluginPreWrapper)
    .use(rehypePluginShiki, {
      highlighter: await shiki.getHighlighter({ theme: 'github-dark' }),
    })

  test('Compile title', async () => {
    const mdContent = '# 123'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot('"<h1>123</h1>"')
  })

  test('Compile code', async () => {
    const mdContent = 'I am using `Island.js`'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot(
      '"<p>I am using <code>Island.js</code></p>"'
    )
  })

  // <pre><code class=\\"language-js\\">console.log(123);</code></pre>
  // 通过插件preWapper转换上方为下方
  // <div class=\\"language-js\\">
  // <span class=\\"lang\\">js</span>
  // <pre><code class=\\"\\">console.log(123);</code></pre>
  // </div>
  test('Compile code block', async () => {
    const mdContent = '```js\nconsole.log(123);\n```'
    const result = processor.processSync(mdContent)
    expect(result.value).toMatchInlineSnapshot(`
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre class=\\"shiki github-dark\\" style=\\"background-color: #24292e\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #E1E4E8\\">console.</span><span style=\\"color: #B392F0\\">log</span><span style=\\"color: #E1E4E8\\">(</span><span style=\\"color: #79B8FF\\">123</span><span style=\\"color: #E1E4E8\\">);</span></span>
      <span class=\\"line\\"></span></code></pre></div>"
    `)
  })

  test('Compile TOC', async () => {
    const remarkProcessor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkPluginToc)
      .use(remarkStringify)

    const mdContent = '## title xxx [link](/path)'
    const result = remarkProcessor.processSync(mdContent)
    expect(
      result.value.toString().replace(mdContent, '')
    ).toMatchInlineSnapshot(`
      "

      export const toc = [
        {
          \\"id\\": \\"title-xxx-link\\",
          \\"text\\": \\"title xxx link\\",
          \\"depth\\": 2
        }
      ]
      "
    `)
  })
})
