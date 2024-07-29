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
  Link: () => Link,
  PageDataContext: () => PageDataContext,
  getPageData: () => getPageData,
  usePageData: () => usePageData
});
module.exports = __toCommonJS(src_exports);

// src/shared/utils.ts
function normalizeUrl(url = "/") {
  return encodeURI(url);
}

// src/runtime/client/Content.tsx
var import_react_router_dom = require("react-router-dom");
var import_virtual_routes = __toESM(require("virtual:routes"), 1);
function Content({ location = "/" }) {
  const element = (0, import_react_router_dom.useRoutes)(import_virtual_routes.default, normalizeUrl(location));
  console.log(
    "\u6587\u4EF6\u8DEF\u7531",
    import_virtual_routes.default.map((i) => i.path)
  );
  return element;
}

// src/runtime/usePageData.ts
var import_react = require("react");
var import_virtual_config = __toESM(require("virtual:config"), 1);
var import_virtual_routes2 = __toESM(require("virtual:routes"), 1);
async function getPageData(pathname) {
  const matched = import_virtual_routes2.default.find((route) => route.path === pathname);
  if (matched) {
    const module2 = await matched.preload();
    return {
      pageType: module2?.GetFrontMatter?.()?.pageType || "doc",
      pagePath: pathname,
      frontmatter: module2.GetFrontMatter?.() ?? {},
      toc: module2.GetToc?.() ?? [],
      userConfig: import_virtual_config.default
    };
  }
  return { pageType: "404", pagePath: pathname, toc: [], userConfig: import_virtual_config.default };
}
var PageDataContext = (0, import_react.createContext)({});
var usePageData = () => {
  return (0, import_react.useContext)(PageDataContext);
};

// src/runtime/client/Link.tsx
var import_classnames = __toESM(require("classnames"), 1);
var import_react_router_dom2 = require("react-router-dom");
var import_jsx_runtime = require("react/jsx-runtime");
function Link({
  href = "/",
  className,
  children,
  onClick
}) {
  const navigate = (0, import_react_router_dom2.useNavigate)();
  const { setPageData } = usePageData();
  const isSpa = true;
  const isCsg = isSpa && !href?.startsWith("http");
  const handleCsgNavigate = async () => {
    const newPageData = await getPageData(href);
    setPageData?.(newPageData);
    onClick?.();
    navigate(href);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "a",
    {
      ...isCsg ? { onClick: handleCsgNavigate } : { href, onClick },
      className: (0, import_classnames.default)("cursor-pointer", className),
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Content,
  Link,
  PageDataContext,
  getPageData,
  usePageData
});
