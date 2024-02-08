"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/runtime/server/server-entry.tsx
var server_entry_exports = {};
__export(server_entry_exports, {
  render: () => render
});
module.exports = __toCommonJS(server_entry_exports);

// src/runtime/default-theme/me.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Me() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "me" });
}

// src/runtime/default-theme/index.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function App() {
  const [count, setCount] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { onClick: () => setCount(count + 1), children: "Add Count" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Me, {})
  ] });
}

// src/runtime/server/server-entry.tsx
var import_server = require("react-dom/server");
var import_jsx_runtime3 = require("react/jsx-runtime");
function render() {
  const html = (0, import_server.renderToString)(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(App, {}));
  return html;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  render
});
