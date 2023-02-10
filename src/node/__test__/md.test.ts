import { unified } from 'unified'
import { describe, test, expect } from 'vitest'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { rehypePluginPreWrapper } from '../../node/vite-plugin/mdx/rehypePlugins/preWrapper'
import shiki from 'shiki'
import { rehypePluginShiki } from '../../node/vite-plugin/mdx/rehypePlugins/shiki'

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
      "<div class=\\"language-js\\"><span class=\\"lang\\">js</span><pre class=\\"shiki github-light\\" style=\\"background-color: #fff\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #24292E\\">console.</span><span style=\\"color: #6F42C1\\">log</span><span style=\\"color: #24292E\\">(</span><span style=\\"color: #005CC5\\">123</span><span style=\\"color: #24292E\\">);</span></span>
      <span class=\\"line\\"></span></code></pre></div>"
    `)
  })
})
