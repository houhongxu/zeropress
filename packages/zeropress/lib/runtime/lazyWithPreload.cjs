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

// src/runtime/lazyWithPreload.tsx
var lazyWithPreload_exports = {};
__export(lazyWithPreload_exports, {
  lazyWithPreload: () => lazyWithPreload
});
module.exports = __toCommonJS(lazyWithPreload_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function lazyWithPreload(factory) {
  const ReactLazyComponent = (0, import_react.lazy)(factory);
  let PreloadedComponent;
  let factoryPromise;
  const Component = (0, import_react.forwardRef)(function LazyWithPreload2(props, ref) {
    const ComponentToRender = (0, import_react.useRef)(PreloadedComponent ?? ReactLazyComponent);
    const Element = ComponentToRender.current;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Element, { ref, ...props });
  });
  const LazyWithPreload = Component;
  LazyWithPreload.preload = () => {
    if (!factoryPromise) {
      factoryPromise = factory().then((mod) => {
        PreloadedComponent = mod.default;
        return mod;
      });
    }
    return factoryPromise;
  };
  return LazyWithPreload;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lazyWithPreload
});
