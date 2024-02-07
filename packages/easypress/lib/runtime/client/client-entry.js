"use strict";

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

// src/runtime/client/client-entry.tsx
var import_client = require("react-dom/client");
var import_jsx_runtime3 = require("react/jsx-runtime");
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(App, {}));
