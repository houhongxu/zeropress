import pluginMdx from '@mdx-js/rollup'
import type { Plugin } from 'vite'
import remarkPluginGFM from 'remark-gfm'
import rehypePluginAutolinkHeadings from 'rehype-autolink-headings'
import rehypePluginSlug from 'rehype-slug'
import remarkPluginMDXFrontMatter from 'remark-mdx-frontmatter'
import remarkPluginFrontmatter from 'remark-frontmatter'

export function rollupPluginMdx() {
  return pluginMdx({
    remarkPlugins: [
      // 渲染链接列表下划线表格等
      remarkPluginGFM,
      // 解析md元信息导出成变量
      remarkPluginFrontmatter,
      // name增加包裹对象名,title=>frontmatter:{title:'xxx'}
      [remarkPluginMDXFrontMatter, { name: 'frontmatter' }],
    ],
    // 标题增加锚点
    rehypePlugins: [
      rehypePluginSlug,
      [
        rehypePluginAutolinkHeadings,
        {
          properties: {
            class: 'header-anchor',
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
    ],
  }) as unknown as Plugin
}
