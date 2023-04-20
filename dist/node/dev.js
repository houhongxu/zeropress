"use strict";
// 热更新
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViteServer = void 0;
const vite_1 = require("vite");
/**
 * 创建vite静态服务
 * @description 对vite的jsapi-createServer进行参数处理
 */
function createViteServer(root = process.cwd()) {
    return (0, vite_1.createServer)({
        root, // root配置默认为process.cwd()，并接受相对路径，不需要处理
    });
}
exports.createViteServer = createViteServer;
