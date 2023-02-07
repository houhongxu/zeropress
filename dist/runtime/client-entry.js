"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// 在模板html内引入，在浏览器开始渲染react组件
const client_1 = require("react-dom/client");
const App_1 = require("./App");
function renderInBrowser() {
    const containerEl = document.getElementById('root');
    if (!containerEl) {
        throw new Error('#root element not found');
    }
    (0, client_1.createRoot)(containerEl).render((0, jsx_runtime_1.jsx)(App_1.App, {}));
}
renderInBrowser();
