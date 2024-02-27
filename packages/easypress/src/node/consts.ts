import path from 'path'

/**
 * 以产物lib文件夹内入口cli.js为基准
 */
export const ROOT_PATH = path.join(__dirname, '..', '..')

export const SRC_PATH = path.join(ROOT_PATH, './src')

export const RUNTIME_PATH = path.join(SRC_PATH, './runtime')

export const CLIENT_ENTRY_PATH = path.join(
  RUNTIME_PATH,
  './client/client-entry.tsx',
)

export const SERVER_ENTRY_PATH = path.join(
  RUNTIME_PATH,
  './server/server-entry.tsx',
)

export const SERVER_OUT_PATH = './.easypress'

export const CLIENT_OUT_PATH = './dist'

export const HTML_PATH = path.join(ROOT_PATH, './index.html')

export const CONFIG_OPTIONS = ['easypress.config.ts', 'easypress.config.js']
