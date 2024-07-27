import { Plugin } from 'vite'

/**
 * 将frontmatter转换为满足react-refresh规则
 */
export function vitePluginTransformFrontmatter(): Plugin {
  const isMdx = (file: string) => /\.mdx?/.test(file)

  return {
    name: 'vitePluginTransformFrontmatter',
    enforce: 'post',
    transform(code, id) {
      if (isMdx(id)) {
        code = code.replace('export const frontmatter', 'const frontmatter')
        code += `\n export const GetFrontMatter = () => frontmatter`
        return { code }
      }
    },
  }
}
