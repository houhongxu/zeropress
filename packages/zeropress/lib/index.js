// src/runtime/client/Content.tsx
import { useRoutes } from "react-router-dom";

// src/shared/utils.ts
function normalizeUrl(url = "/") {
  return encodeURI(url);
}

// src/runtime/client/Content.tsx
import routes from "virtual:routes";
function Content() {
  const element = useRoutes(routes, normalizeUrl(location.pathname));
  console.log(
    "\u6587\u4EF6\u8DEF\u7531",
    routes.map((i) => i.path)
  );
  return element;
}

// src/runtime/usePageData.ts
import { createContext, useContext } from "react";
import config from "virtual:config";
import routes2 from "virtual:routes";
async function getPageData(pathname) {
  var _a, _b, _c, _d;
  const matched = routes2.find((route) => route.path === pathname);
  if (matched) {
    const module = await matched.preload();
    return {
      pageType: ((_b = (_a = module == null ? void 0 : module.GetFrontMatter) == null ? void 0 : _a.call(module)) == null ? void 0 : _b.pageType) || "doc",
      pagePath: pathname,
      frontmatter: ((_c = module.GetFrontMatter) == null ? void 0 : _c.call(module)) ?? {},
      toc: ((_d = module.GetToc) == null ? void 0 : _d.call(module)) ?? [],
      userConfig: config
    };
  }
  return { pageType: "404", pagePath: pathname, toc: [], userConfig: config };
}
var PageDataContext = createContext({});
var usePageData = () => {
  return useContext(PageDataContext);
};

// src/runtime/client/Link.tsx
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { jsx } from "react/jsx-runtime";
function Link({
  href = "/",
  className,
  children,
  onClick
}) {
  const navigate = useNavigate();
  const { setPageData } = usePageData();
  const isSpa = true;
  const isCsg = isSpa && !(href == null ? void 0 : href.startsWith("http"));
  const handleCsgNavigate = async () => {
    const newPageData = await getPageData(href);
    setPageData == null ? void 0 : setPageData(newPageData);
    onClick == null ? void 0 : onClick();
    navigate(href);
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      ...isCsg ? { onClick: handleCsgNavigate } : { href, onClick },
      className: classNames("cursor-pointer", className),
      children
    }
  );
}
export {
  Content,
  Link,
  PageDataContext,
  getPageData,
  usePageData
};
