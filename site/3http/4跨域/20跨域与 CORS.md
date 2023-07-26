# 跨域与 CORS

1. 什么是跨域

   发送请求时，协议，域名，端口，三者有一个不一样，就是跨域

2. 使用 CORS 如何解决跨域

   配置服务端响应头 Access-Control-Allow-Origin：

   - 配置为 \* 允许所有域名的资源进行访问
   - 配置为某域名，允许该域名的资源进行访问

3. CORS 全称是什么

   跨资源共享（CrossOriginResourceSharing）
