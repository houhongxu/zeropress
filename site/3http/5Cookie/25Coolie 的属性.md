# Cookie 的属性

1. Cookie 有哪些属性

   - Domain：为 Cookie 指定的域名
   - Path：为 Cookie 指定的路径
   - Expire/MaxAge：Cookie 在浏览器上的缓存时间
   - HttpOnly：无法通过 Javascript 操作 Cookie，但在浏览器控制台中可以看到该值
   - Secure：仅能通过 HTTPS 协议传递
   - SameSite：跨站点 Cookie 发送策略 (跨站点与跨域略有不同)

2. Cookie HttpOnly 是什么意思

   禁止通过 js 获取 cookie
