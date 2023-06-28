# cjs 运行时分析

## 作业

1. webpack 运行时代码进行调试三遍并理解

   调试略

2. webpack 的模块加载器是如何实现的

   ![z-2-1](/img/note/5/z-2-1.jpg)
   首先定义全局缓存对象`__webpack_module_cache__`
   然后定义打包器函数`__webpack_require__(moduleId){}`
   函数中：
   首先根据 moduleId 读取全局缓存对象
   如果存在缓存，则直接返回缓存模块的 exports 对象
   如果不存在缓存，创建新的模块对象，首先根据 moduleId 放入缓存，然后赋值给局部模块对象，此时局部模块对象仅有 exports 属性
   然后根据 moduleId 读取全局模块数组，执行该模块函数并传入函数里的局部模块对象，拿到指定模块的 exports 值
   最后导出该模块的 exports 值

3. webpack 的运行时代码做了那些事情

   首先定义全局模块数组，将模块用带参数的函数包裹并根据 moduleId 放入数组的第一个位置后，第一个位置为入口模块 `__webpack_modules__`
   然后定义模块加载器，可以根据 moduleId 执行模块，并返回模块的 exports 值 `__webpack_require__`(moduleId){}
   最后执行模块加载器加载入口模块`__webpack_require__(0)`

4. CommonJS 中，如果不对 module 进行缓存有什么问题，即不实现以上的 `__webpack_module_cache__` 数据结构

   1. 避免模块反复生成
   2. 单例模式，每个模块只在第一次被引用时产出模块对象，之后的引用都是同一个对象。

5. 阅读 webpack 模块加载器代码，我们在 CommonJS 中使用 `module.exports` 与 `exports` 有何区别

   module.exports 是访问 module 的 exports 属性的值，exports 是该值的引用，即类似于`const exports=module.exports`

6. 如何理解 webpack 运行时代码最后是 `__webpack_require__(0)`

   ![z-2-2](/img/note/5/z-2-2.jpg)
   ![z-2-3](/img/note/5/z-2-3.jpg)
   执行打包后的 js 然后打印`__webpack_modules__`发现 0 的位置是空的
   所以其实 0 只是一个预留位置
   解释成是储存入口模块可能更容易理解
   且因为`__webpack_modules__`是根据文件的依赖关系进行深度优先遍历得来的数组，所以根节点即入口文件即 0 位置的模块
