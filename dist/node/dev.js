"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const vite_1 = require("vite");
const index_html_1 = require("./vite-plugin/index-html");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
/**
 * 创建vite-dev-server实例
 */
async function createDevServer(root = process.cwd()) {
    return (0, vite_1.createServer)({
        root,
        plugins: [(0, index_html_1.pluginIndexHtml)(), (0, plugin_react_1.default)()],
    });
}
exports.createDevServer = createDevServer;
