"use strict";
// 对客户端与服务端同时打包
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bundle = exports.build = void 0;
const vite_1 = require("vite");
const constants_1 = require("./constants");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = require("fs-extra");
async function build(root) {
    const [clientBundle] = await bundle(root);
    // 提前服务端产物的渲染函数
    const SERVER_BUNDLE_PATH = path_1.default.join(root, '.temp', 'server-entry.js');
    const { renderInServer } = require(SERVER_BUNDLE_PATH);
    await renderPage(renderInServer, root, clientBundle);
}
exports.build = build;
/**
 * 客户端与服务端打包
 */
async function bundle(root) {
    // 配置文件
    const resolveViteConfig = (isServer) => ({
        root,
        mode: 'production',
        // plugins: [vitePluginReact()],
        build: {
            ssr: isServer,
            outDir: isServer ? '.temp' : 'build',
            rollupOptions: {
                input: isServer ? constants_1.SERVER_ENTRY_PATH : constants_1.CLIENT_ENTRY_PATH,
                output: {
                    format: isServer ? 'cjs' : 'esm', // TODO 为什么服务端是cjs
                },
            },
        },
    });
    console.log(`Building client + server bundles / 构建客户端与服务端包中 ...`);
    try {
        const [clientBundle, serverBundle] = await Promise.all([
            (0, vite_1.build)(resolveViteConfig(false)),
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
 * 服务端渲染出入口html
 */
async function renderPage(renderInServer, root, clientBundle) {
    // 获取客户端入口chunk
    const clientEntryChunk = clientBundle.output.find((chunk) => chunk.type === 'chunk' && chunk.isEntry);
    console.log(`Rendering page in server side / 服务端渲染页面中 ...`);
    // 获取包含react应用的模板html
    const appHtml = renderInServer();
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>title</title>
      <meta name="description" content="xxx">
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script type="module" src="/${clientEntryChunk?.fileName}"></script>
    </body>
  </html>`.trim();
    await (0, fs_extra_1.ensureDir)(path_1.default.join(root, 'build'));
    await (0, fs_extra_1.writeFile)(path_1.default.join(root, 'build/index.html'), html);
    await (0, fs_extra_1.remove)(path_1.default.join(root, '.temp'));
}
