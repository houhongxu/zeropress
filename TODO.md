# TODO

- [x] 跟进[pr-en](https://github.com/vitejs/vite/pull/15806#issuecomment-1926499802)
- [x] 深色切换有时闪屏，并且复制tab时会无限闪屏
- [x] 热更新hmr失效回退到page reload
- [x] 新增md重启dev
- [x] 图片使用编码格式，因为浏览器会将编码url自动解码，导致编码的图片会因为浏览器解码访问不到
- [x] npm包引入后虚拟模块在dev访问时会报错
- [ ] 滚动条样式不同平台统一
- [ ] 刷新页面闪屏
- [ ] toc热更新失效
- [ ] seo优化，a标签的href和sitemap

## 文件名符号

Windows: 禁用字符包括 <, >, :, ", /, \, |, ?, \*。
macOS: 主要禁用字符是 /。其他字符通常是可以使用的，但某些字符在实际使用时会被转换或处理以确保兼容性。

## 问题记录

预编译.vite/deps文件夹路径不对 deps_temp_adfa

http://localhost:5174/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8b1ce0a5

@/runtime导入路径是预编译路径

http://localhost:5174/node_modules/.vite/deps/@\_runtime.js?v=3f0483f4

import {Content, usePageData} from "/node_modules/.vite/deps/@\_runtime.js?v=3f0483f4";

inclue exclude的相对包，是否和root有关

server的root和静态资源服务public，root是zeropress就不显示图片

root: config.srcDir,
base: config.site.base 区别
