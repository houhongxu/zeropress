# vite 的@fs

Vite 的请求路径种类
相对路径，相对于根目录的路径。如：`http://localhost/src/main.ts`
以 /@fs/ 开头 + 绝对路径，例如：`http://localhost/@fs/app/vite/packages/vite/dist/client/env.mjs`
其中 /app/vite/packages/vite/dist/client/env.mjs 为绝对路径，可以直接访问文件。

这两种不同路径种类的使用场景，其实很简单，就是看要访问的文件，是否在项目根目录中？

如果文件在 Vite root 根目录中，则直接使用相对路径

但如果在 Vite root 根目录外，相对路径就需要使用 ../ 这种，这种形式不能马上看出文件的位置，因此直接使用绝对路径更好，但是需要跟相对路径做区分，因此用 /@fs/ 开头 + 绝对路径的方式

支持绝对路径访问文件是有风险的，坏人可以通过输入其他路径，获取到整个机器的所有文件了（只要能知道路径），可能那些文件里面就有敏感信息，因此非常危险。

## 来源

[知乎](https://zhuanlan.zhihu.com/p/596902917vite)
