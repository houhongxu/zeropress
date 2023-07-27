# 文件名中的 hash

1. 什么是 Long Term Cache，有何作用

   在服务器对响应头设置 cache-control 的值来达到最大化缓存时间，一般指一年时间或者两年时间

2. 为什么配置 output.filename 时不建议注入版本号

   因为会导致更新版本时所有文件名变化，当文件名变更时会重新进行缓存，那么更新版本会导致所有缓存失效，但是更新版本一般并不会更新所有文件

3. 为什么可以配置 Long Term Cache

   因为 webpack 打包时可以配置 contenthash,只改变改变内容的文件的 hash 值，新的文件会重新进行缓存，不会导致版本问题

4. 如何提升 webpack 编译时期计算 hash 的速度

   通过 output.hashFunction 属性,webpack5 已经支持直接配置’xxhash64‘
   [根据此方法对 umi 进行了优化](https://github.com/umijs/umi/pull/9168#event-7302069734)

5. 在 Node.js 中如何进行 hash 计算

   参考大佬的回答，是用 crypto 库
