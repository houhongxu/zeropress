import path from 'path'
import fse from 'fs-extra'
import { build, Plugin } from 'esbuild'
import resolve from 'resolve'

// 解决react多实例问题，手动预打包react相关代码
// vite打包使用rollup，预构建使用esbuild，而这里打包使用esbuld更快

const PRE_BUNDLE_DIR = 'vendors'

const normalizeVendorFilename = (fileName: string) =>
  fileName.replace(/\//g, '_')

async function preBundle(dependencies: string[]) {
  const normalizedDependenceMap = dependencies.reduce((pre, cur) => {
    pre[normalizeVendorFilename(cur)] = cur
    return pre
  }, {} as Record<string, string>)

  const outputAbsolutePath = path.join(process.cwd(), PRE_BUNDLE_DIR)

  // 每次打包clear
  if (await fse.pathExists(outputAbsolutePath)) {
    await fse.remove(outputAbsolutePath)
  }

  // let count = 0
  const plugin: Plugin = {
    name: 'hhxpress:pre-bundle',
    setup(build) {
      build.onResolve({ filter: /^[\w@][^:]/ }, async (args) => {
        if (!dependencies.includes(args.path)) {
          return
        }

        // TODO 解析路径，为什么用resolve库
        const isEntry = !args.importer
        // const t = require.resolve(args.path, {
        //   paths: [args.importer || process.cwd()],
        // })
        const resolved = resolve.sync(args.path, {
          basedir: args.importer || process.cwd(),
        })

        // console.log(count, '---node:', t)
        // console.log(count++, '===resolved:', resolved)

        return isEntry
          ? { path: resolved, namespace: 'dependence' }
          : { path: resolved }
      })
      build.onLoad({ filter: /.*/, namespace: 'dependence' }, async (args) => {
        const entryPath = args.path
        const res = require(entryPath)
        // 拿出所有的具名导出
        const specifiers = Object.keys(res)

        // 导出ESM格式的原本依赖导出的变量
        return {
          contents: `export {${specifiers.join(',')}} from "${entryPath}";
          export default require("${entryPath}")`,
          loader: 'js',
          resolveDir: process.cwd(),
        }
      })
    },
  }

  await build({
    entryPoints: normalizedDependenceMap, // 旧版写法 https://github.com/evanw/esbuild/blob/main/CHANGELOG.md#0171
    outdir: PRE_BUNDLE_DIR,
    bundle: true,
    minify: true,
    splitting: true,
    format: 'esm',
    platform: 'browser',
    // https://esbuild.github.io/plugins/#using-plugins
    plugins: [plugin],
  })
}

preBundle(['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime'])
