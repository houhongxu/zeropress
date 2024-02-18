import rollupPluginMdx from '@mdx-js/rollup'
import { ElementContent } from 'hast'
import rehypeAutolinkHeadings, {
  Options as RehypeAutolinkHeadingsOptions,
} from 'rehype-autolink-headings'
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export function createRollupPluginMdx() {
  return rollupPluginMdx({
    remarkPlugins: [
      remarkGfm, // github的md语法
      remarkFrontmatter, // md模块导出frontmatter变量
      remarkMdxFrontmatter, // mdx模块导出frontmatter变量
    ],
    rehypePlugins: [
      rehypeSlug, // 自动添加h1-h6的id
      [
        rehypeAutolinkHeadings, // 自动添加h1-h6的<a><a/>锚点，href是id
        {
          // 用hast定义锚点内容元素 https://github.com/syntax-tree/hast#nodes
          content: {
            type: 'element',
            tagName: 'span',
            children: [{ type: 'text', value: '#' }],
            properties: {
              class: 'autolink-headings',
              style: 'margin-right: 4px;',
            },
          } as ElementContent,
        } as RehypeAutolinkHeadingsOptions,
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
        } as RehypePrettyCodeOptions,
      ],
    ],
  })
}
