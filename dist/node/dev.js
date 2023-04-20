"use strict";
// 热更新 https://cn.vitejs.dev/guide/api-javascript.html#vitedevserver
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViteServer = void 0;
const vite_1 = require("vite");
const vitePluginIndexHtml_1 = require("./plugins/vitePluginIndexHtml");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react")); // vitePluginReact来支持边界到react的热更新
/**
 * 创建vite静态服务
 * @description 对vite的jsapi-createServer进行参数处理
 */
function createViteServer(root = process.cwd()) {
    return (0, vite_1.createServer)({
        root,
        server: {
            host: true, // 开启局域网与公网ip
        },
        plugins: [(0, vitePluginIndexHtml_1.vitePluginIndexHtml)(), (0, plugin_react_1.default)()],
    });
}
exports.createViteServer = createViteServer;
