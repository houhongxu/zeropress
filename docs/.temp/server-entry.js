"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const server = require("react-dom/server");
const react = require("react");
function MainLayout() {
  const [count, setCount] = react.useState(0);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx("h1", { children: "This is Layout Component" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      count,
      /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: () => setCount(count + 1), children: "Add Count" })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntime.jsx(MainLayout, {});
}
function renderInServer() {
  console.log(server.renderToString(/* @__PURE__ */ jsxRuntime.jsx(App, {})));
  return server.renderToString(/* @__PURE__ */ jsxRuntime.jsx(App, {}));
}
exports.renderInServer = renderInServer;
