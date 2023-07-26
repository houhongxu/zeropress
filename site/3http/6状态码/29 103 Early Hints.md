# 103 Early Hints

1. 103 状态码是什么意思

   是一个信息性 HTTP 状态代码，用于在最终响应之前发送一个初步的 HTTP 响应，可以让服务器在处理资源的同时发送部分关键资源

2. 103 状态码是如何提升性能的

   利用最终 http 返回之前的服务器时间帮助页面渲染子资源提升渲染速度，更适用于大型 ssr 项目

3. 找到有 103 状态码的网站

   shopify

```bash
curl -I 'https://www.shopify.com/' \
  -H 'sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"'\
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \-H 'sec-fetch-dest: document' \-H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-user: ?1' \
  --compressed
HTTP/2 103
link: <https://cdn.shopify.com/shopifycloud/brochure/assets/manifests/incentives_code_red/phase1_promo/announcement-banner-74644f9b9dda0b14ba53b632960adedfb20df12fe288a544b7d77cc33b835e46.css>; as=style; rel=preload

HTTP/2 200
date: Mon, 14 Nov 2022 09:35:02 GMT
content-type: text/html; charset=utf-8
vary: Accept-Encoding
accept-ch: Save-Data
link: <https://cdn.shopify.com/shopifycloud/brochure/assets/manifests/incentives_code_red/phase1_promo/announcement-banner-74644f9b9dda0b14ba53b632960adedfb20df12fe288a544b7d77cc33b835e46.css>; rel=preload; as=style
etag: W/"875495784ec2de7feef28096a5076a59"
cache-control: max-age=0, private, must-revalidate
set-cookie: _shopify_y=6aca5cb8-4428-4097-b343-9aeb2bffd194; domain=.shopify.com; path=/; expires=Tue, 14 Nov 2023 09:35:02 GMT; SameSite=Lax; secure
x-request-id: a1e46da9-7599-4694-997f-3442123a255c
x-runtime: 0.029396
strict-transport-security: max-age=15552000; includeSubDomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 1; mode=block; report=/xss-report?source%5Baction%5D=index&source%5Bapp%5D=Brochure&source%5Bcontroller%5D=home&source%5Bdomain%5D=www.shopify.com&source%5Bsection%5D=brochure&source%5Buuid%5D=a1e46da9-7599-4694-997f-3442123a255c
x-download-options: noopen
x-permitted-cross-domain-policies: none
content-security-policy-report-only: default-src 'self' https:; child-src 'self' https: data:; connect-src 'self' https: wss:; font-src 'self' https: data:; img-src 'self' https: data:; media-src 'self' https: data:; object-src 'self' https:; script-src 'self' https: 'unsafe-inline' 'unsafe-eval'; style-src 'self' https: 'unsafe-inline'; report-uri /csp-report?source%5Baction%5D=index&source%5Bapp%5D=Brochure&source%5Bcontroller%5D=home&source%5Bdomain%5D=www.shopify.com&source%5Bsection%5D=brochure&source%5Buuid%5D=a1e46da9-7599-4694-997f-3442123a255c
server-timing: processing;dur=32, socket_queue;dur=6.498, util;dur=0.0
x-dc: gcp-us-east1
content-encoding: gzip
cf-cache-status: BYPASS
set-cookie: _shopify_s=debde99a-84a0-471d-8e11-b37fa1bedef6; domain=.shopify.com; path=/; expires=Mon, 14 Nov 2022 10:05:02 GMT; SameSite=Lax; secure
set-cookie: _y=6aca5cb8-4428-4097-b343-9aeb2bffd194; domain=.shopify.com; path=/; expires=Tue, 14 Nov 2023 09:35:02 GMT; SameSite=Lax; secure
set-cookie: _s=debde99a-84a0-471d-8e11-b37fa1bedef6; domain=.shopify.com; path=/; expires=Mon, 14 Nov 2022 10:05:02 GMT; SameSite=Lax; secure
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=mA42%2BbLT22OhpJJJ1jl%2Bn6HAvDh9d1QoWhX%2B2CbNQFCE7moT9OW4q9OUm5kIEtszE02ZD5bfrvXuMDT6WbA1umELWX6Yw1Cy63UFmBZxSiV5Kqfwd7y36Pul3qo1vanckg%3D%3D"}],"group":"cf-nel","max_age":604800}
nel: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
server: cloudflare
cf-ray: 769ec135fe4c8a7b-NRT
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
server-timing: cfRequestDuration;dur=401.999712, earlyhints
```
