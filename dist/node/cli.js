"use strict";
// 脚手架 https://github.com/vitejs/vite/blob/main/packages/vite/src/node/cli.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = __importDefault(require("cac"));
const build_1 = require("./build");
const dev_1 = require("./dev");
// 配置命令
const cli = (0, cac_1.default)('hhxpress');
cli
    .command('[root]', 'Start Dev Server')
    .alias('dev')
    .action(async (root = process.cwd()) => {
    // 创建vite静态服务
    const server = await (0, dev_1.createViteServer)(root);
    // 开启监听
    await server.listen();
    // 打印服务url
    server.printUrls();
});
cli
    .command('build [root]', 'Start Build')
    .action(async (root = process.cwd()) => {
    try {
        await (0, build_1.build)(root);
    }
    catch (e) {
        console.log(e);
    }
});
cli.parse();
