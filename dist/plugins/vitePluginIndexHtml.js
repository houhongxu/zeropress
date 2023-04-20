"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vitePluginIndexHtml = void 0;
const fs_1 = require("fs");
function vitePluginIndexHtml() {
    return {
        name: 'vite-plugin-index-html',
        configureServer(server) {
            // return的函数会在内部中间件处理完后调用
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let html = await (0, fs_1.readFile)('');
                });
            };
        },
    };
}
exports.vitePluginIndexHtml = vitePluginIndexHtml;
