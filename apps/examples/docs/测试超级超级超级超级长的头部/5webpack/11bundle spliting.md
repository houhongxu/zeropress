# bundle spliting

1. 将示例一中的 common.js 抽出来进行单独打包
2. optimization.splitChunks 中 chunks、minChunks、minSize 各参数代表什么
3. 如果将示例一中的 common.js 在 index.js 中引用，即被 initial chunk 引用，打包会发生什么
4. 如果将示例二中的 lodash.js 在 index.js 中引用，即被 initial chunk 引用，打包会发生什么
