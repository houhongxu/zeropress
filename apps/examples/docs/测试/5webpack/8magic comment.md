# magic comment

1. 在 webpack 中有哪些魔法注释

   - webpackIgnore：设置为 true 时，禁用动态导入解析。

   - webpackChunkName: 新 chunk 的名称。

   - webpackMode：可以指定以不同的模式解析动态导入。

   - webpackPrefetch：告诉浏览器将来可能需要该资源来进行某些导航跳转。

   - webpackPreload：告诉浏览器在当前导航期间可能需要该资源。

   - webpackInclude：在导入解析（import resolution）过程中，用于匹配的正则表达式。只有匹配到的模块才会被打包。

   - webpackExclude：在导入解析（import resolution）过程中，用于匹配的正则表达式。所有匹配到的模块都不会被打包。

   - webpackExports: 告知 webpack 只构建指定出口的动态 import() 模块。

2. 在 webpack 中如何实现 prefetch 的

   配置`/* webpackPrefetch: true */`后，webpack 运行时，会生成`<link ref='prefetch'>`标签并放入 dom 中，浏览器会开始预加载资源

3. 阅读 prefetch 后的运行时代码进行理解

   见[代码中的注释](https://github.com/903040380/Xwebpack/tree/master/code-spliting/example/prefetch)

4. 补充关于 preload 的问题

   preload chunk 会在父 chunk 加载时，以并行方式开始加载。
   prefetch chunk 会在父 chunk 加载结束后开始加载。
   所以，需要在 sumjs 里再次 preload 导入 add 才产生 preload，即**只能加载 chunk 的 chunk**
