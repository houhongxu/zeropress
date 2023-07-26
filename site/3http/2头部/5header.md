# header

1. HTTP 响应头中 Cache-Control，有时为首字母大写，有时为小写，哪个是正确写法

   不区分大小写

2. 什么是伪头

   在 HTTP/2 协议中，以 : 开头，被称为伪头，他们用于传递 HTTP 报文初识行数据

3. 如何自定义 HTTP 头部

   - 避免和标准的 header 重名，用 - 连接单词。
   - 需要配置 proxy 服务器和目标服务器接收该自定义 header
     `curl --head`

4. 观察自己常逛网站的 HTTP 请求头与响应头

   山月博客有伪头

5. 通过 curl 与 httpbin 测试请求头部

   ![z-5-1](/img/http/2/z-5-1.jpg)
