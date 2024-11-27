// src/shared/utils.ts
function normalizeUrl(url = "/") {
  return encodeURI(url);
}

// src/runtime/client/Content.tsx
import { useRoutes } from "react-router-dom";
import routes from "virtual:routes";
function Content({ location = "/" }) {
  const element = useRoutes(routes, normalizeUrl(location));
  return element;
}

// src/runtime/usePageData.ts
import { createContext, useContext } from "react";
import config from "virtual:config";
import routes2 from "virtual:routes";
async function getPageData(pathname) {
  const matched = routes2.find((route) => route.path === pathname);
  let pageData = {
    pageType: "404",
    pagePath: pathname,
    toc: [],
    userConfig: config,
    timestamp: ""
  };
  if (matched) {
    const module = await matched.load();
    pageData = {
      pageType: module?.GetFrontMatter?.()?.pageType || "doc",
      pagePath: pathname,
      frontmatter: module.GetFrontMatter?.() ?? {},
      toc: module.GetToc?.() ?? [],
      userConfig: config,
      file: matched.file,
      timestamp: matched.timestamp
    };
  }
  console.log(
    `${/* @__PURE__ */ new Date()}
\u9875\u9762\u6570\u636E\uFF1A`,
    pageData
  );
  return pageData;
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
  const isSpa = true;
  const isCsr = isSpa && !href?.startsWith("http");
  const handleCsrNavigate = async (event) => {
    event.preventDefault();
    onClick?.();
    navigate(href.slice(1));
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      ...isCsr ? { onClick: handleCsrNavigate } : { onClick },
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
