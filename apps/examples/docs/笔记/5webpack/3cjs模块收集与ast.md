# cjs 模块收集与 ast

1. 了解 AST 概念

   1. 通过解析 parser 生成 AST
   2. code(词法分析)=>Token(语法分析)=>AST
   3. Token 可以进行代码检查，语法高亮等

2. 在 AST Explore 尝试 Javascript/CSS 解析，并观察其语法树

   ![z-3-1](/img/note/5/z-3-1.jpg)
   如图是 require 的语法树，4.会用到

3. 如何根据入口文件搜索出所有需要打包的模块

   code 解析成 AST 后，以入口文件作为根节点开始深度优先遍历，通过 AST 找到具有 require 函数的节点,构建**webpack_modules** 数组

4. 如何模拟实现运行时代码的生成，实现 mini-webpack

   [示例仓库](https://github.com/903040380/poor-webpack)

5. 如何去除代码中的所有 console.log

   见[示例仓库](https://github.com/903040380/poor-webpack)
