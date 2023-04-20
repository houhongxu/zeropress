"use strict";
// 读取模板html返回给浏览器并支持热更新 https://github.com/vitejs/vite/blob/main/packages/vite/src/node/server/middlewares/indexHtml.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.vitePluginIndexHtml = void 0;
const promises_1 = require("fs/promises");
const constants_1 = require("../constants");
function vitePluginIndexHtml() {
    return {
        name: 'vite-plugin-index-html',
        apply: 'serve',
        // 插入入口 script 标签
        transformIndexHtml(html) {
            console.log(constants_1.CLIENT_ENTRY_PATH);
            return {
                html,
                tags: [
                    {
                        tag: 'script',
                        attrs: {
                            type: 'module',
                            src: `/@fs${constants_1.CLIENT_ENTRY_PATH}`, // 根路径以外的路径使用/@fs+绝对路径的方式，是因为服务器安全问题
                        },
                        injectTo: 'body',
                    },
                ],
            };
        },
        configureServer(server) {
            // return的函数会在内部中间件处理完后调用
            return () => {
                // 在中间件中返回读取到的html模板
                server.middlewares.use(async (req, res, next) => {
                    try {
                        let html = await (0, promises_1.readFile)(constants_1.DEFAULT_HTML_PATH, 'utf-8');
                        // 应用 Vite 内建 HTML 转换来支持边界到模板html的热更新，多了一行 <script type="module" src="/@vite/client"></script>
                        html = await server.transformIndexHtml(req.url, html, req.originalUrl);
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        res.end(html);
                    }
                    catch (e) {
                        return next(e);
                    }
                });
            };
        },
    };
}
exports.vitePluginIndexHtml = vitePluginIndexHtml;
