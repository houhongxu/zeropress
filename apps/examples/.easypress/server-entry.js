import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRoutes, matchRoutes, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { create } from "zustand";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
const a = { a: 2 };
function Counter() {
  const [count2, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: count2 }),
    /* @__PURE__ */ jsx("button", { onClick: () => setCount((count22) => count22 + 1), children: "点击加1" })
  ] });
}
const count = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a,
  default: Counter
}, Symbol.toStringTag, { value: "Module" }));
function Element2() {
  return /* @__PURE__ */ jsx("div", { onClick: () => alert("index"), children: "index" });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Element2
}, Symbol.toStringTag, { value: "Module" }));
const toc$1 = [{
  "id": "gfm",
  "text": "GFM",
  "depth": 2
}, {
  "id": "如果我是汉字-标题的id是什么呢-autolink-literals",
  "text": "如果我是汉字 标题的id是什么呢 Autolink literals",
  "depth": 2
}, {
  "id": "footnote",
  "text": "Footnote",
  "depth": 2
}, {
  "id": "strikethrough",
  "text": "Strikethrough",
  "depth": 2
}, {
  "id": "table",
  "text": "Table",
  "depth": 2
}, {
  "id": "tasklist",
  "text": "Tasklist",
  "depth": 2
}];
const frontmatter$1 = {
  "hello": "frontmatter"
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "markx",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#markx",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "markx"]
    }), "\n", "\n", jsx(Counter, {}), "\n", jsx("div", {
      style: {
        background: "red",
        margin: 10
      },
      children: "我是jsx的div"
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " async"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createRuntimeDevServer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  root"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " process."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cwd"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  siteConfig"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  restartRuntimeDevServer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  root"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  siteConfig"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " SiteConfig"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  restartRuntimeDevServer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Promise"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "void"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}) {"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createServer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    root: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "ROOT_PATH"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    server: {"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      host: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    },"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    plugins: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "createPlugins"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({ root, restartRuntimeDevServer, siteConfig }),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.h2, {
      id: "gfm",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#gfm",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "GFM"]
    }), "\n", jsxs(_components.h2, {
      id: "如果我是汉字-标题的id是什么呢-autolink-literals",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#如果我是汉字-标题的id是什么呢-autolink-literals",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "如果我是汉字 标题的id是什么呢 Autolink literals"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "http://www.example.com",
        children: "www.example.com"
      }), ", ", jsx(_components.a, {
        href: "https://example.com",
        children: "https://example.com"
      }), ", and ", jsx(_components.a, {
        href: "mailto:contact@example.com",
        children: "contact@example.com"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "footnote",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#footnote",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Footnote"]
    }), "\n", jsxs(_components.p, {
      children: ["A note", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "strikethrough",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#strikethrough",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Strikethrough"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.del, {
        children: "one"
      }), " or ", jsx(_components.del, {
        children: "two"
      }), " tildes."]
    }), "\n", jsxs(_components.h2, {
      id: "table",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#table",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Table"]
    }), "\n", jsx(_components.table, {
      children: jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "a"
          }), jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "b"
          }), jsx(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "c"
          }), jsx(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "d"
          })]
        })
      })
    }), "\n", jsxs(_components.h2, {
      id: "tasklist",
      children: [jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#tasklist",
        children: jsx(_components.span, {
          className: "autolink-headings",
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Tasklist"]
    }), "\n", jsxs(_components.ul, {
      className: "contains-task-list",
      children: ["\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "to do"]
      }), "\n", jsxs(_components.li, {
        className: "task-list-item",
        children: [jsx(_components.input, {
          type: "checkbox",
          checked: true,
          disabled: true
        }), " ", "done"]
      }), "\n"]
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsxs(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: [jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#footnote-label",
          children: jsx(_components.span, {
            className: "autolink-headings",
            style: {
              marginRight: "4px"
            },
            children: "#"
          })
        }), "Footnotes"]
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["Big note. ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const markx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1,
  toc: toc$1
}, Symbol.toStringTag, { value: "Module" }));
const toc = [];
const frontmatter = void 0;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    span: "span",
    ...props.components
  };
  return jsxs(_components.h1, {
    id: "汉字",
    children: [jsx(_components.a, {
      "aria-hidden": "true",
      tabIndex: "-1",
      href: "#汉字",
      children: jsx(_components.span, {
        className: "autolink-headings",
        style: {
          marginRight: "4px"
        },
        children: "#"
      })
    }), "汉字"]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const __$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  toc
}, Symbol.toStringTag, { value: "Module" }));
function Element5() {
  return /* @__PURE__ */ jsx("div", { children: "脚本" });
}
const __ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Element5
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/count", element: React.createElement(Counter), preload: () => Promise.resolve().then(() => count) },
  { path: "/", element: React.createElement(Element2), preload: () => Promise.resolve().then(() => index) },
  { path: "/markx", element: React.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => markx) },
  { path: "/汉字", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => __$1) },
  { path: "/脚本", element: React.createElement(Element5), preload: () => Promise.resolve().then(() => __) }
];
function Content() {
  const element = useRoutes(routes);
  console.log(
    "文件路由",
    routes.map((i) => i.path)
  );
  return element;
}
function Doc() {
  return /* @__PURE__ */ jsx("div", { className: "bg-red", children: "Doc" });
}
function Hello() {
  return /* @__PURE__ */ jsx("div", { children: "Hello" });
}
function NotFount() {
  return /* @__PURE__ */ jsx("div", { children: "NotFount" });
}
const config = { "title": "EASYPRESS", "description": "u know me", "themeConfig": {}, "vite": {} };
async function getPageData(pathname) {
  var _a;
  const matched = matchRoutes(routes, pathname);
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
const usePageData = create((set) => ({
  pageData: void 0,
  setPageData: (pageData) => set({ pageData })
}));
function Layout() {
  const { pageData } = usePageData();
  console.log("页面数据：", pageData);
  const getPage = () => {
    const pageType = pageData == null ? void 0 : pageData.pageType;
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(Hello, {});
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(Doc, {});
    } else {
      return /* @__PURE__ */ jsx(NotFount, {});
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-[40px]", children: [
    getPage(),
    /* @__PURE__ */ jsx(Link, { to: "/markx", children: "go to markx" }),
    /* @__PURE__ */ jsx(Content, {})
  ] });
}
function PageDataLayout({ children }) {
  const { setPageData } = usePageData();
  useEffect(() => {
    getPageData(location.pathname).then(setPageData);
  }, []);
  useEffect(() => {
  });
  return /* @__PURE__ */ jsx(Fragment, { children });
}
function render(location2) {
  const html = renderToString(
    /* @__PURE__ */ jsx(PageDataLayout, { children: /* @__PURE__ */ jsx(StaticRouter, { location: location2, children: /* @__PURE__ */ jsx(Layout, {}) }) })
  );
  return html;
}
export {
  render,
  routes
};
