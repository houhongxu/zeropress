# module/chunk/asset

## moduleType

- javascript/auto：我们在项目内引入的 ESM/CommonJS 的模块 (ESM 模块要看 loader 是如何处理的，也有可能是 javascript/esm 类型，不必深究)
- javascript/esm：我们在项目内引入的 ESM Package，比如 html-to-image，在其 package.json 中含有 module 字段
- javascript/dynamic：require('./src' + xxx)，动态加载
- asset：图片等资源
- asset/resource：图片等资源
- runtime：webpack_require 下挂载的诸多方法

## chunk

一个 chunk 包含以下属性

- initial：是否是 initial chunk，即首次 HTML 必须加载的模块
- entry：是否是 entry chunk
- hash：chunkhash

1. 分析你们项目中打包后 stats 对象的 module/chunk/asset

   分析

2. contenthash 与 chunkhash 有何区别

   - chunkhash：对应 chunk 的 hash
   - contenthash：对应 chunk 中每个 content 的 hash，比如一个 chunk 中既包含 js，又包含 css 时

3. 什么是 Concatenated Module

   将多个模块打包为 webpack 的一个模块

4. 什么是 initial chunk

   首次 HTML 必须加载的模块

5. output.filename 与 output.chunkFilename 的区别是什么

   - filename：initial chunk 的文件名
   - chunkFilename：非 initial chunk 的文件名
