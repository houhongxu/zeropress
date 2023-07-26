# HTTP 报文

1. 什么是 \r\n

   - \r CR (Carriage Return)
   - \n LF (Line Feed)
   - \r\n CR + LF

   > windows 中(偷懒)用 CRLF 作换行符， CRLF 又叫做 EOL(End of Line), http 报文每行也由\r\n 换行

2. 如何找到文件中的 \r\n

   - vim
   - cat -e
   - bat -Ap

3. HTTP 报文格式是什么样的

   - 首部
   - 空行 CRLF
   - 主体

4. 我们如何查看某次请求的 HTTP 报文

   通过 `curl -v 网址` 可以获得完整的响应报文以及响应体。
