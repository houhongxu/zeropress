"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderInServer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// 服务端执行的入口，通过react的api处理代码为字符串
const server_1 = require("react-dom/server");
const App_1 = require("./App");
function renderInServer() {
    return (0, server_1.renderToString)((0, jsx_runtime_1.jsx)(App_1.App, {}));
}
exports.renderInServer = renderInServer;
