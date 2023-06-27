# cjs 与 esm

1. 什么是 esm/commonjs

   esm:

   - 是 ES 的模块规范，浏览器 node 都可运行

   - 静态导入，所以可以 tree shaking，减少 js 体积，编译阶段就进行导入和导出

   - 支持动态导入，执行到该行代码时才开始导入，异步加载（Promise）

   - 导出的值是引用

   cjs: -是 node 的模块规范，webpack 和 node 都可运行，单纯浏览器环境不可以

   - 动态导入，执行到该行代码时才开始导入，同步加载，加载完模块才会继续执行

   - 具有缓存，可以通过 require.cache 查看，加载过的模块会通过缓存加载

   - 导出的值是复制的值，类似 exports.a=a

2. 什么是 import(module)

   类似于 require 的动态导入，但是是异步加载（Promise）

3. 了解 skypack 和 jsdeliver 两个 npm 的 cdn 网站

   - [skypack](https://www.skypack.dev/)

   - [jsdeliver](https://www.jsdelivr.com/)
