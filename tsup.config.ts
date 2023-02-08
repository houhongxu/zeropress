import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: {
    cli: './src/node/cli.ts',
    index: './src/node/index.ts',
    dev: './src/node/dev.ts',
  },
  bundle: true,
  splitting: true,
  minify: process.env.NODE_ENV === 'production',
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true, // 注入兼容esm与cjs的polyfill
  clean: true,
  // 解决esm内使用require的问题
  // banner: {
  //   js: 'import { createRequire } from "module"; const require = createRequire(import.meta.url);',
  // },
})
