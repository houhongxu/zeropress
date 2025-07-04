import { defineConfig } from 'tsup'

// 多入口打包，tsup不打包node_modules
export default defineConfig([
  {
    entry: ['./src/node/cli.ts', './src/index.ts'],
    dts: true,
    // 兼容esm与cjs的全局变量如__dirname
    shims: true,
    // 兼容shims，让shims不分割为chunk影响__dirname等路径
    splitting: false,
    external: ['virtual:routes', 'virtual:config'],
    outDir: './lib',
    clean: true,
    sourcemap: true,
    minify: process.env.NODE_ENV === 'production',
  },
  {
    entry: ['./src/runtime/lazyWithPreload.tsx'],
    dts: false,
    minify: false,
    outDir: 'lib/runtime',
  },
])
