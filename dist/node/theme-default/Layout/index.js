"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const react_1 = require("react");
function Layout() {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<div>
      <h1>This is Layout Component</h1>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>Add Count</button>
      </div>
    </div>);
}
exports.Layout = Layout;
