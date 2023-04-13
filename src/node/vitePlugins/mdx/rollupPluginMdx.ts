import pluginMdx from '@mdx-js/rollup'
import type { Plugin } from 'vite'
import remarkPluginGFM from 'remark-gfm'
import rehypePluginAutolinkHeadings from 'rehype-autolink-headings'
import rehypePluginSlug from 'rehype-slug'
import remarkPluginMDXFrontMatter from 'remark-mdx-frontmatter'
import remarkPluginFrontmatter from 'remark-frontmatter'
import { rehypePluginPreWrapper } from './rehypePlugins/preWrapper'
import { rehypePluginShiki } from './rehypePlugins/shiki'
import shiki from 'shiki'
import { remarkPluginToc } from './remarkPlugins/toc'

export async function rollupPluginMdx() {
  return pluginMdx({
    remarkPlugins: [
      // 渲染链接列表下划线表格等github风格md
      remarkPluginGFM,
      // 解析md元信息导出成变量
      remarkPluginFrontmatter,
      // 解析mdx元信息导出成变量，name增加元信息包裹对象名,title=>frontmatter:{title:'xxx'}
      [remarkPluginMDXFrontMatter, { name: 'frontmatter' }],
      // 提取toc并导出
      remarkPluginToc,
    ],
    rehypePlugins: [
      // 标题增加id，github-slugger风格id
      rehypePluginSlug,
      // 标题增加对应id的锚点
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
      rehypePluginPreWrapper,
      [
        rehypePluginShiki,
        {
          highlighter: await shiki.getHighlighter({ theme: 'github-dark' }),
        },
      ],
    ],
  }) as unknown as Plugin
}
