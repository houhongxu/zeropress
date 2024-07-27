# Cookie 初识

1. 服务器端如何配置携带浏览器的 Cookie

   通过 Set-Cookie 响应头进行配置

2. 浏览器发送 Cookie 时，应如何发送

   - 非跨域时，若服务器配置了 cookie，浏览器自动在 header 中携带
   - 跨域时，即使服务器配置了 cookie，浏览器也不会自动添加 cookie，需要在浏览器请求 api 配置 withCredentials，需要在服务端配置 cookie 的属性 sameSite 为 none 与 Secure 为 true，所以跨域 cookie 只支持 https

3. 通过 curl/httpbin 模拟发送 Cookie

```bash
  # 通过curl
  $ curl 'https://httpbin.org/cookies' -H 'cookie: a=3; b=4'
```
