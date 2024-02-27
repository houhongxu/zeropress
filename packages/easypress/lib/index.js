// src/runtime/Content.tsx
import { useRoutes } from "react-router-dom";
import routes from "virtual:routes";
function Content() {
  const element = useRoutes(routes);
  console.log(
    "\u6587\u4EF6\u8DEF\u7531",
    routes.map((i) => i.path)
  );
  return element;
}

// src/runtime/usePageData.ts
import { matchRoutes } from "react-router-dom";
import config from "virtual:config";
import routes2 from "virtual:routes";
import { create } from "zustand";
async function getPageData(pathname) {
  var _a;
  const matched = matchRoutes(routes2, pathname);
  if (matched) {
    const module = await matched[0].route.preload();
    return {
      pageType: ((_a = module.frontmatter) == null ? void 0 : _a.pageType) || "doc",
      pagePath: pathname,
      frontmatter: module.frontmatter,
      toc: module.toc,
      userConfig: config
    };
  }
  return { pageType: "404", pagePath: pathname, toc: [], userConfig: config };
}
var usePageData = create((set) => ({
  pageData: void 0,
  setPageData: (pageData) => set({ pageData })
}));
export {
  Content,
  getPageData,
  usePageData
};
