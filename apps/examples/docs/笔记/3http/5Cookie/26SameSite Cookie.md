# SameSite Cookie

1. SameSite 有哪些属性

   - None: 任何情况下都会向第三方网站请求发送 Cookie
   - Lax: 只有导航到第三方网站的 Get 链接会发送 Cookie。而跨域的图片 iframe、fetch 请求，form 表单都不会发送 Cookie
   - Strict: 任何情况下都不会向第三方网站请求发送 Cookie

2. 什么是 CSRF 攻击，如何通过 SameSite 避免 CSRF 攻击

   CSRF (Cross-site request forgery)，跨站请求伪造，又称为 one-click attack，顾名思义，通过恶意引导用户一次点击劫持 cookie 进行攻击
   如：在用户登录网站 a 并留存 cookie 的同时，访问了危险网站 b，b 则可以向 a 发送请求进行转账等危险操作

   SameSite 属性用于控制跨站点 Cookie 的发送权限，在其之前很容易因为 cookie 跨域发生 CSRF 安全问题，现在则通过配置 SameSite 为 Lax 来规避此问题，或者结合 Secure 属性 进行 https 的 cookie 跨域
