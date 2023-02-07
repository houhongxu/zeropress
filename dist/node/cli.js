"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const path_1 = __importDefault(require("path"));
const build_1 = require("./build");
const dev_1 = require("./dev");
// 配置版本
const version = require('../../package.json').version;
// 初始化脚手架
const cli = (0, cac_1.cac)('island').version(version).help();
// 开发命令
cli
    .command('[root]', 'start dev server')
    .alias('dev')
    .action(async (root) => {
    // 辨析根路径
    root = root ? path_1.default.resolve(root) : process.cwd();
    // 获取vite-dev-server实例
    const server = await (0, dev_1.createDevServer)(root);
    // 开启开发监听服务
    await server.listen();
    // 打印服务链接
    server.printUrls();
});
// 构建命令
cli
    .command('build [root]', 'build for production')
    .action(async (root) => {
    try {
        root = path_1.default.resolve(root);
        await (0, build_1.build)(root);
    }
    catch (e) {
        console.log(e);
    }
});
// 解析脚手架
cli.parse();
