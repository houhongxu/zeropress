"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevServer = void 0;
const vite_1 = require("vite");
/**
 * 创建vite-dev-server实例
 */
async function createDevServer(root = process.cwd()) {
    return (0, vite_1.createServer)({
        root,
    });
}
exports.createDevServer = createDevServer;
