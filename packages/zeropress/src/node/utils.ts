import { DEFAULT_USER_CONFIG } from './consts'
import fg, { Options } from 'fast-glob'

export async function globDocs(
  path = DEFAULT_USER_CONFIG.docs,
  options?: Options | undefined,
) {
  return await fg.glob('**/*.{jsx,tsx,md,mdx}', {
    ignore: ['node_modules/**', 'client/**', 'server/**'],
    cwd: path,
    deep: 3,
    ...options,
  })
}
