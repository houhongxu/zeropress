# hash 的增强

1. 理解 deterministic chunkIds/moduleIds，以及什么情况下 id 会发生变更

   当模块加载顺序发生改变，模块顺序会发生改变，moduleIds 随之改变，而同时`__webpack_require__.u`读取到的 chunkId 随 moduleIds 改变，即 chunkIds 改变

2. 如有余力，阅读源码查看 deterministic 在 webpack 的内部实现

   根据大佬回答，只要模块的路径和文件名不做更改，那么 deterministic 后的 hash 值就是稳定的

3. 理解 runtimeChunk 选项，阅读其源码，理解它是如何运行代码的

   ![z-9-1](/img/note/5/z-9-1.jpg)

4. 阅读常见的社区以及自己公司的脚手架代码，观察是否配置了以上优化选项，如果没有，考虑是否可贡献代码

   [umi 已提交 pr，正在修改中](https://github.com/umijs/umi/pull/9541)
