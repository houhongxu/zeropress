// 路径常量，相对于dist文件夹

import path from 'path'

export const PACKAGE_ROOT_PATH = path.join(__dirname, '..')

export const DEFAULT_HTML_PATH = path.join(PACKAGE_ROOT_PATH, 'template.html')

export const RUNTIME_PATH = path.join(PACKAGE_ROOT_PATH, 'src', 'runtime')

export const CLIENT_ENTRY_PATH = path.join(RUNTIME_PATH, 'entry-client.tsx')

export const SERVER_ENTRY_PATH = path.join(RUNTIME_PATH, 'entry-server.tsx')

export const SUPPORT_CONFIG_FILE = ['config.ts', 'config.js']

export const MASK_SPLITTER = '!!ISLAND!!'

export const CLIENT_OUTPUT_DIR = 'build'
export const SERVER_OUTPUT_DIR = '.temp'

// 不通过vite打包，手动打包的react相关依赖
export const EXTERNALS = [
  'react',
  'react-dom',
  'react-dom/client',
  'react/jsx-runtime',
]

export const ISLAND_JSX_RUNTIME_PATH = RUNTIME_PATH

export const TS_REGEX = /(c|m)?tsx?$/

export const MD_REGEX = /\.mdx?$/

export const DEFAULT_THEME_PATH = path.join(RUNTIME_PATH, 'theme-default')
