import { remarkMdxToc } from './remarkMdxToc'
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
import { Plugin } from 'vite'

/**
 * 支持mdx的热更新与Gfm、Frontmatter、Toc等功能
 */
export function vitePluginMdx(): Plugin {
  return {
    enforce: 'pre', //兼容@mdx-js/rollup与@vitejs/plugin-react https://github.com/vitejs/@vitejs/plugin-react/issues/38，需要在@vitejs/plugin-react前，将mdx编译为js后接入@vitejs/plugin-react的react-refresh
    apply: 'serve',
    // 提供hmr自定义事件给client
    async handleHotUpdate(ctx) {
      // https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
      if (/\.mdx?/.test(ctx.file)) {
        console.log('自定义hmr事件:', ctx.file)

        ctx.server.ws.send({
          type: 'custom',
          event: 'mdx?-update',
        })
      }
    },
    ...rollupPluginMdx({
      remarkPlugins: [
        remarkGfm, // github的md语法
        remarkFrontmatter, // md模块导出frontmatter变量
        remarkMdxFrontmatter, // mdx模块导出frontmatter变量
        remarkMdxToc,
      ],
      rehypePlugins: [
        rehypeSlug, // 自动添加h1-h6的id
        [
          rehypeAutolinkHeadings, // 自动添加h1-h6的<a><a/>锚点，href是id
          {
            // 用hast定义锚点内容元素 https://github.com/syntax-tree/hast#nodes
            properties: {
              class: 'autolink-headings',
            },
            content: {
              type: 'element',
              tagName: 'span',
              properties: {
                style: 'margin-right: 4px;',
              },
              children: [{ type: 'text', value: '#' }],
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
    }),
  }
}
