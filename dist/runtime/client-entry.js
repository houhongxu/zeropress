"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// 浏览器执行的入口，在模板html中通过script引入执行
const client_1 = require("react-dom/client");
const App_1 = require("./App");
function renderInBrower() {
    const rootDom = document.getElementById('root');
    if (!rootDom) {
        throw new Error('#root dom element not found / 未找到名为root的dom节点');
    }
    (0, client_1.createRoot)(rootDom).render((0, jsx_runtime_1.jsx)(App_1.App, {}));
}
renderInBrower();
