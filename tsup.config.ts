import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: ['src/node/cli.ts'],
  bundle: true,
  splitting: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true, // 注入兼容esm与cjs的polyfill
  clean: true,
})
