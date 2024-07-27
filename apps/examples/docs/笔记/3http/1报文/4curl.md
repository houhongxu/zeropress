# curl

1. curl/httpie 如何发送一个 GET 请求

   `curl ifconfig.me`

2. curl/httpie 如何发送 JSON 数据给服务器端

   `curl https://httpbin.org/post --request POST --header "content-type:application/json" --data name=hhx`

3. curl/httpie 如何发送 FORM 数据给服务器端

   `curl https://httpbin.org/post --request POST --data name=hhx`

4. curl/httpie 如何追踪重定向路径

   `curl zhihu.com --location`

5. curl/httpie 如何仅返回 Response Header

   `curl baidu.com --head`

   > 补充，第五个，应为 `curl --head` 或者 `http HEAD <url>`，此时发送 HEAD 请求。如果仅仅是只打印 Response Header 的话，使用 `http --head` 也可以。
