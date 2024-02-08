// src/runtime/default-theme/me.tsx
import { jsx } from "react/jsx-runtime";
function Me() {
  return /* @__PURE__ */ jsx("div", { children: "me" });
}

// src/runtime/default-theme/index.tsx
import { useState } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("h1", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsx2("button", { onClick: () => setCount(count + 1), children: "Add Count" }),
    /* @__PURE__ */ jsx2(Me, {})
  ] });
}

// src/runtime/client/client-entry.tsx
import { createRoot } from "react-dom/client";
import { jsx as jsx3 } from "react/jsx-runtime";
createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsx3(App, {}));
