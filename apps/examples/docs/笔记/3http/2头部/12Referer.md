# Referer

1. Referer 请求头有那些使用场景

   Referer 请求头指当前请求页面的来源地址

   - 推广流量地址
   - 防盗链与避免防盗链

2. 图片防盗链的技术原理是什么

   判断 Referer 记录的域名是否为自己服务器

3. 图片防盗链图片为何直接在浏览器新标签页手动输入地址可以打开

   因为不发送 Referer 请求头即可避免防盗链

4. 你见过那些添加了防盗链的网站

   码云

5. 如何防止防盗链

   不发送 Referer 请求头

   - 浏览器:Referrer-Policy: no-referrer
   - HTML:

```HTML
   <meta name="referrer" content="no-referrer" />
```
