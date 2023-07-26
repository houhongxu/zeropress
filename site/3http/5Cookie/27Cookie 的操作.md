# Cookie 的操作

1. 如何通过 Javascript 添加 Cookie

   `document.cookie = 'b=4; max-age=100'`

2. 如何通过 Javascript 删除 Cookie

   将 cookie 过期时间修改为过去
   `document.cookie = 'a=3; max-age=-1;'`

3. 如何通过 CookieStore API 增删改查 Cookie

```js
// 增
document.cookie = 'a=1'
// 删
cookieStore.delete('a')
// 改
cookieStore.set('a', '2')
// 查
cookieStore.get('a')
cookieStore.getAll()
```
