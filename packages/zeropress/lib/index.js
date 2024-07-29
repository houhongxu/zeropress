// src/shared/utils.ts
function normalizeUrl(url = "/") {
  return encodeURI(url);
}

// src/runtime/client/Content.tsx
import { useRoutes } from "react-router-dom";
import routes from "virtual:routes";
function Content({ location = "/" }) {
  const element = useRoutes(routes, normalizeUrl(location));
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
  const matched = routes2.find((route) => route.path === pathname);
  if (matched) {
    const module = await matched.preload();
    return {
      pageType: module?.GetFrontMatter?.()?.pageType || "doc",
      pagePath: pathname,
      frontmatter: module.GetFrontMatter?.() ?? {},
      toc: module.GetToc?.() ?? [],
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
  const isCsg = isSpa && !href?.startsWith("http");
  const handleCsgNavigate = async () => {
    const newPageData = await getPageData(href);
    setPageData?.(newPageData);
    onClick?.();
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
