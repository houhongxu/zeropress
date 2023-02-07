"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPage = exports.bundle = exports.build = void 0;
const vite_1 = require("vite");
const constants_1 = require("./constants");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
/**
 * 构建
 */
async function build(root = process.cwd()) {
    // 打包代码，包括 client 端 + server 端
    const [clientBundle, serverBundle] = await bundle(root);
    // 引入 server-entry 产物 js
    const serverEntryPath = path_1.default.join(root, '.temp', 'ssr-entry.js');
    const { renderInServer } = require(serverEntryPath);
    // 服务端渲染，产出
    await renderPage(renderInServer, root, clientBundle);
}
exports.build = build;
/**
 * 打包双端代码
 */
async function bundle(root) {
    // 获取打包配置
    const resolveViteConfig = (isServer) => ({
        mode: 'production',
        root,
        // 注意加上这个插件，自动注入 import React from 'react'，避免 React is not defined 的错误
        plugins: [(0, plugin_react_1.default)()],
        build: {
            ssr: isServer,
            outDir: isServer ? '.temp' : 'build',
            rollupOptions: {
                input: isServer ? constants_1.SERVER_ENTRY_PATH : constants_1.CLIENT_ENTRY_PATH,
                output: {
                    format: isServer ? 'cjs' : 'esm',
                },
            },
        },
    });
    console.log(`Building client + server bundles... / 构建客户端与服务端中。。。`);
    try {
        // 获取双端产物，并发速度更快
        const [clientBundle, serverBundle] = await Promise.all([
            // client
            (0, vite_1.build)(resolveViteConfig(false)),
            // server
            (0, vite_1.build)(resolveViteConfig(true)),
        ]);
        return [clientBundle, serverBundle];
    }
    catch (e) {
        console.log(e);
    }
}
exports.bundle = bundle;
/**
 * 渲染服务端产物
 */
async function renderPage(render, root, clientBundle) {
    //
    const clientChunk = clientBundle.output.find((chunk) => chunk.type === 'chunk' && chunk.isEntry);
    console.log(`Rendering page in server side... / 服务端渲染页面中。。。`);
    // 获取服务端的react组件字符串
    const appHtml = render();
    // 服务端html模板
    const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>server</title>
    <meta name="description" content="xxx">
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/${clientChunk?.fileName}"></script>
  </body>
</html>`.trim();
    await fs_extra_1.default.ensureDir(path_1.default.join(root, 'build'));
    // 生成服务端html入口
    await fs_extra_1.default.writeFile(path_1.default.join(root, 'build/index.html'), html);
    // 移除服务端产物，因为已经写入服务端html，客户端产物留下进行访问时同构
    await fs_extra_1.default.remove(path_1.default.join(root, '.temp'));
}
exports.renderPage = renderPage;
