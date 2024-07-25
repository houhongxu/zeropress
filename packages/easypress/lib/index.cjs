"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Content: () => Content,
  PageDataContext: () => PageDataContext,
  getPageData: () => getPageData,
  usePageData: () => usePageData
});
module.exports = __toCommonJS(src_exports);

// src/runtime/Content.tsx
var import_react_router_dom = require("react-router-dom");
var import_virtual_routes = __toESM(require("virtual:routes"), 1);
function Content() {
  const element = (0, import_react_router_dom.useRoutes)(import_virtual_routes.default);
  console.log(
    "\u6587\u4EF6\u8DEF\u7531",
    import_virtual_routes.default.map((i) => i.path)
  );
  return element;
}

// src/runtime/usePageData.ts
var import_react = require("react");
var import_react_router_dom2 = require("react-router-dom");
var import_virtual_config = __toESM(require("virtual:config"), 1);
var import_virtual_routes2 = __toESM(require("virtual:routes"), 1);
async function getPageData(pathname) {
  var _a;
  const matched = (0, import_react_router_dom2.matchRoutes)(import_virtual_routes2.default, pathname);
  if (matched) {
    const module2 = await matched[0].route.preload();
    return {
      pageType: ((_a = module2.frontmatter) == null ? void 0 : _a.pageType) || "doc",
      pagePath: pathname,
      frontmatter: module2.frontmatter,
      toc: module2.toc,
      userConfig: import_virtual_config.default
    };
  }
  return { pageType: "404", pagePath: pathname, toc: [], userConfig: import_virtual_config.default };
}
var PageDataContext = (0, import_react.createContext)({});
var usePageData = () => {
  return (0, import_react.useContext)(PageDataContext);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Content,
  PageDataContext,
  getPageData,
  usePageData
});
