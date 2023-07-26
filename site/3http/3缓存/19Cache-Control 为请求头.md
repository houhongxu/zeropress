# Cache-Control 为请求头

1. cache-control: no-cache 作为请求头以及响应头时分别是什么意思

   - 请求头时：每次都要请求最新资源
   - 响应头时：控制缓存策略，每次请求都验证**新鲜度**
     > 注意：响应头时如果需要每次请求应该使用 no-store

2. cache-control: no-cache 与 cache-control: max-age=0 作为请求头有何区别

   - no-cache：每次都请求最新资源
   - max-age=0：每次都验证新鲜度

3. 浏览器中的正常重新加载与硬性重新加载，分别会如何发送请求

   - 正常重新加载：实际上的实现是每次发送请求携带 Cache-Control: max-age=0 头部
   - 硬性重新加载：实际上的实现是每次发送请求携带 Cache-Control: no-cache 头部
