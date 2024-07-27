#!/usr/bin/env node

// 项目采用type module，所以使用import，vite即将弃用cjs api https://cn.vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated

// 本项目考虑兼容性尽量弃用api，为了避免使用vite的cjs api，比如配置类型使用UserConfig替换defineConfig

// esm
import('../lib/node/cli.js')
