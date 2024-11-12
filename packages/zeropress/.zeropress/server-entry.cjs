"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const reactHelmetAsync = require("react-helmet-async");
const React = require("react");
const reactRouterDom = require("react-router-dom");
const classNames = require("classnames");
const server = require("react-dom/server");
const server_js = require("react-router-dom/server.js");
function isBrowser() {
  return typeof window !== "undefined" && !!window.document && !!window.document.createElement;
}
function normalizeUrl(url = "/") {
  return encodeURI(url);
}
function splitIndex(text) {
  const matched = text == null ? void 0 : text.match(/^(\d+)(\.?\s*)(.*)$/);
  const index2 = matched == null ? void 0 : matched[1];
  if (index2) {
    return {
      index: parseInt(index2),
      text: (matched == null ? void 0 : matched[3]) ?? ""
    };
  } else {
    return {
      index: 0,
      text: text ?? ""
    };
  }
}
function TitleHelmet({
  pageData,
  helmetContext
}) {
  var _a;
  const rawDocTitle = (_a = pageData == null ? void 0 : pageData.pagePath.split("/").at(-1)) == null ? void 0 : _a.split(".")[0];
  const docTitle = decodeURI(splitIndex(rawDocTitle).text);
  return /* @__PURE__ */ jsxRuntime.jsx(reactHelmetAsync.HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsxRuntime.jsx(reactHelmetAsync.Helmet, { children: /* @__PURE__ */ jsxRuntime.jsx("title", { children: (docTitle ? `${docTitle} | ` : "") + (pageData == null ? void 0 : pageData.userConfig.title) }) }) });
}
const config = { "docs": "docs", "title": "xxx", "description": "SSG Framework", "themeConfig": { "nav": [{ "text": "图片", "index": 0, "link": "/%E5%9B%BE%E7%89%87/%E6%B5%8B%E8%AF%95.html" }, { "text": "测试文件", "index": 0, "link": "/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/1%E5%95%8A1.html" }, { "text": "笔记", "index": 0, "link": "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro.html" }, { "text": "离谱", "index": 0, "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/1useLocalStorageState%E4%B8%8EuseSessionStorageState.html" }, { "img": "/logo.jpg", "link": "/", "position": "left" }, { "dark": true, "link": "/" }, { "logo": "github", "link": "https://github.com/houhongxu/hhxpress" }], "sidebar": { "/%E5%9B%BE%E7%89%87": [{ "text": "测试", "items": [], "link": "/%E5%9B%BE%E7%89%87/%E6%B5%8B%E8%AF%95.html" }], "/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6": [{ "text": "啊1", "items": [], "link": "/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/1%E5%95%8A1.html" }], "/%E7%AC%94%E8%AE%B0": [{ "text": "介绍", "items": [{ "text": "intro", "link": "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro.html" }], "link": "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro.html" }, { "text": "git", "items": [{ "text": "常用命令", "link": "/%E7%AC%94%E8%AE%B0/1git/0%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html" }, { "text": "版本控制系统VCS", "link": "/%E7%AC%94%E8%AE%B0/1git/1%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FVCS.html" }, { "text": "分布式版本控制系统DVCS", "link": "/%E7%AC%94%E8%AE%B0/1git/2%E5%88%86%E5%B8%83%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FDVCS.html" }, { "text": "HEAD与master与branch", "link": "/%E7%AC%94%E8%AE%B0/1git/3HEAD%E4%B8%8Emaster%E4%B8%8Ebranch.html" }, { "text": "push", "link": "/%E7%AC%94%E8%AE%B0/1git/4push.html" }, { "text": "merge", "link": "/%E7%AC%94%E8%AE%B0/1git/5merge.html" }, { "text": "feature branch", "link": "/%E7%AC%94%E8%AE%B0/1git/6feature%20branch.html" }, { "text": "rebase", "link": "/%E7%AC%94%E8%AE%B0/1git/7rebase.html" }, { "text": "revert", "link": "/%E7%AC%94%E8%AE%B0/1git/8revert.html" }, { "text": "reset", "link": "/%E7%AC%94%E8%AE%B0/1git/9reset.html" }, { "text": "checkout", "link": "/%E7%AC%94%E8%AE%B0/1git/10checkout.html" }, { "text": "stash", "link": "/%E7%AC%94%E8%AE%B0/1git/11stash.html" }, { "text": "log与reflog", "link": "/%E7%AC%94%E8%AE%B0/1git/12log%E4%B8%8Ereflog.html" }, { "text": "cherry-pick", "link": "/%E7%AC%94%E8%AE%B0/1git/13cherry-pick.html" }, { "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/1git/99readme.html" }], "link": "/%E7%AC%94%E8%AE%B0/1git/9reset.html" }, { "text": "浏览器", "items": [{ "text": "浏览器进程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/1%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%9B%E7%A8%8B.html" }, { "text": "TCP协议", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/2TCP%E5%8D%8F%E8%AE%AE.html" }, { "text": "HTTP协议", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/3HTTP%E5%8D%8F%E8%AE%AE.html" }, { "text": "浏览器缓存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/4%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.html" }, { "text": "导航流程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/5%E5%AF%BC%E8%88%AA%E6%B5%81%E7%A8%8B.html" }, { "text": "渲染流程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/6%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B.html" }, { "text": "内存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/13%E5%86%85%E5%AD%98.html" }, { "text": "消息队列和事件循环", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/16%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html" }, { "text": "浏览器的dns缓存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/98%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84dns%E7%BC%93%E5%AD%98.html" }, { "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/99readme.html" }], "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/99readme.html" }, { "text": "http", "items": [{ "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/3http/99readme.html" }], "link": "/%E7%AC%94%E8%AE%B0/3http/99readme.html" }, { "text": "javascript", "items": [{ "text": "引用", "link": "/%E7%AC%94%E8%AE%B0/4javascript/1%E5%BC%95%E7%94%A8.html" }, { "text": "运算符", "link": "/%E7%AC%94%E8%AE%B0/4javascript/2%E8%BF%90%E7%AE%97%E7%AC%A6.html" }, { "text": "lodash手写", "link": "/%E7%AC%94%E8%AE%B0/4javascript/3lodash%E6%89%8B%E5%86%99.html" }], "link": "/%E7%AC%94%E8%AE%B0/4javascript/3lodash%E6%89%8B%E5%86%99.html" }, { "text": "工具函数", "items": [], "link": "/%E7%AC%94%E8%AE%B0/98.%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0.html" }], "/%E7%A6%BB%E8%B0%B1": [{ "text": "ahooks", "items": [{ "text": "useLocalStorageState与useSessionStorageState", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/1useLocalStorageState%E4%B8%8EuseSessionStorageState.html" }, { "text": "useUpdateEffect 与 useUpdateLayoutEffectt", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/2useUpdateEffect%20%E4%B8%8E%20useUpdateLayoutEffectt.html" }, { "text": "useLatest与useMemoizedFn", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/3useLatest%E4%B8%8EuseMemoizedFn.html" }, { "text": "use(Raf)Timeout与use(Raf)Interval与useCountDown", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/4use(Raf)Timeout%E4%B8%8Euse(Raf)Interval%E4%B8%8EuseCountDown.html" }, { "text": "useRequest", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/5useRequest.html" }, { "text": "useMount与useUnMount与useMountedRefx.md", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/6useMount%E4%B8%8EuseUnMount%E4%B8%8EuseMountedRefx.md.html" }, { "text": "useUpdate", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/7useUpdate.html" }, { "text": "useCreation", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/8useCreation.html" }, { "text": "useDeepCompareEffect", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/9useDeepCompareEffect.html" }, { "text": "useAnimationFrame和计时器", "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/97useAnimationFrame%E5%92%8C%E8%AE%A1%E6%97%B6%E5%99%A8.html" }], "link": "/%E7%A6%BB%E8%B0%B1/6ahooks/9useDeepCompareEffect.html" }] }, "autoNav": true, "autoSidebar": true }, "vite": {} };
const GetToc$H = () => [];
const frontmatter$H = {
  "pageType": "home"
};
function _createMdxContent$H(props) {
  return jsxRuntime.jsx(jsxRuntime.Fragment, {});
}
function MDXContent$H(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$H, {
      ...props
    })
  }) : _createMdxContent$H();
}
const GetFrontMatter$H = () => frontmatter$H;
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$H,
  GetToc: GetToc$H,
  default: MDXContent$H
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$G = () => [];
const frontmatter$G = void 0;
function _createMdxContent$G(props) {
  const _components = {
    a: "a",
    h1: "h1",
    img: "img",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "测试图片",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#测试图片",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "测试图片"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.img, {
        src: "/%E7%AC%94%E8%AE%B0/1.jpg",
        alt: "1"
      })
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.img, {
        src: "/%E5%9B%BE%E7%89%87/%E5%A4%A72.jpg",
        alt: "2"
      })
    })]
  });
}
function MDXContent$G(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$G, {
      ...props
    })
  }) : _createMdxContent$G(props);
}
const GetFrontMatter$G = () => frontmatter$G;
const __ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$G,
  GetToc: GetToc$G,
  default: MDXContent$G
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$F = () => [];
const frontmatter$F = void 0;
function _createMdxContent$F(props) {
  const _components = {
    a: "a",
    h1: "h1",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(_components.h1, {
    id: "111",
    children: [jsxRuntime.jsx(_components.a, {
      className: "autolink-headings",
      href: "#111",
      children: jsxRuntime.jsx(_components.span, {
        style: {
          marginRight: "4px"
        },
        children: "#"
      })
    }), "111"]
  });
}
function MDXContent$F(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$F, {
      ...props
    })
  }) : _createMdxContent$F(props);
}
const GetFrontMatter$F = () => frontmatter$F;
const _1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$F,
  GetToc: GetToc$F,
  default: MDXContent$F
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$E = () => [];
const frontmatter$E = void 0;
function _createMdxContent$E(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "工具函数",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#工具函数",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "工具函数"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isBrowser"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " window "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'undefined'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " &&"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  window.document "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  window.document.createElement"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isObject"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Record"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " &&"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'object'"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'function'"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isString"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'string'"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isBoolean"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'boolean'"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'number'"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isUndef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'undefined'"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isDev"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  process.env."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "NODE_ENV"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'development'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " process.env."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "NODE_ENV"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'test'"
            })]
          })]
        })
      })
    })]
  });
}
function MDXContent$E(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$E, {
      ...props
    })
  }) : _createMdxContent$E(props);
}
const GetFrontMatter$E = () => frontmatter$E;
const _98_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$E,
  GetToc: GetToc$E,
  default: MDXContent$E
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$D = () => [{
  "id": "createusestoragestate",
  "text": "createUseStorageState",
  "depth": 2
}];
const frontmatter$D = void 0;
function _createMdxContent$D(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "uselocalstoragestate-与-usesessionstoragestate",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselocalstoragestate-与-usesessionstoragestate",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLocalStorageState 与 useSessionStorageState"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "useLocalStorageState"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "useSessionStorageState"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "都是通过函数 createUseStorageState来生成"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "createusestoragestate",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#createusestoragestate",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "createUseStorageState"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " useLocalStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  isBrowser "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " localStorage "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " useSessionStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  isBrowser "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " sessionStorage "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getStorage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Storage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useStorageState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "key"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    let"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " storage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Storage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 错误处理"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      onError"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "e"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        console."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      },"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // https://github.com/alibaba/hooks/issues/800"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 防止Cookie禁用时无法获取localStorage或者SessionStorage"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 普通用户期望的功能是“禁用 Cookie”，但实际上意味着“不要让网站在我的计算机上保留数据”，目前，该行为取决于浏览器"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    try"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      storage "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStorage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (err) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      onError"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(err)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 自定义序列化方法"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " serializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options?.serializer) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "serializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " JSON"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "stringify"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 自定义反序列化方法"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " deserializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options?.deserializer) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "deserializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " JSON"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "parse"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 获取当前存储的值"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStoredValue"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      try"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " raw"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " storage?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getItem"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (raw) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "          return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " deserializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(raw)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (e) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        onError"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 没有存的值时使用defaultValue()或者defaultValue"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(options?.defaultValue)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "defaultValue"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?.defaultValue"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 初始化状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "state"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStoredValue"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "())"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // key改变时更新状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    useUpdateEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getStoredValue"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "())"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, [key])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 更新状态，参数同setState形式"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " updateState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " IFuncUpdater"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " currentState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(state) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // undefined时移除存储，否则更新存储"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isUndef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        storage?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "removeItem"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        try"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "          storage?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setItem"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "serializer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState))"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (e) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "          console."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [state, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(updateState)] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  "
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " useStorageState"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$D(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$D, {
      ...props
    })
  }) : _createMdxContent$D(props);
}
const GetFrontMatter$D = () => frontmatter$D;
const _1useLocalStorageState_useSessionStorageState = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$D,
  GetToc: GetToc$D,
  default: MDXContent$D
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$C = () => [{
  "id": "useupdateeffect-与-useupdatelayouteffect",
  "text": "useUpdateEffect 与 useUpdateLayoutEffect",
  "depth": 2
}];
const frontmatter$C = void 0;
function _createMdxContent$C(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    li: "li",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "useupdateeffect-与-useupdatelayouteffect",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdateeffect-与-useupdatelayouteffect",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdateEffect 与 useUpdateLayoutEffect"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "useupdateeffect-与-useupdatelayouteffect-1",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdateeffect-与-useupdatelayouteffect-1",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdateEffect 与 useUpdateLayoutEffect"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "useUpdateEffect：跳过第一次渲染的 useEffect"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "useUpdateLayoutEffect：跳过第一次渲染的 useLayoutEffect"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "type"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " useEffect "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "|"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " useLayoutEffect"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUpdateEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "hook"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "hook"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "effect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // hook就是useEffect或者useLayoutEffect"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // effect和deps是useEffect(effect, deps)的参数"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 初始化isMounted为false，未挂载过"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isMounted"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // for react-refresh"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 渲染后重置isMounted"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    hook"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        isMounted.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    hook"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "isMounted.current) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // 第一次渲染不执行用户的effect回调"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        isMounted.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // 第二次渲染后都执行用户的effect回调"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " effect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, deps)"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$C(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$C, {
      ...props
    })
  }) : _createMdxContent$C(props);
}
const GetFrontMatter$C = () => frontmatter$C;
const _2useUpdateEffect___useUpdateLayoutEffectt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$C,
  GetToc: GetToc$C,
  default: MDXContent$C
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$B = () => [{
  "id": "uselatest",
  "text": "useLatest",
  "depth": 2
}, {
  "id": "usememoizedfn",
  "text": "useMemoizedFn",
  "depth": 2
}];
const frontmatter$B = void 0;
function _createMdxContent$B(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "uselatest-与-usememoizedfn",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselatest-与-usememoizedfn",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLatest 与 useMemoizedFn"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "uselatest",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselatest",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLatest"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "获取最新值的 hook，但是不能避免对象的地址改变"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 每次渲染都将最新的value存到ref中，但是value如果是引用类型地址还是会变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " ref"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ref.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ref"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "usememoizedfn",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usememoizedfn",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useMemoizedFn"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "获取最新更新了状态的最新函数的 hook，而且函数地址不变，理论上可以替换 useCallback"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "type"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// https://github.com/alibaba/hooks/pull/1470"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "type"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PickFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "  this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " ThisParameterType"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">,"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Parameters"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " ReturnType"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 返回更新了状态但是地址不变的fn"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 开发环境日志"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (isDev) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      console."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        `useMemoizedFn expected parameter is a function, got ${"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "}`"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      )"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // fnRef因为适配所以分开写"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 本质就是fnRef=useLatest(fn)"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 注意fnRef.current的地址会改变"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使用useRef保存最新的fn"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(fn)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 适配 react devtool"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // why not write `fnRef.current = fn`?"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // https://github.com/alibaba/hooks/issues/728"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fnRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fn, [fn])"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 初始化memoizedFn，memoizedFn.current的函数地址不会改变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " memoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "PickFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">>()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 只有初始化时赋值"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "memoizedFn.current) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 这里的第一个参数this是适配eslint的eslint no-invalid-this https://github.com/alibaba/hooks/pull/1464"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 这里是防止函数地址改变才包裹一层function"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 防止函数this指向丢失使用apply调用"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    memoizedFn."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fnRef.current."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "apply"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", args)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 返回的memoizedFn.current始终是通过function包裹的fn.current，fn.current保证是最新的函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " memoizedFn.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$B(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$B, {
      ...props
    })
  }) : _createMdxContent$B(props);
}
const GetFrontMatter$B = () => frontmatter$B;
const _3useLatest_useMemoizedFn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$B,
  GetToc: GetToc$B,
  default: MDXContent$B
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$A = () => [{
  "id": "usetimeout",
  "text": "useTimeout",
  "depth": 2
}, {
  "id": "useraftimeout",
  "text": "useRafTimeout",
  "depth": 2
}, {
  "id": "useinterval",
  "text": "useInterval",
  "depth": 2
}, {
  "id": "userafinterval",
  "text": "useRafInterval",
  "depth": 2
}, {
  "id": "usecountdown",
  "text": "useCountDown",
  "depth": 2
}];
const frontmatter$A = void 0;
function _createMdxContent$A(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "useraftimeout-与-userafinterval-与-usecountdown",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useraftimeout-与-userafinterval-与-usecountdown",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "use(Raf)Timeout 与 use(Raf)Interval 与 useCountDown"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "usetimeout",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usetimeout",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useTimeout"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "setTimeout 的 hook，返回 clear 函数来清除定时器"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使fn函数对象地址不变，哪怕fn内含有状态也不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使setInterval的timer不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "null"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使clear函数对象地址不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 校验delay"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 保存最新定时器timer"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerCallback, delay)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "useraftimeout",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useraftimeout",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRafTimeout"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "用 requestAnimationFrame 模拟实现的 useTimeout，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "interface"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  id"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timeout"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 先实现setRafTimeout"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 如果是node等环境没有requestAnimationFrame，直接使用setTimeout调用后的定时器id"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " requestAnimationFrame "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      id: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(callback, delay),"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录定时器id"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    id: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录开始时间"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " startTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 递归调用requestAnimationFrame，这是requestAnimationFrame的使用方式"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " loop"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 记录当前时间，话说这里也能用参数获取requestAnimationFrame调用的时间"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果delay的时间到了，执行callback"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " startTime "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 否则继续递归"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      handle.id "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录定时器id"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  handle.id "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " handle"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 判断是否有cancelAnimationFrame"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " cancelAnimationFrameIsNotDefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "t"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " t"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cancelAnimationFrame "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 清除setRafTimeout定时器"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 如果是node等环境没有cancelAnimationFrame使用clearTimeout"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancelAnimationFrameIsNotDefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancelAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useTimeout逻辑类似"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "return"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, delay)"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearRafTimeout"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "useinterval",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useinterval",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useInterval"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "setInterval 的 hook，返回 clear 函数来清除定时器"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "immediate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {},"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使fn函数对象地址不变，哪怕fn内含有状态也不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使setInterval的timer不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "null"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使clear函数对象地址不变"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 校验delay"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果配置immediate则第一次渲染也执行fn"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options.immediate) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      timerCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 保存最新定时器timer"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerCallback, delay)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay, options.immediate])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "userafinterval",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#userafinterval",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRafInterval"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "用 requestAnimationFrame 模拟实现的 useInterval，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "interface"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  id"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useRafTimeout中类似"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " requestAnimationFrame "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      id: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(callback, delay),"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  let"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " start "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    id: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " loop"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " start "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      start "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    handle.id "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  handle.id "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " handle"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " cancelAnimationFrameIsNotDefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "t"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " t"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cancelAnimationFrame "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancelAnimationFrameIsNotDefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancelAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useInterval中类似"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  delay"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "    immediate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  },"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " immediate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?.immediate"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Handle"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "return"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (immediate) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, delay)"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearRafInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "usecountdown",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usecountdown",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useCountDown"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "倒计时 Hook"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " type"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " dayjs"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "ConfigType"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " interface"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  leftTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  targetDate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  interval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  onEnd"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " interface"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FormattedRes"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  days"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  hours"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  minutes"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  seconds"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  milliseconds"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 计算剩余时间"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "target"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "target) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " left"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " dayjs"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target)."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "valueOf"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Date."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "now"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " left "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " :"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " left"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 格式化毫秒为日期"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " parseMs"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "milliseconds"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FormattedRes"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    days: Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 86400000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    hours: Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 3600000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 24"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    minutes: Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    seconds: Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    milliseconds: Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCountdown"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "leftTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "targetDate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "interval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "onEnd"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 计算目标时间"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " target"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TDate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果leftTime传入了值，注意undefined也算"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'leftTime'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " in"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 如果leftTime是>0的数字"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isNumber"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(leftTime) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " leftTime "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        ?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Date."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "now"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " leftTime"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        :"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " targetDate"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [leftTime, targetDate])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 倒计时状态，就是countdown"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "timeLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setTimeLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target))"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 保存onEnd钩子"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " onEndRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(onEnd)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 没有目标时间则停止，并归零倒计时"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "target) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // for stop"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setTimeLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 立即计算并保存一次"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    setTimeLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "calcLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target))"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timer"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 每隔interval计算并保存倒计时"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " targetLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setTimeLeft"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(targetLeft)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 倒计时结束时清除计时器并执行onEnd钩子"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (targetLeft "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timer)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        onEndRef."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, interval)"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearInterval"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timer)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [target, interval])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 将倒计时格式化为日期"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " formattedRes"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " parseMs"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timeLeft), [timeLeft])"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [timeLeft, formattedRes] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$A(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$A, {
      ...props
    })
  }) : _createMdxContent$A(props);
}
const GetFrontMatter$A = () => frontmatter$A;
const _4use_Raf_Timeout_use_Raf_Interval_useCountDown = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$A,
  GetToc: GetToc$A,
  default: MDXContent$A
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$z = () => [{
  "id": "userequestimplement",
  "text": "useRequestImplement",
  "depth": 2
}, {
  "id": "fetch",
  "text": "Fetch",
  "depth": 2
}];
const frontmatter$z = void 0;
function _createMdxContent$z(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "userequest",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#userequest",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRequest"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "useRequest 使用的插件机制\n通过 useRequestImplement 引入插件"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>("
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   service: Service<TData, TParams>,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   plugins?: Plugin<TData, TParams>[],"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ): Result<TFormated, TParams>"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// function useRequest<TData, TParams extends any[]>("
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   service: Service<TData, TParams>,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   options?: OptionsWithoutFormat<TData, TParams>,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   plugins?: Plugin<TData, TParams>[],"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ): Result<TData, TParams>"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRequest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]>("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  service"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Service"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service就是接口"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options就是配置项"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  plugins"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[], "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// plugins是插件"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRequestImplement"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(service, options, ["
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(plugins "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []),"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useDebouncePlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useLoadingDelayPlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    usePollingPlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useRefreshOnWindowFocusPlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useThrottlePlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useAutoRunPlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useCachePlugin,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useRetryPlugin,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[])"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "userequestimplement",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#userequestimplement",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRequestImplement"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRequestImplement"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]>("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  service"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Service"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service就是接口，useRequset透传"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options就是配置项，useRequset透传"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  plugins"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [], "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// plugins是插件，"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "manual"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "rest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 开发环境"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (isDev) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options.defaultParams "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "Array."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isArray"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(options.defaultParams)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      console."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "warn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        `expected defaultParams is array, got ${"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "defaultParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "}`"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      )"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 将配置了默认manual的配置项给fetch"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fetchOptions"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    manual,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "rest,"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 始终保存最新的请求函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " serviceRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(service)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 强制组件重新渲染的函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " update"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useUpdate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // Fetch实例处理请求，useCreation确保实例不会重复创建"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fetchInstance"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCreation"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用插件的初始化钩子，然后获取Fetch初始值，如useAutoRunPlugin配置了loading初始值，注意和其他钩子在插件中写法不一样，这个是直接挂在函数上的，而不是返回值上"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " initState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " plugins"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      ."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "p"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " p?."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onInit"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(fetchOptions))"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      ."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "filter"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(Boolean)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Fetch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      serviceRef,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fetchOptions,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      update,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      Object."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "assign"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "initState),"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    )"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 在fetchInstance保存fetchOptions，为了fetchInstance调用options里的钩子，但是为什么类中没定义这个变量?"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fetchInstance.options "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fetchOptions"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 执行所有插件返回的包含多个钩子的对象"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fetchInstance.pluginImpls "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " plugins."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "p"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " p"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance, fetchOptions))"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 组件渲染时，未配置手动请求时，发起请求"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useMount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "manual) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // useCachePlugin can set fetchInstance.state.params from cache when init"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " params"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fetchInstance.state.params "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options.defaultParams "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // @ts-ignore"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fetchInstance."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "run"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 组件销毁时取消请求"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useUnmount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    fetchInstance."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancel"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    loading: fetchInstance.state.loading,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    data: fetchInstance.state.data,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    error: fetchInstance.state.error,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    params: fetchInstance.state.params "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [],"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    cancel: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.cancel."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    refresh: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.refresh."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    refreshAsync: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.refreshAsync."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    run: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.run."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    runAsync: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.runAsync."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    mutate: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.mutate."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Result"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "fetch",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#fetch",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Fetch"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "核心代码"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " default"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " class"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Fetch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]> {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 插件钩子对象的数组"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  pluginImpls"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PluginReturn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[]"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录的请求次数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  count"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  state"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FetchState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    params: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    data: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    error: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  constructor"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " serviceRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " MutableRefObject"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Service"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">>, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " subscribe"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Subscribe"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 强制渲染的函数"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " initState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Partial"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "FetchState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 初始状态"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ) {"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 设置初始状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state,"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "options.manual,"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "initState,"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 设置状态并强制渲染，没有用react的useState来保证状态改变时渲染，而是用强制渲染新数据实现"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "s"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Partial"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "FetchState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">> "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state,"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "s,"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "subscribe"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 执行钩子"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "event"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " keyof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PluginReturn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "rest"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 遍历插件钩子对象的数组，执行对应钩子"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " r"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".pluginImpls."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "i"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " i[event]?.("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "rest))."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "filter"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(Boolean)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 返回钩子给的状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Object."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "assign"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "r)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 核心请求函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  async"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " runAsync"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "params"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 请求次数加一"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " currentCount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 执行插件onBefore钩子，并获取钩子给的状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      stopNow"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      returnNow"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "state"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onBefore'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果钩子给了stopNow就停止"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // stop request"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (stopNow) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 强制渲染新状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "true"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      params,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "state,"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果钩子给了stopNow就返回"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // return now"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (returnNow) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "resolve"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(state.data)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用配置里的钩子onBefore"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onBefore"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    try"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 获取真正的请求函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      let"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { servicePromise } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        'onRequest'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "        this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".serviceRef.current,"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        params,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      )"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "servicePromise) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        servicePromise "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".serviceRef."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 开始请求，res是promise的then"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " res"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " await"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " servicePromise"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 取消请求"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // prevent run.then when request is canceled"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 强制渲染新状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        data: res,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        error: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用配置里的钩子onSuccess和插件里的"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onSuccess"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(res, params)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onSuccess'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", res, params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用配置里的钩子onFinally"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onFinally"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params, res, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用插件里的钩子onFinally"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "        this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onFinally'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params, res, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 返回promise的then"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " res"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (error) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // prevent run.then when request is canceled"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        error,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onError"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(error, params)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onError'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error, params)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onFinally"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "        this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onFinally'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      throw"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " error"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 处理了promise的then的错误的函数"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  run"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "params"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TParams"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runAsync"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "catch"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "error"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options.onError) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        console."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(error)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 取消请求"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancel"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      loading: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onCancel'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 再请求一次"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  refresh"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // @ts-ignore"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "run"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.params "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []))"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 返回新请求的promise的then"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  refreshAsync"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // @ts-ignore"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runAsync"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.params "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []))"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 修改data"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  mutate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "data"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "oldData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " targetData"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(data) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " data"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.data) "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " data"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用插件里的钩子onMutate"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onMutate'"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", targetData)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 强制渲染新状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      data: targetData,"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$z(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$z, {
      ...props
    })
  }) : _createMdxContent$z(props);
}
const GetFrontMatter$z = () => frontmatter$z;
const _5useRequest = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$z,
  GetToc: GetToc$z,
  default: MDXContent$z
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$y = () => [];
const frontmatter$y = void 0;
function _createMdxContent$y(props) {
  return jsxRuntime.jsx(jsxRuntime.Fragment, {});
}
function MDXContent$y(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$y, {
      ...props
    })
  }) : _createMdxContent$y();
}
const GetFrontMatter$y = () => frontmatter$y;
const _6useMount_useUnMount_useMountedRef_mdx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$y,
  GetToc: GetToc$y,
  default: MDXContent$y
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$x = () => [];
const frontmatter$x = void 0;
function _createMdxContent$x(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "useupdate",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdate",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdate"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "强制重新渲染"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useUpdate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 初始为第一个对象字面量"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [, "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({})"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 调用时更新为第二个对象字面量来触发重新渲染"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}), [])"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$x(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$x, {
      ...props
    })
  }) : _createMdxContent$x(props);
}
const GetFrontMatter$x = () => frontmatter$x;
const _7useUpdate = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$x,
  GetToc: GetToc$x,
  default: MDXContent$x
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$w = () => [];
const frontmatter$w = void 0;
function _createMdxContent$w(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "usecreation",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usecreation",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useCreation"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "useCreation 是 useMemo 或 useRef 的替代品。"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "useMemo 无法保证被 memo 的值一定不会被重计算"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "useRef 对复杂值如 new Obj() 会导致实例重复创建"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "而 useCreation 空 deps 被 memo 的值不会被重计算，参数是函数也保证了实例不会重新创建"
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " default"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCreation"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "factory"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " DependencyList"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使用ref保存是否创建等状态"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "current"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    deps,"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    obj: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    initialized: "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ","
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 未创建 或者 依赖不同"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current.initialized "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "depsAreSame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(current.deps, deps)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.deps "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " deps"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.obj "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " factory"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.initialized "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " current.obj "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$w(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$w, {
      ...props
    })
  }) : _createMdxContent$w(props);
}
const GetFrontMatter$w = () => frontmatter$w;
const _8useCreation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$w,
  GetToc: GetToc$w,
  default: MDXContent$w
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$v = () => [{
  "id": "useanimationframe",
  "text": "useAnimationFrame",
  "depth": 2
}, {
  "id": "计时器",
  "text": "计时器",
  "depth": 2
}];
const frontmatter$v = void 0;
function _createMdxContent$v(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "useanimationframe-和计时器",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useanimationframe-和计时器",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useAnimationFrame 和计时器"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "因为 setTimeout/setInterval 会因为任务阻塞延迟严重"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "requestAnimationFrame 可以实现更精准的计时器"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "requestAnimationFrame 是自动匹配帧率调用的 api，60 帧执行 60 次，120 帧执行 120 次"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "api 设计目的就是使动画更丝滑"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "所以 requestAnimationFrame 需要与浏览器的重绘同步，具有调用优先级，不会因为任务阻塞"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "useanimationframe",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#useanimationframe",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useAnimationFrame"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "durationTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " requestRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " startTimeRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " animate"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "time"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " DOMHighResTimeStamp"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (startTimeRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " durationTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " time "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " startTimeRef.current"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(durationTime)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    startTimeRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " time"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    requestRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(animate)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    requestRef.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(animate)"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (requestRef.current) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        cancelAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(requestRef.current)"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "计时器",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#计时器",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "计时器"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " IndexPage"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " () "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "count"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setCount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useAnimationFrame"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "durationTime"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    setCount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "prevCount"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " prevCount "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " durationTime "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  })"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " <"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "div"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">{Math."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "round"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(count)}</"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "div"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " default"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " IndexPage"
            })]
          })]
        })
      })
    }), "\n", jsxRuntime.jsx("p", {
      align: "right",
      children: "23.12.01"
    })]
  });
}
function MDXContent$v(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$v, {
      ...props
    })
  }) : _createMdxContent$v(props);
}
const GetFrontMatter$v = () => frontmatter$v;
const _97useAnimationFrame____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$v,
  GetToc: GetToc$v,
  default: MDXContent$v
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$u = () => [{
  "id": "usedeepeffect",
  "text": "useDeepEffect",
  "depth": 2
}];
const frontmatter$u = void 0;
function _createMdxContent$u(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "usedeepcompareeffect",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usedeepcompareeffect",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useDeepCompareEffect"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "usedeepeffect",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#usedeepeffect",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useDeepEffect"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isDeepEqual"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "cur"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "pre"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ";"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useDeepEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "fn"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " flag"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ");"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " preDeps"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">();"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isDeepEqual"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(deps, preDeps.current)) {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    flag.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ";"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  preDeps.current "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " deps;"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn, [flag.current]);"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    })]
  });
}
function MDXContent$u(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$u, {
      ...props
    })
  }) : _createMdxContent$u(props);
}
const GetFrontMatter$u = () => frontmatter$u;
const _9useDeepCompareEffect = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$u,
  GetToc: GetToc$u,
  default: MDXContent$u
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$t = () => [];
const frontmatter$t = void 0;
function _createMdxContent$t(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "笔记",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#笔记",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "笔记"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "温故知新"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "一开始的笔记都是机械的复制关键点重组，记忆很浅，仅方便查阅"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "现在可以希望用疑问->解决->复述的方式加深记忆"
    })]
  });
}
function MDXContent$t(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$t, {
      ...props
    })
  }) : _createMdxContent$t(props);
}
const GetFrontMatter$t = () => frontmatter$t;
const intro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$t,
  GetToc: GetToc$t,
  default: MDXContent$t
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$s = () => [];
const frontmatter$s = void 0;
function _createMdxContent$s(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "常用命令",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#常用命令",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "常用命令"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git pull"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git push 提交到远程仓库，--force 强制提交"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git checkout feat/627 切换分支，-b 切换并创建"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git merge feat/627 将 feat/627 分支合并入当前分支"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git remote -v 查看源"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git remote set-url --push origin no_push 禁止 push"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "git cherry-pick d4296dbde1f44c244ba8215aa55a12fa601a96ea 选中任意分支的提交到本分支"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$s(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$s, {
      ...props
    })
  }) : _createMdxContent$s(props);
}
const GetFrontMatter$s = () => frontmatter$s;
const _0____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$s,
  GetToc: GetToc$s,
  default: MDXContent$s
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$r = () => [{
  "id": "checkout-和-reset-的不同",
  "text": "checkout 和 reset 的不同",
  "depth": 2
}];
const frontmatter$r = void 0;
function _createMdxContent$r(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "checkout",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#checkout",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "checkout"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "checkout 并不止可以切换 branch。checkout 本质上的功能其实是：签出（ checkout ）指定的 commit"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.code, {
        children: "git checkout branch名"
      }), " 的本质，其实是把 HEAD 指向指定的 branch，然后签出这个 branch 所对应的 commit 的工作目录。所以同样的，checkout 的目标也可以不是 branch，而直接指定某个 commit"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.code, {
        children: "git checkout 78a4bc"
      })
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "checkout-和-reset-的不同",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#checkout-和-reset-的不同",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "checkout 和 reset 的不同"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "reset 在移动 HEAD 时会带着它所指向的 branch 一起移动，而 checkout 不会。当你用 checkout 指向其他地方的时候，HEAD 和 它所指向的 branch 就自动脱离了"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "而且，checkout 有一个专门用来只让 HEAD 和 branch 脱离而不移动 HEAD 的用法"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.code, {
        children: "git checkout --detach"
      })
    })]
  });
}
function MDXContent$r(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$r, {
      ...props
    })
  }) : _createMdxContent$r(props);
}
const GetFrontMatter$r = () => frontmatter$r;
const _10checkout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$r,
  GetToc: GetToc$r,
  default: MDXContent$r
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$q = () => [{
  "id": "stash临时存放工作目录的改动",
  "text": "stash：临时存放工作目录的改动",
  "depth": 2
}];
const frontmatter$q = void 0;
function _createMdxContent$q(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "stash",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#stash",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "stash"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "stash临时存放工作目录的改动",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#stash临时存放工作目录的改动",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "stash：临时存放工作目录的改动"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.code, {
        children: "git satsh"
      }), " 不保存未 add 的"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.code, {
        children: "git satsh -u"
      }), " 也保存未 add 的"]
    })]
  });
}
function MDXContent$q(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$q, {
      ...props
    })
  }) : _createMdxContent$q(props);
}
const GetFrontMatter$q = () => frontmatter$q;
const _11stash = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$q,
  GetToc: GetToc$q,
  default: MDXContent$q
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$p = () => [{
  "id": "log",
  "text": "log",
  "depth": 2
}, {
  "id": "reflog引用的-log",
  "text": "reflog：引用的 log",
  "depth": 2
}];
const frontmatter$p = void 0;
function _createMdxContent$p(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "reflog",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reflog",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reflog"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "log",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#log",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "log"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "查看 commit 记录"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "reflog引用的-log",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reflog引用的-log",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reflog：引用的 log"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "可以查看 Git 仓库中的引用的移动记录。如果不指定引用，它会显示 HEAD 的移动记录"
    })]
  });
}
function MDXContent$p(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$p, {
      ...props
    })
  }) : _createMdxContent$p(props);
}
const GetFrontMatter$p = () => frontmatter$p;
const _12log_reflog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$p,
  GetToc: GetToc$p,
  default: MDXContent$p
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$o = () => [];
const frontmatter$o = void 0;
function _createMdxContent$o(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "cherry-pick",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#cherry-pick",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "cherry-pick"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "选中任意分支的指定 commit，提到当前分支"
    })]
  });
}
function MDXContent$o(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$o, {
      ...props
    })
  }) : _createMdxContent$o(props);
}
const GetFrontMatter$o = () => frontmatter$o;
const _13cherryPick = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$o,
  GetToc: GetToc$o,
  default: MDXContent$o
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$n = () => [{
  "id": "版本控制最基本功能",
  "text": "版本控制：最基本功能",
  "depth": 2
}, {
  "id": "主动提交程序代码和普通文本的区别",
  "text": "主动提交：程序代码和普通文本的区别",
  "depth": 2
}, {
  "id": "多人合作的同步需求中央仓库",
  "text": "多人合作的同步需求：中央仓库",
  "depth": 2
}, {
  "id": "中央式版本控制系统",
  "text": "中央式版本控制系统",
  "depth": 2
}];
const frontmatter$n = void 0;
function _createMdxContent$n(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "版本控制系统-vcs",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#版本控制系统-vcs",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "版本控制系统 VCS"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "版本控制最基本功能",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#版本控制最基本功能",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "版本控制：最基本功能"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["最简单的就是编辑器的撤回功能，撤回到上一个", jsxRuntime.jsx(_components.strong, {
        children: "版本"
      })]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "主动提交程序代码和普通文本的区别",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#主动提交程序代码和普通文本的区别",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "主动提交：程序代码和普通文本的区别"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "程序代码需要历史代码的查找，回退等功能"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["VCS 保存修改历史，使用的是", jsxRuntime.jsx(_components.strong, {
        children: "主动提交"
      }), "改动的机制"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "多人合作的同步需求中央仓库",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#多人合作的同步需求中央仓库",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "多人合作的同步需求：中央仓库"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["多个人共同开发需要一个", jsxRuntime.jsx(_components.strong, {
        children: "中央仓库"
      }), "作为代码的存储中心"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "中央式版本控制系统",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#中央式版本控制系统",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "中央式版本控制系统"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "第一次加入团队时，把中央仓库的代码取下来"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "写完的新功能提交到中央仓库"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "同事提交到中央仓库的新代码，及时同步下来"
      }), "\n"]
    })]
  });
}
function MDXContent$n(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$n, {
      ...props
    })
  }) : _createMdxContent$n(props);
}
const GetFrontMatter$n = () => frontmatter$n;
const _1______VCS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$n,
  GetToc: GetToc$n,
  default: MDXContent$n
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$m = () => [{
  "id": "优缺点",
  "text": "优缺点",
  "depth": 2
}];
const frontmatter$m = void 0;
function _createMdxContent$m(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "分布式版本控制系统-dvcs",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#分布式版本控制系统-dvcs",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "分布式版本控制系统 DVCS"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "分布式 VCS （Distributed VCS ）和中央式的区别在于，分布式 VCS 除了中央仓库之外，还有本地仓库"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "中央仓库的主要作用"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "中央式 VCS :"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "保存版本历史"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "同步团队代码"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "分布式 VCS:"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "同步团队代码"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "注意，分布式 VCS 也保存了历史版本，但是历史版本更多的是作为团队间的同步中转站"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "优缺点",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#优缺点",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "优缺点"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "优点："
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "无需联网，速度更快"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "提交更细"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "缺点："
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "clone 慢"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "本地需要存储"
      }), "\n"]
    })]
  });
}
function MDXContent$m(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$m, {
      ...props
    })
  }) : _createMdxContent$m(props);
}
const GetFrontMatter$m = () => frontmatter$m;
const _2_________DVCS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$m,
  GetToc: GetToc$m,
  default: MDXContent$m
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$l = () => [{
  "id": "引用commit-的快捷方式",
  "text": "引用：commit 的快捷方式",
  "depth": 2
}, {
  "id": "head当前-commit-的引用",
  "text": "HEAD：当前 commit 的引用",
  "depth": 2
}, {
  "id": "branch-引用指向分支的最新-commit",
  "text": "branch 引用：指向分支的最新 commit",
  "depth": 2
}, {
  "id": "操作",
  "text": "操作",
  "depth": 2
}, {
  "id": "mastermain-默认-branch",
  "text": "master/main: 默认 branch",
  "depth": 2
}];
const frontmatter$l = void 0;
function _createMdxContent$l(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "head-与-master-与-branch",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#head-与-master-与-branch",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HEAD 与 master 与 branch"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "引用commit-的快捷方式",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#引用commit-的快捷方式",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "引用：commit 的快捷方式"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["commit 都有一串 hash 值，很长：", jsxRuntime.jsx(_components.code, {
        children: "d6687fee2c0be551e0a4819053ad88ee42dc91b9"
      }), "\n可以用前几位来指定这个 commit：", jsxRuntime.jsx(_components.code, {
        children: "d6687fe"
      })]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "引用就是 字符串，如"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["commit 的引用：", jsxRuntime.jsx(_components.code, {
          children: "d6687fee2c0be551e0a4819053ad88ee42dc91b9"
        })]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["branch 的引用：", jsxRuntime.jsx(_components.code, {
          children: "ref: refs/heads/fix"
        })]
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "head当前-commit-的引用",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#head当前-commit-的引用",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HEAD：当前 commit 的引用"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "一般是指向当前分支，当前分支指向，最新的 commit"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "branch-引用指向分支的最新-commit",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#branch-引用指向分支的最新-commit",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "branch 引用：指向分支的最新 commit"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "branch 是平等的，master 不同但是并不高一级"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "HEAD 除了可以指向 commit，还可以指向一个 branch，当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "当然通过 reset 指令可以让 HEAD 直接指向 commit"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "操作",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#操作",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "操作"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["创建：", jsxRuntime.jsx(_components.code, {
          children: "git branch feature1"
        })]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["切换：", jsxRuntime.jsx(_components.code, {
          children: "git checkout feature1"
        })]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["创建并切换：", jsxRuntime.jsx(_components.code, {
          children: "git checkout -b feature1"
        })]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["删除：", jsxRuntime.jsx(_components.code, {
          children: "git branch -d feature1"
        })]
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "注意："
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "HEAD 指向的 branch 不能删除"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "由于 Git 中的 branch 只是一个引用，所以删除 branch 的操作也只会删掉这个引用，并不会删除任何的 commit。不过如果一个 commit 不在任何一个 branch 的「路径」上，或者换句话说，如果没有任何一个 branch 可以回溯到这条 commit，它会被 Git 的回收机制删除掉"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "出于安全考虑，没有被合并到 master 过的 branch 在删除时会失败，但是可以把 -d 改成 -D，小写换成大写，就能删除"
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "mastermain-默认-branch",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#mastermain-默认-branch",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "master/main: 默认 branch"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "主分支，仅创建仓库或者下载仓库时时默认切换到此分支"
    })]
  });
}
function MDXContent$l(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$l, {
      ...props
    })
  }) : _createMdxContent$l(props);
}
const GetFrontMatter$l = () => frontmatter$l;
const _3HEAD_master_branch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$l,
  GetToc: GetToc$l,
  default: MDXContent$l
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$k = () => [];
const frontmatter$k = void 0;
function _createMdxContent$k(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "push-的本质",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#push-的本质",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "push 的本质"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 git config 修改 push.default 来改变 push 时的行为逻辑"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master/main）的"
    })]
  });
}
function MDXContent$k(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$k, {
      ...props
    })
  }) : _createMdxContent$k(props);
}
const GetFrontMatter$k = () => frontmatter$k;
const _4push = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$k,
  GetToc: GetToc$k,
  default: MDXContent$k
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$j = () => [{
  "id": "含义",
  "text": "含义",
  "depth": 2
}, {
  "id": "冲突",
  "text": "冲突",
  "depth": 2
}];
const frontmatter$j = void 0;
function _createMdxContent$j(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "merge",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#merge",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "merge"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "pull 的内部操作其实是把远程仓库取到本地后（使用的是 fetch），再用一次 merge 来把远端仓库的新 commits 合并到本地"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["即", jsxRuntime.jsx(_components.code, {
        children: "git fetch"
      }), " ", jsxRuntime.jsx(_components.code, {
        children: "git merge origin/HEAD"
      })]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "fetch 会更新远程仓库的本地镜像 origin/HEAD 和 origin/master\n随后 merge 针对没有冲突的 commit 会进行 fast-forward 快速前移来移动到最新 commit"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "含义",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#含义",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "含义"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "从目标 commit 和当前 commit （即 HEAD 所指向的 commit）分叉的位置起，把目标 commit 的路径上的所有 commit 的内容一并应用到当前 commit，然后自动生成一个新的 commit"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "冲突",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#冲突",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "冲突"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "自动合并能力："
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "不同文件，A 文件，B 文件"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "同一文件不同行，第 1 行，第 2 行"
      }), "\n"]
    })]
  });
}
function MDXContent$j(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$j, {
      ...props
    })
  }) : _createMdxContent$j(props);
}
const GetFrontMatter$j = () => frontmatter$j;
const _5merge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$j,
  GetToc: GetToc$j,
  default: MDXContent$j
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$i = () => [];
const frontmatter$i = void 0;
function _createMdxContent$i(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "feature-branch",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#feature-branch",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "feature branch"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "最流行的工作流"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "任何新的功能（feature）或 bug 修复全都新建一个 branch 来写"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "branch 写完后，合并到 master，然后删掉这个 branch"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "会不听的分支合并分支合并，如果不想分支留着可以用 rebase"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "PR 默认也是这种模式，当然也可以选择 rebase 等模式"
    })]
  });
}
function MDXContent$i(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$i, {
      ...props
    })
  }) : _createMdxContent$i(props);
}
const GetFrontMatter$i = () => frontmatter$i;
const _6feature_branch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$i,
  GetToc: GetToc$i,
  default: MDXContent$i
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$h = () => [{
  "id": "rebase--i",
  "text": "rebase -i",
  "depth": 2
}];
const frontmatter$h = void 0;
function _createMdxContent$h(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "rebase",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#rebase",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "rebase"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "！禁止从 master 向其他 branch 执行 rebase"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "将分支 fix 的新 commit 都放在主分支 master 的最新 commit 后面"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "应该在分支 fix 没有 push 到远程仓库时使用较好，如果已经 push 见以下情况："
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "分支 master 分支 fix 都进行了新的开发并 push"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "分支 master 有了新 commit-m"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "分支 fix 也有了新 commit-f"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["在分支 fix", jsxRuntime.jsx(_components.code, {
        children: "git rebase master"
      }), "会重新 提取 commit-f 并变基到当前 maser，会处于更改后未 push 的状态"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "此时 fix 在 master 的最新 commit-m 处，origin/fix 在 fix 最新 commit-f 处"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["然后", jsxRuntime.jsx(_components.code, {
        children: "git checkout master"
      }), " ", jsxRuntime.jsx(_components.code, {
        children: "git merge fix"
      }), "可以完成 master 的 rebase 更新，通过 merge 的 fast-forward 情况"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["但是如果 ", jsxRuntime.jsx(_components.code, {
        children: "git checkout fix"
      }), " 再 ", jsxRuntime.jsx(_components.code, {
        children: "git push"
      }), " 会发现有两次 commit-f 提交并产生了 merge"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "因为 fix 和 origin/fix 存在冲突，fix 领先于 origin/fix，领先的就是变基操作复制的 commit-f"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "因为 rebase 提取的 commit 的 hash 和之前的 commit 不同，而且对同一个文件进行了更新，所以需要 merge"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["解决方案是对 fix 直接", jsxRuntime.jsx(_components.code, {
        children: "git push -f"
      }), "覆盖 fix 分支"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "由于是个人分支 fix 所以 -f 影响不大"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "但是尽量避免这种操作，仅在分支不需要继续开发或者未 push 时进行 rebase"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "rebase--i",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#rebase--i",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "rebase -i"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "常用于整理与合并 commit"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "比如需要合并三个 commit 为一个，合并 432\ncommit-1\ncommit-2\ncommit-3\ncommit-4"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["则", jsxRuntime.jsx(_components.code, {
        children: "git rebase -i commit-1"
      }), "\n对 commit-4、commit-3、commit-2 进行处理\npick 为保留，squash 为合并入前一个 commit"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "同时可以调整顺序"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "pick commit-1\npick commit-2\npick commit-4\ns commit-3"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["合并后因为本地与远程记录不同，提交同样需要", jsxRuntime.jsx(_components.code, {
        children: "git push -f"
      })]
    })]
  });
}
function MDXContent$h(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$h, {
      ...props
    })
  }) : _createMdxContent$h(props);
}
const GetFrontMatter$h = () => frontmatter$h;
const _7rebase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$h,
  GetToc: GetToc$h,
  default: MDXContent$h
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$g = () => [];
const frontmatter$g = void 0;
function _createMdxContent$g(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "revert",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#revert",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "revert"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: [jsxRuntime.jsx(_components.code, {
        children: "git revert HEAD^"
      }), "\n会增加一条新的 commit，它的内容和倒数第二个 commit 是相反的，从而和倒数第二个 commit 相互抵消，达到撤销的效果"]
    })]
  });
}
function MDXContent$g(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$g, {
      ...props
    })
  }) : _createMdxContent$g(props);
}
const GetFrontMatter$g = () => frontmatter$g;
const _8revert = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$g,
  GetToc: GetToc$g,
  default: MDXContent$g
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$f = () => [];
const frontmatter$f = void 0;
function _createMdxContent$f(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "参考",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.a, {
        href: "https://juejin.cn/book/6844733697996881928?enter_from=search_result&utm_source=search",
        children: "小册"
      })
    })]
  });
}
function MDXContent$f(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$f, {
      ...props
    })
  }) : _createMdxContent$f(props);
}
const GetFrontMatter$f = () => frontmatter$f;
const _99readme$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$f,
  GetToc: GetToc$f,
  default: MDXContent$f
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$e = () => [{
  "id": "reset-的本质移动-head-以及它所指向的-branch",
  "text": "reset 的本质：移动 HEAD 以及它所指向的 branch",
  "depth": 2
}, {
  "id": "reset---hard重置工作目录与-add-暂存区",
  "text": "reset --hard：重置工作目录与 add 暂存区",
  "depth": 2
}, {
  "id": "reset---soft保留工作目录与-add-暂存区",
  "text": "reset --soft：保留工作目录与 add 暂存区",
  "depth": 2
}, {
  "id": "reset-不加参数保留工作目录并清空-add-暂存区",
  "text": "reset 不加参数：保留工作目录，并清空 add 暂存区",
  "depth": 2
}];
const frontmatter$e = void 0;
function _createMdxContent$e(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "reset",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "reset-的本质移动-head-以及它所指向的-branch",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset-的本质移动-head-以及它所指向的-branch",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset 的本质：移动 HEAD 以及它所指向的 branch"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "实质行为并不是撤销，而是移动 HEAD ，并且「捎带」上 HEAD 所指向的 branch（如果有的话）"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "所以同理，reset --hard 不仅可以撤销提交，还可以用来把 HEAD 和 branch 移动到其他的任何地方"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.code, {
        children: "git reset --hard branch2"
      })
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "直接让 branch1 值与 branch2 相同"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "reset---hard重置工作目录与-add-暂存区",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset---hard重置工作目录与-add-暂存区",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset --hard：重置工作目录与 add 暂存区"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "工作目录里的内容会被完全重置为和 HEAD 的新位置相同的内容。"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "就是你的未 commit 提交的修改会被全部丢弃，但是不影响已经 commit 的内容"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "reset---soft保留工作目录与-add-暂存区",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset---soft保留工作目录与-add-暂存区",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset --soft：保留工作目录与 add 暂存区"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "reset --soft 会在重置 HEAD 和 branch 时，保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "就是会自动 add 不同的文件并保留之前的 add"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "reset-不加参数保留工作目录并清空-add-暂存区",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset-不加参数保留工作目录并清空-add-暂存区",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset 不加参数：保留工作目录，并清空 add 暂存区"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "默认使用 --mixed 参数"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "就是撤销 add"
    })]
  });
}
function MDXContent$e(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$e, {
      ...props
    })
  }) : _createMdxContent$e(props);
}
const GetFrontMatter$e = () => frontmatter$e;
const _9reset = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$e,
  GetToc: GetToc$e,
  default: MDXContent$e
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$d = () => [];
const frontmatter$d = void 0;
function _createMdxContent$d(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "参考",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.a, {
        href: "https://q.shanyue.tech/",
        children: "山月"
      })
    })]
  });
}
function MDXContent$d(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$d, {
      ...props
    })
  }) : _createMdxContent$d(props);
}
const GetFrontMatter$d = () => frontmatter$d;
const _99readme$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$d,
  GetToc: GetToc$d,
  default: MDXContent$d
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$c = () => [{
  "id": "c",
  "text": "c++",
  "depth": 2
}, {
  "id": "js",
  "text": "js",
  "depth": 2
}];
const frontmatter$c = void 0;
function _createMdxContent$c(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "引用",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#引用",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "引用"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "c",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#c",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "c++"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "指针：指向的内存地址，直接访问是内存地址，通过*访问值"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "指针常量（引用） int * const p：是指针的常量，不能切换指向，和 js 无可比性"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "常量指针 const int * p：指向常量的指针"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "js",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#js",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "js"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "js 没有指针"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "js 的引用可以对比 c++的指针，同样是指向内存地址，但是 js 直接访问就是值"
    })]
  });
}
function MDXContent$c(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$c, {
      ...props
    })
  }) : _createMdxContent$c(props);
}
const GetFrontMatter$c = () => frontmatter$c;
const _1__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$c,
  GetToc: GetToc$c,
  default: MDXContent$c
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$b = () => [];
const frontmatter$b = void 0;
function _createMdxContent$b(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "运算符",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#运算符",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "运算符"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "赋值运算符"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "优先级"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "结合性，只有在优先级相同时，结合性才发挥作用\n赋值运算符=是右结合，即从右开始加括号，如 a = b = c = 3 为 a = (b = (c = 3))"
      }), "\n"]
    })]
  });
}
function MDXContent$b(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$b, {
      ...props
    })
  }) : _createMdxContent$b(props);
}
const GetFrontMatter$b = () => frontmatter$b;
const _2___ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$b,
  GetToc: GetToc$b,
  default: MDXContent$b
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$a = () => [{
  "id": "keyby",
  "text": "keyBy",
  "depth": 2
}, {
  "id": "mapkeys",
  "text": "mapKeys",
  "depth": 3
}, {
  "id": "merge",
  "text": "merge",
  "depth": 3
}];
const frontmatter$a = void 0;
function _createMdxContent$a(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "loadash-手写",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#loadash-手写",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "loadash 手写"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "keyby",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#keyby",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "keyBy"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsxs(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: [jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "export"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " keyBy"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "K"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " keyof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "arr"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[], "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "key"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " K"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " arr."
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "reduce"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "pre"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "cur"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " itemKey"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cur[key];"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " itemKey "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: ' "string"'
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " itemKey "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: ' "number"'
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      pre[itemKey "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cur;"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " pre;"
            })]
          }), "\n", jsxRuntime.jsxs(_components.span, {
            "data-line": "",
            children: [jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, {} "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Record"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "string"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">);"
            })]
          }), "\n", jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: jsxRuntime.jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h3, {
      id: "mapkeys",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#mapkeys",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "mapKeys"]
    }), "\n", jsxRuntime.jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsxRuntime.jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "ts",
        "data-theme": "github-light",
        children: jsxRuntime.jsx(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: jsxRuntime.jsx(_components.span, {
            "data-line": "",
            children: " "
          })
        })
      })
    }), "\n", jsxRuntime.jsxs(_components.h3, {
      id: "merge",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#merge",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "merge"]
    })]
  });
}
function MDXContent$a(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$a, {
      ...props
    })
  }) : _createMdxContent$a(props);
}
const GetFrontMatter$a = () => frontmatter$a;
const _3lodash__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$a,
  GetToc: GetToc$a,
  default: MDXContent$a
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$9 = () => [];
const frontmatter$9 = void 0;
function _createMdxContent$9(props) {
  const _components = {
    a: "a",
    h1: "h1",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(_components.h1, {
    id: "内存",
    children: [jsxRuntime.jsx(_components.a, {
      className: "autolink-headings",
      href: "#内存",
      children: jsxRuntime.jsx(_components.span, {
        style: {
          marginRight: "4px"
        },
        children: "#"
      })
    }), "内存"]
  });
}
function MDXContent$9(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$9, {
      ...props
    })
  }) : _createMdxContent$9(props);
}
const GetFrontMatter$9 = () => frontmatter$9;
const _13__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$9,
  GetToc: GetToc$9,
  default: MDXContent$9
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$8 = () => [{
  "id": "单线程",
  "text": "单线程",
  "depth": 2
}, {
  "id": "在线程运行过程中处理新任务",
  "text": "在线程运行过程中处理新任务",
  "depth": 2
}, {
  "id": "处理其他线程发送过来的任务",
  "text": "处理其他线程发送过来的任务",
  "depth": 2
}, {
  "id": "处理其他进程发送过来的任务",
  "text": "处理其他进程发送过来的任务",
  "depth": 2
}, {
  "id": "消息队列中的任务类型",
  "text": "消息队列中的任务类型",
  "depth": 2
}, {
  "id": "页面使用单线程的缺点",
  "text": "页面使用单线程的缺点",
  "depth": 2
}, {
  "id": "总结",
  "text": "总结",
  "depth": 2
}];
const frontmatter$8 = void 0;
function _createMdxContent$8(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "消息队列和事件循环",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#消息队列和事件循环",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "消息队列和事件循环"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "单线程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#单线程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "单线程"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "一个线程中去执行任务"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "在线程运行过程中处理新任务",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#在线程运行过程中处理新任务",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "在线程运行过程中处理新任务"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "要想在线程运行过程中，能接收并执行新的任务，就需要采用事件(任务)循环机制\n不停的循环接受事件(任务)，接受后处理事件(任务)"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "处理其他线程发送过来的任务",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#处理其他线程发送过来的任务",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "处理其他线程发送过来的任务"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "渲染主线程会频繁接收到来自于 IO 线程的一些任务，比如鼠标点击，资源加载完成等"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "使用消息队列存放要执行的任务，IO 线程中产生的新任务添加进消息队列尾部"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "事件循环从队列头部取出任务"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "处理其他进程发送过来的任务",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#处理其他进程发送过来的任务",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "处理其他进程发送过来的任务"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "渲染进程专门有一个 IO 线程用来接收其他进程传进来的消息"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "消息队列中的任务类型",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#消息队列中的任务类型",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "消息队列中的任务类型"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。\nJavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "页面使用单线程的缺点",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#页面使用单线程的缺点",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "页面使用单线程的缺点"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "第一个问题是如何处理高优先级的任务。"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "通常我们把消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "执行宏任务的过程中，如果 DOM 有变化，那么就会将该变化添加到微任务列表中，宏任务中的主要功能都直接完成之后，执行当前宏任务中的微任务"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "微任务常用的就是 promise"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "总结",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#总结",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "总结"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "如果有一些确定好的任务，可以使用一个单线程来按照顺序处理这些任务，这是第一版线程模型。"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "要在线程执行过程中接收并处理新的任务，就需要引入循环语句和事件系统，这是第二版线程模型。"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "如果要接收其他线程发送过来的任务，就需要引入消息队列，这是第三版线程模型。"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "如果其他进程想要发送任务给页面主线程，那么先通过 IPC 把任务发送给渲染进程的 IO 线程，IO 线程再把任务发送给页面主线程。"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "消息队列机制并不是太灵活，为了适应效率和实时性，引入了微任务。"
      }), "\n"]
    })]
  });
}
function MDXContent$8(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$8, {
      ...props
    })
  }) : _createMdxContent$8(props);
}
const GetFrontMatter$8 = () => frontmatter$8;
const _16_________ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$8,
  GetToc: GetToc$8,
  default: MDXContent$8
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$7 = () => [];
const frontmatter$7 = void 0;
function _createMdxContent$7(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "浏览器进程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器进程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器进程"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "浏览器进程：界面显示、用户交互、子进程管理，同时提供存储等功能"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "渲染进程：安全考虑，渲染进程都是运行在沙箱模式下，包括排版引擎 Blink 和 JavaScript 引擎 V8 ，可以将 HTML、CSS、JS 转换为页面"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "GPU 进程：3D CSS、Chrome UI、网页"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "网络进程：网络资源加载"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "插件进程：运行插件，因为插件容易崩溃所以分离为进程"
      }), "\n"]
    })]
  });
}
function MDXContent$7(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$7, {
      ...props
    })
  }) : _createMdxContent$7(props);
}
const GetFrontMatter$7 = () => frontmatter$7;
const _1_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$7,
  GetToc: GetToc$7,
  default: MDXContent$7
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$6 = () => [{
  "id": "ip-internet-protocol-网际协议",
  "text": "IP Internet Protocol 网际协议",
  "depth": 2
}, {
  "id": "udp-user-datagram-protocol-用户数据包协议",
  "text": "UDP User Datagram Protocol 用户数据包协议",
  "depth": 2
}, {
  "id": "tcp-transmission-control-protocol-传输控制协议",
  "text": "TCP Transmission Control Protocol 传输控制协议",
  "depth": 2
}, {
  "id": "tcpip-四层模型",
  "text": "TCP/IP 四层模型",
  "depth": 2
}];
const frontmatter$6 = void 0;
function _createMdxContent$6(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "tcp-协议",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcp-协议",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP 协议"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "ip-internet-protocol-网际协议",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#ip-internet-protocol-网际协议",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "IP Internet Protocol 网际协议"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "IP 地址就是计算机的地址，通过 IP 将数据包传递给另一个主机"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "数据包会携带 IP 头"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "udp-user-datagram-protocol-用户数据包协议",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#udp-user-datagram-protocol-用户数据包协议",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "UDP User Datagram Protocol 用户数据包协议"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["UDP 通过", jsxRuntime.jsx(_components.strong, {
        children: "端口号"
      }), "把数据包传递给对应的程序"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "数据包会携带 UDP 头（含本机目标端口号）和 IP 头"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "对于错误的数据包，UDP 并不提供重发机制，只是丢弃当前的包，而且 UDP 在发送之后也无法知道是否能达到目的地"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "UDP 不能保证数据可靠性，但是传输速度却非常快"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "tcp-transmission-control-protocol-传输控制协议",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcp-transmission-control-protocol-传输控制协议",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP Transmission Control Protocol 传输控制协议"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "TCP 是一种面向连接的、可靠的、基于字节流的传输层通信协议"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "TCP 提供丢失重传机制"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "TCP 引入了数据包排序机制，乱序数据包可以组合成完整文件"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "数据包会携带 TCP 头（含本机目标端口号和序号）和 IP 头"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "建立连接：连接过程会三次握手，会发送三个数据包才会确认连接建立"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "传输数据：接受端会对每个数据包发出确认操作，发送端没有收到确认信息的会触发重发机制，而且接收端会按照 TCP 头中的序号排序数据包"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "断开连接：断开过程会四次挥手，保证双方都断开连接"
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "tcpip-四层模型",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcpip-四层模型",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP/IP 四层模型"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "IEEE802->IP->TCP/UDP->HTTP"
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.img, {
        src: "/img/note/2/2-1.jpg",
        alt: "2-1"
      })
    })]
  });
}
function MDXContent$6(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$6, {
      ...props
    })
  }) : _createMdxContent$6(props);
}
const GetFrontMatter$6 = () => frontmatter$6;
const _2TCP__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$6,
  GetToc: GetToc$6,
  default: MDXContent$6
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$5 = () => [{
  "id": "dns-domain-name-system-域名系统",
  "text": "DNS Domain Name System 域名系统",
  "depth": 2
}, {
  "id": "浏览器发起-http-请求的流程",
  "text": "浏览器发起 HTTP 请求的流程",
  "depth": 2
}, {
  "id": "服务器处理-http-请求的流程",
  "text": "服务器处理 HTTP 请求的流程",
  "depth": 2
}];
const frontmatter$5 = void 0;
function _createMdxContent$5(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "http-协议",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#http-协议",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HTTP 协议"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "HTTP 是一种允许浏览器向服务器获取资源的协议，是 Web 的基础"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "dns-domain-name-system-域名系统",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#dns-domain-name-system-域名系统",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "DNS Domain Name System 域名系统"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["将域名与 IP 地址做一一映射\n浏览器有 DNS", jsxRuntime.jsx(_components.strong, {
        children: "数据缓存服务"
      }), "，解析过的域名会缓存，减少请求"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "浏览器发起-http-请求的流程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器发起-http-请求的流程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器发起 HTTP 请求的流程"]
    }), "\n", jsxRuntime.jsxs(_components.ol, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsxs(_components.p, {
          children: ["构建请求行\n请求方法 + 请求 URI + HTTP 协议版本\n例如：", jsxRuntime.jsx(_components.code, {
            children: "GET /index.html HTTP/1.1"
          })]
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "查找缓存"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "浏览器会在请求前查询浏览器缓存中是否有该文件，如果有则结束请求"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "准备 IP 地址与端口"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "现在只有 URL，HTTP 需要与服务器建立 TCP 连接就需要 IP 地址与端口，所以通过一下方式获得"
        }), "\n", jsxRuntime.jsxs(_components.ul, {
          children: ["\n", jsxRuntime.jsx(_components.li, {
            children: "请求 DNS 返回域名对应的 IP 地址"
          }), "\n", jsxRuntime.jsx(_components.li, {
            children: "从 URL 中获取端口号，HTTP 默认为 80"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "等待 TCP 队列"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "http/1.1 一个 tcp 同时只能处理一个请求，浏览器会为每个域名维护 6 个 tcp 连接"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "但是每个 tcp 连接是可以复用的，也就是处理完一个请求之后，不断开这个 tcp 连接，可以用来处理下个 http 请求"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "不过 http2 是可以并行请求资源的，所以如果使用 http2，浏览器只会为每个域名维护一个 tcp 连接"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "建立 TCP 连接"
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsx(_components.p, {
          children: "发送 HTTP 请求"
        }), "\n", jsxRuntime.jsx(_components.p, {
          children: "发送请求行\n发送请求头\n发送请求体(POST)"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "服务器处理-http-请求的流程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#服务器处理-http-请求的流程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "服务器处理 HTTP 请求的流程"]
    }), "\n", jsxRuntime.jsxs(_components.ol, {
      children: ["\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsxs(_components.p, {
          children: ["返回请求\n返回响应行(协议版本+状态码 ", jsxRuntime.jsx(_components.code, {
            children: "HTTP/1.1 200 OK"
          }), ")\n返回响应头\n返回响应体"]
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsxs(_components.p, {
          children: ["断开连接\n服务器返回完后会断链接\n但是如果请求头中有", jsxRuntime.jsx(_components.code, {
            children: "Connection:Keep-Alive"
          }), "会保持 TCP 连接"]
        }), "\n"]
      }), "\n", jsxRuntime.jsxs(_components.li, {
        children: ["\n", jsxRuntime.jsxs(_components.p, {
          children: ["重定向\n响应头", jsxRuntime.jsx(_components.code, {
            children: "Location"
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$5(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$5, {
      ...props
    })
  }) : _createMdxContent$5(props);
}
const GetFrontMatter$5 = () => frontmatter$5;
const _3HTTP__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$5,
  GetToc: GetToc$5,
  default: MDXContent$5
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$4 = () => [{
  "id": "dns-缓存",
  "text": "DNS 缓存",
  "depth": 2
}, {
  "id": "页面资源缓存",
  "text": "页面资源缓存",
  "depth": 2
}, {
  "id": "登录状态",
  "text": "登录状态",
  "depth": 2
}];
const frontmatter$4 = void 0;
function _createMdxContent$4(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "浏览器缓存",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器缓存",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器缓存"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "dns-缓存",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#dns-缓存",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "DNS 缓存"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "缓存域名对应的 IP"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "页面资源缓存",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#页面资源缓存",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "页面资源缓存"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["通过响应头", jsxRuntime.jsx(_components.code, {
        children: "Cache-Control"
      }), "设置是否缓存该资源"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["缓存过期后浏览器会继续发起请求并携带请求头", jsxRuntime.jsx(_components.code, {
        children: 'If-None-Match:"4f80f-13c-3a1xb12a"'
      })]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "服务器会根据该请求头判断资源是否更新\n没有更新则返回 状态码 304\n如果有更新则返回新资源"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "登录状态",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#登录状态",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "登录状态"]
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["服务器接受到账号密码后查询数据库，如果正确则生成 uid 并记录，返回在响应头\n", jsxRuntime.jsx(_components.code, {
        children: "Set-Cookie: UID=3431uad;"
      })]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "浏览器解析响应头后会保存在 Cookie"
    }), "\n", jsxRuntime.jsxs(_components.p, {
      children: ["用户再次访问时浏览器会将 uid 携带在请求头", jsxRuntime.jsx(_components.code, {
        children: "Cookie: UID=3431uad;"
      })]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "服务器收到 Cookie 后会查询记录下的 uid 数据，如果已经存在，则返回登录后的用户数据"
    })]
  });
}
function MDXContent$4(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4(props);
}
const GetFrontMatter$4 = () => frontmatter$4;
const _4_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$4,
  GetToc: GetToc$4,
  default: MDXContent$4
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$3 = () => [{
  "id": "用户输入",
  "text": "用户输入",
  "depth": 2
}, {
  "id": "网络进程",
  "text": "网络进程",
  "depth": 2
}, {
  "id": "准备渲染进程",
  "text": "准备渲染进程",
  "depth": 2
}, {
  "id": "提交文档",
  "text": "提交文档",
  "depth": 2
}, {
  "id": "渲染阶段",
  "text": "渲染阶段",
  "depth": 2
}];
const frontmatter$3 = void 0;
function _createMdxContent$3(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "导航流程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#导航流程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "导航流程"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.img, {
        src: "/img/note/2/5-1.jpg",
        alt: "5-1"
      })
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "用户发出 URL 请求到页面开始解析的这个过程，就叫做导航"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "用户输入",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#用户输入",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "用户输入"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "输入后 地址栏会判断输入的关键字是搜索内容，还是请求的 URL："
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "搜索内容：启用搜索引擎"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "URL：如果符合 URL 规则，浏览器会加上协议"
      }), "\n"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "回车后 先触发 beforeunload 事件，可以进行询问用户是否离开等操作\n然后进入加载状态，等待提交文档"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "网络进程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#网络进程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "网络进程"]
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "查找本地缓存是否缓存了该资源，如果缓存就直接返回资源"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "如果没有缓存，进行 DNS 解析，获取 IP 地址"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "利用 IP 地址和服务器建立 TCP 连接，如果请求协议是 HTTPS，那么还需要先建立 TLS 连接"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "浏览器端会构建请求行、请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "服务器根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "重定向：状态码是 301,302,307,308 时根据响应头 Location 重定向，可以通过这个方式将 http 请求 重定向为 https 请求"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "响应数据：通过 Content-Type 响应头区分响应体数据类型，比如 HTML 和 js"
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "准备渲染进程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#准备渲染进程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "准备渲染进程"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "Chrome 会为不同站页面分配一个渲染进程，进程在沙箱内"
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "提交文档",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#提交文档",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "提交文档"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程"
    }), "\n", jsxRuntime.jsxs(_components.ul, {
      children: ["\n", jsxRuntime.jsx(_components.li, {
        children: "首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "渲染进程接受到“提交文档”消息后，从网络进程接受文档数据，接受完成后给浏览器进程发送“确认提交”消息"
      }), "\n", jsxRuntime.jsx(_components.li, {
        children: "浏览器进程收到“确认提交”的消息后，更新浏览器界面历史状态、安全状态、URL ，然后更新页面页面"
      }), "\n"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "渲染阶段",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#渲染阶段",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "渲染阶段"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "文档提交后，渲染进程开始页面解析与子资源加载，并停止加载动画"
    })]
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3(props);
}
const GetFrontMatter$3 = () => frontmatter$3;
const _5____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$3,
  GetToc: GetToc$3,
  default: MDXContent$3
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$2 = () => [];
const frontmatter$2 = void 0;
function _createMdxContent$2(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "渲染流程",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#渲染流程",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "渲染流程"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "DOM 生成\n样式计算\n布局\n。。。"
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
const GetFrontMatter$2 = () => frontmatter$2;
const _6____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$2,
  GetToc: GetToc$2,
  default: MDXContent$2
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$1 = () => [{
  "id": "chrome-的-dns-缓存",
  "text": "Chrome 的 dns 缓存",
  "depth": 2
}];
const frontmatter$1 = void 0;
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "浏览器的-dns-缓存",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器的-dns-缓存",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器的 dns 缓存"]
    }), "\n", jsxRuntime.jsxs(_components.h2, {
      id: "chrome-的-dns-缓存",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#chrome-的-dns-缓存",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Chrome 的 dns 缓存"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: "chrome://net-internals/#dns"
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const GetFrontMatter$1 = () => frontmatter$1;
const _98_____dns__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$1,
  GetToc: GetToc$1,
  default: MDXContent$1
}, Symbol.toStringTag, { value: "Module" }));
const GetToc = () => [];
const frontmatter = void 0;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [jsxRuntime.jsxs(_components.h1, {
      id: "参考",
      children: [jsxRuntime.jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsxRuntime.jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsxRuntime.jsx(_components.p, {
      children: jsxRuntime.jsx(_components.a, {
        href: "https://time.geekbang.org/column/intro/100033601?code=nQdm4VreDyrwzIsmJOa2fcr87sMexy98JSDAIn2etJo%253D&tab=catalog",
        children: "李兵"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsxRuntime.jsx(MDXLayout, {
    ...props,
    children: jsxRuntime.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const GetFrontMatter = () => frontmatter;
const _99readme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter,
  GetToc,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/", element: React.createElement(MDXContent$H), preload: () => Promise.resolve().then(() => index) },
  { path: "/%E5%9B%BE%E7%89%87/%E6%B5%8B%E8%AF%95.html", element: React.createElement(MDXContent$G), preload: () => Promise.resolve().then(() => __) },
  { path: "/%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/1%E5%95%8A1.html", element: React.createElement(MDXContent$F), preload: () => Promise.resolve().then(() => _1_1) },
  { path: "/%E7%AC%94%E8%AE%B0/98.%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0.html", element: React.createElement(MDXContent$E), preload: () => Promise.resolve().then(() => _98_____) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/1useLocalStorageState%E4%B8%8EuseSessionStorageState.html", element: React.createElement(MDXContent$D), preload: () => Promise.resolve().then(() => _1useLocalStorageState_useSessionStorageState) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/2useUpdateEffect%20%E4%B8%8E%20useUpdateLayoutEffectt.html", element: React.createElement(MDXContent$C), preload: () => Promise.resolve().then(() => _2useUpdateEffect___useUpdateLayoutEffectt) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/3useLatest%E4%B8%8EuseMemoizedFn.html", element: React.createElement(MDXContent$B), preload: () => Promise.resolve().then(() => _3useLatest_useMemoizedFn) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/4use(Raf)Timeout%E4%B8%8Euse(Raf)Interval%E4%B8%8EuseCountDown.html", element: React.createElement(MDXContent$A), preload: () => Promise.resolve().then(() => _4use_Raf_Timeout_use_Raf_Interval_useCountDown) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/5useRequest.html", element: React.createElement(MDXContent$z), preload: () => Promise.resolve().then(() => _5useRequest) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/6useMount%E4%B8%8EuseUnMount%E4%B8%8EuseMountedRefx.md.html", element: React.createElement(MDXContent$y), preload: () => Promise.resolve().then(() => _6useMount_useUnMount_useMountedRef_mdx) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/7useUpdate.html", element: React.createElement(MDXContent$x), preload: () => Promise.resolve().then(() => _7useUpdate) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/8useCreation.html", element: React.createElement(MDXContent$w), preload: () => Promise.resolve().then(() => _8useCreation) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/97useAnimationFrame%E5%92%8C%E8%AE%A1%E6%97%B6%E5%99%A8.html", element: React.createElement(MDXContent$v), preload: () => Promise.resolve().then(() => _97useAnimationFrame____) },
  { path: "/%E7%A6%BB%E8%B0%B1/6ahooks/9useDeepCompareEffect.html", element: React.createElement(MDXContent$u), preload: () => Promise.resolve().then(() => _9useDeepCompareEffect) },
  { path: "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro.html", element: React.createElement(MDXContent$t), preload: () => Promise.resolve().then(() => intro) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/0%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html", element: React.createElement(MDXContent$s), preload: () => Promise.resolve().then(() => _0____) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/10checkout.html", element: React.createElement(MDXContent$r), preload: () => Promise.resolve().then(() => _10checkout) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/11stash.html", element: React.createElement(MDXContent$q), preload: () => Promise.resolve().then(() => _11stash) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/12log%E4%B8%8Ereflog.html", element: React.createElement(MDXContent$p), preload: () => Promise.resolve().then(() => _12log_reflog) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/13cherry-pick.html", element: React.createElement(MDXContent$o), preload: () => Promise.resolve().then(() => _13cherryPick) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/1%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FVCS.html", element: React.createElement(MDXContent$n), preload: () => Promise.resolve().then(() => _1______VCS) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/2%E5%88%86%E5%B8%83%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FDVCS.html", element: React.createElement(MDXContent$m), preload: () => Promise.resolve().then(() => _2_________DVCS) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/3HEAD%E4%B8%8Emaster%E4%B8%8Ebranch.html", element: React.createElement(MDXContent$l), preload: () => Promise.resolve().then(() => _3HEAD_master_branch) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/4push.html", element: React.createElement(MDXContent$k), preload: () => Promise.resolve().then(() => _4push) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/5merge.html", element: React.createElement(MDXContent$j), preload: () => Promise.resolve().then(() => _5merge) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/6feature%20branch.html", element: React.createElement(MDXContent$i), preload: () => Promise.resolve().then(() => _6feature_branch) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/7rebase.html", element: React.createElement(MDXContent$h), preload: () => Promise.resolve().then(() => _7rebase) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/8revert.html", element: React.createElement(MDXContent$g), preload: () => Promise.resolve().then(() => _8revert) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/99readme.html", element: React.createElement(MDXContent$f), preload: () => Promise.resolve().then(() => _99readme$2) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/9reset.html", element: React.createElement(MDXContent$e), preload: () => Promise.resolve().then(() => _9reset) },
  { path: "/%E7%AC%94%E8%AE%B0/3http/99readme.html", element: React.createElement(MDXContent$d), preload: () => Promise.resolve().then(() => _99readme$1) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/1%E5%BC%95%E7%94%A8.html", element: React.createElement(MDXContent$c), preload: () => Promise.resolve().then(() => _1__) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/2%E8%BF%90%E7%AE%97%E7%AC%A6.html", element: React.createElement(MDXContent$b), preload: () => Promise.resolve().then(() => _2___) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/3lodash%E6%89%8B%E5%86%99.html", element: React.createElement(MDXContent$a), preload: () => Promise.resolve().then(() => _3lodash__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/13%E5%86%85%E5%AD%98.html", element: React.createElement(MDXContent$9), preload: () => Promise.resolve().then(() => _13__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/16%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html", element: React.createElement(MDXContent$8), preload: () => Promise.resolve().then(() => _16_________) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/1%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%9B%E7%A8%8B.html", element: React.createElement(MDXContent$7), preload: () => Promise.resolve().then(() => _1_____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/2TCP%E5%8D%8F%E8%AE%AE.html", element: React.createElement(MDXContent$6), preload: () => Promise.resolve().then(() => _2TCP__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/3HTTP%E5%8D%8F%E8%AE%AE.html", element: React.createElement(MDXContent$5), preload: () => Promise.resolve().then(() => _3HTTP__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/4%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98.html", element: React.createElement(MDXContent$4), preload: () => Promise.resolve().then(() => _4_____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/5%E5%AF%BC%E8%88%AA%E6%B5%81%E7%A8%8B.html", element: React.createElement(MDXContent$3), preload: () => Promise.resolve().then(() => _5____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/6%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B.html", element: React.createElement(MDXContent$2), preload: () => Promise.resolve().then(() => _6____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/98%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84dns%E7%BC%93%E5%AD%98.html", element: React.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => _98_____dns__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/99readme.html", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => _99readme) }
];
async function getPageData(pathname) {
  var _a, _b, _c, _d;
  const matched = routes.find((route) => route.path === pathname);
  let pageData = {
    pageType: "404",
    pagePath: pathname,
    toc: [],
    userConfig: config
  };
  if (matched) {
    const module2 = await matched.preload();
    pageData = {
      pageType: ((_b = (_a = module2 == null ? void 0 : module2.GetFrontMatter) == null ? void 0 : _a.call(module2)) == null ? void 0 : _b.pageType) || "doc",
      pagePath: pathname,
      frontmatter: ((_c = module2.GetFrontMatter) == null ? void 0 : _c.call(module2)) ?? {},
      toc: ((_d = module2.GetToc) == null ? void 0 : _d.call(module2)) ?? [],
      userConfig: config
    };
  }
  console.log(
    `${/* @__PURE__ */ new Date()}
页面数据：`,
    pageData
  );
  return pageData;
}
const PageDataContext = React.createContext({});
const usePageData = () => {
  return React.useContext(PageDataContext);
};
function ServerPageDataProvider({
  children,
  value,
  helmetContext
}) {
  const [pageData, setPageData] = React.useState(value.pageData);
  return /* @__PURE__ */ jsxRuntime.jsxs(PageDataContext.Provider, { value: { pageData, setPageData }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      TitleHelmet,
      {
        helmetContext,
        pageData
      }
    ),
    children
  ] });
}
const NAV_HEIGHT = 56;
const DARK_KEY = "ZEROPRESS_DARK";
function useDark() {
  return {
    toggle
  };
}
if (isBrowser()) {
  initDark();
}
function initDark() {
  const init = () => {
    if (localStorage.getItem(DARK_KEY) === "true") {
      const classList = document.documentElement.classList;
      classList.add("dark");
    }
  };
  window.addEventListener("storage", init);
}
function addDark() {
  const classList = document.documentElement.classList;
  classList.add("dark");
  localStorage.setItem(DARK_KEY, "true");
}
function removeDark() {
  const classList = document.documentElement.classList;
  classList.remove("dark");
  localStorage.setItem(DARK_KEY, "false");
}
function toggle() {
  const classList = document.documentElement.classList;
  if (classList.contains("dark")) {
    removeDark();
  } else {
    addDark();
  }
}
function useWindowScroll() {
  const [x, setX] = React.useState();
  const [y, setY] = React.useState();
  React.useEffect(() => {
    const handleScroll = () => {
      setX(window.scrollX);
      setY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return { x, y };
}
function Content({ location = "/" }) {
  const element = reactRouterDom.useRoutes(routes, normalizeUrl(location));
  return element;
}
function Link({
  href = "/",
  className,
  children,
  onClick
}) {
  const navigate = reactRouterDom.useNavigate();
  const isCsg = !(href == null ? void 0 : href.startsWith("http"));
  const handleCsgNavigate = async () => {
    onClick == null ? void 0 : onClick();
    navigate(href.slice(1));
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      ...isCsg ? { onClick: handleCsgNavigate } : { href, onClick },
      className: classNames("cursor-pointer", className),
      children
    }
  );
}
function useSidebar() {
  var _a;
  const { pageData } = usePageData();
  const sidebar = ((_a = pageData == null ? void 0 : pageData.userConfig.themeConfig) == null ? void 0 : _a.sidebar) ?? {};
  const { pathname } = reactRouterDom.useLocation();
  const sidebarEntry = Object.entries(sidebar).find(
    ([key]) => pathname.startsWith(key)
  );
  const sidebarDir = sidebarEntry == null ? void 0 : sidebarEntry[1];
  return { sidebar: sidebarDir };
}
function usePrevNextPage() {
  const { sidebar } = useSidebar();
  const { pathname } = reactRouterDom.useLocation();
  const flatted = (sidebar == null ? void 0 : sidebar.map((dir) => dir.items ?? []).flat()) ?? [];
  const currentPageIndex = flatted.findIndex((item) => (item == null ? void 0 : item.link) === pathname);
  const prevPage = flatted[currentPageIndex - 1];
  const nextPage = flatted[currentPageIndex + 1];
  return { prevPage, nextPage };
}
function useTocScroll() {
  const [index2, setIndex] = React.useState();
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const num = handleHighlight();
      setIndex(num);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        const num = handleHighlight();
        setIndex(num);
      });
    };
  }, []);
  return [index2, setIndex];
}
function handleHighlight() {
  var _a, _b;
  const headerADoms = Array.from(
    document.querySelectorAll(".autolink-headings")
  ).filter((item) => {
    var _a2;
    return ((_a2 = item.parentElement) == null ? void 0 : _a2.tagName) !== "H1";
  });
  const isBottom = window.scrollY + window.innerHeight >= window.document.documentElement.scrollHeight;
  if (isBottom) {
    return headerADoms.length - 1;
  }
  for (let i = 0; i < headerADoms.length; i++) {
    const currentADom = headerADoms[i];
    const nextADom = headerADoms[i + 1];
    const scrollTop = Math.ceil(window.scrollY);
    const currentTop = (((_a = currentADom.parentElement) == null ? void 0 : _a.offsetTop) ?? NAV_HEIGHT) - NAV_HEIGHT;
    if (i === 0 && scrollTop < currentTop) {
      return;
    }
    if (!nextADom) {
      return i;
    }
    const nextTop = (((_b = nextADom.parentElement) == null ? void 0 : _b.offsetTop) ?? NAV_HEIGHT) - NAV_HEIGHT;
    if (scrollTop >= currentTop && scrollTop < nextTop) {
      return i;
    }
  }
}
const useDisableScroll = (isOpen) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
};
function Footer() {
  const { prevPage, nextPage } = usePrevNextPage();
  return /* @__PURE__ */ jsxRuntime.jsx("footer", { className: "mt-[32px]", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-divider flex justify-between border-t pt-[24px]", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-[calc(50%-4px)]", children: prevPage && /* @__PURE__ */ jsxRuntime.jsx(Button, { text: prevPage.text, link: prevPage.link, children: "上一页" }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "w-[calc(50%-4px)]", children: nextPage && /* @__PURE__ */ jsxRuntime.jsx(Button, { text: nextPage.text, link: nextPage.link, children: "下一页" }) })
  ] }) });
}
function Button({
  children,
  text,
  link
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Link,
    {
      href: link,
      className: "border-divider hover:border-brand group block h-full w-full rounded-[8px] border px-[16px] py-[8px] transition-colors duration-300",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-text-2 text-[12px] font-[500] leading-[20px]", children }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: " text-text-2 group-hover:text-brand text-overflow text-[14px] font-[500] leading-[20px] transition-colors duration-300", children: text })
      ]
    }
  );
}
function MobileSiderbar({
  visible,
  onClick
}) {
  const { sidebar } = useSidebar();
  useDisableScroll(visible);
  if (!Array.isArray(sidebar) || sidebar.length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: classNames(
          "fixed inset-0 bg-[#00000060] transition-all duration-300",
          visible ? "opacity-100" : "opacity-0",
          visible ? "visible" : "invisible"
        ),
        onClick
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "aside",
      {
        className: classNames(
          "w-sidebar border-divider bg-bg-sidebar fixed inset-y-0 left-0 overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300",
          visible ? "-translate-x-0" : "-translate-x-full"
        ),
        children: sidebar.map((dir) => {
          return /* @__PURE__ */ jsxRuntime.jsx(
            SiderbarDir,
            {
              onClick,
              dir
            },
            dir.text
          );
        })
      }
    )
  ] });
}
function Siderbar() {
  const { sidebar } = useSidebar();
  if (!Array.isArray(sidebar) || Object.keys(sidebar).length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx("aside", { className: "mt-nav w-sidebar border-divider bg-bg-sidebar pc:-translate-x-0 fixed inset-y-0 left-0 -translate-x-full overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300", children: sidebar.map((dir) => {
    return /* @__PURE__ */ jsxRuntime.jsx(SiderbarDir, { dir }, dir.text);
  }) });
}
function SiderbarDir({
  dir,
  onClick
}) {
  var _a, _b;
  const [isExpand, setIsExpand] = React.useState(!dir.collapsed);
  if (!Array.isArray(dir.items) || dir.items.length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-divider mt-[4px] border-t first:mt-0 first:border-t-0", children: /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-text-1 mb-[6px] mt-[12px] flex cursor-pointer items-center justify-between font-[700]", children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: dir.link, onClick, children: dir.text }) }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-divider mt-[4px] border-t first:mt-0 first:border-t-0", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(
      "h2",
      {
        onClick: () => setIsExpand((pre) => !pre),
        className: "text-text-1 mb-[6px] mt-[12px] flex cursor-pointer items-center justify-between font-[700]",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: dir.text }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: classNames(
                isExpand ? "rotate-90" : "rotate-0",
                "icon-[carbon--chevron-right]",
                "transition-transform duration-300"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        style: {
          height: isExpand ? `${(((_a = dir.items) == null ? void 0 : _a.length) ?? 0) * 27}px` : "0"
        },
        className: classNames(
          "mb-[12px] flex flex-col overflow-hidden pl-[1rem] transition-[height] duration-300"
        ),
        children: (_b = dir.items) == null ? void 0 : _b.map((item) => /* @__PURE__ */ jsxRuntime.jsx(
          SiderbarItem,
          {
            onClick,
            item
          },
          item.link
        ))
      }
    )
  ] });
}
function SiderbarItem({
  item,
  onClick
}) {
  const { text, link } = item;
  const { pathname } = reactRouterDom.useLocation();
  const active = pathname === link;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Link,
    {
      href: link,
      onClick,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover text-overflow mb-[2px] p-[2px] text-[14px]"
      ),
      children: text
    }
  );
}
function MobileToc({
  visible,
  onClick,
  toc
}) {
  useDisableScroll(visible);
  if (!Array.isArray(toc) || toc.length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: classNames(
          "fixed inset-0 bg-[#00000060] transition-all duration-300",
          visible ? "opacity-100" : "opacity-0",
          visible ? "visible" : "invisible"
        ),
        onClick
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "aside",
      {
        className: classNames(
          "w-toc border-divider bg-bg-sidebar fixed inset-y-0 right-0 h-full border-l px-[28px] py-[16px] transition-transform duration-300",
          visible ? "translate-x-0" : "translate-x-full"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(TocBody, { onClick, toc })
      }
    )
  ] });
}
function Toc({ toc }) {
  if (!Array.isArray(toc) || toc.length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx("aside", { className: "w-toc full:flex sticky top-[calc(theme(spacing.nav)+48px)] hidden h-full flex-col", children: /* @__PURE__ */ jsxRuntime.jsx(TocBody, { toc }) });
}
function TocBody({
  toc,
  onClick
}) {
  const [index2] = useTocScroll();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "border-divider pc:border-l px-[16px] font-[500]", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "pc:block bg-brand absolute left-0 hidden h-[18px] w-px transition-[opacity,top] duration-300",
        style: index2 !== void 0 ? { top: index2 * 28 + 33, opacity: 100 } : { top: 33, opacity: 0 }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[14px] font-[600] leading-[28px]", children: "本页目录" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { children: toc.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
      TocItem,
      {
        onClick,
        active: index2 === i,
        item
      },
      item.id
    )) })
  ] });
}
function TocItem({
  item,
  active = false,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      href: `#${item.id}`,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover text-overflow block text-[13px] leading-[28px]"
      ),
      onClick: (event) => {
        onClick == null ? void 0 : onClick();
        event.preventDefault();
        const target = document.getElementById(item.id);
        const top = ((target == null ? void 0 : target.offsetTop) ?? NAV_HEIGHT) - NAV_HEIGHT;
        scrollTo({ top });
      },
      style: {
        paddingLeft: `${item.depth - 2}rem`
      },
      children: item.text
    }
  ) });
}
function MobileBar({ toc }) {
  const [state, setState] = React.useState({
    siderber: false,
    toc: false
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "h-nav pc:hidden bg-bg-default sticky top-0 z-40 w-full border-b", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full items-center justify-between px-[24px]", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "a",
        {
          className: "icon-[carbon--container-image] h-[24px] w-[24px] cursor-pointer",
          onClick: () => {
            setState({ siderber: true, toc: false });
          }
        }
      ),
      toc && toc.length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
        "a",
        {
          className: "icon-[carbon--border-top] h-[24px] w-[24px] cursor-pointer",
          onClick: () => {
            setState({ siderber: false, toc: true });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      MobileSiderbar,
      {
        visible: state.siderber,
        onClick: () => setState({ siderber: false, toc: false })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      MobileToc,
      {
        toc,
        visible: state.toc,
        onClick: () => setState({ siderber: false, toc: false })
      }
    )
  ] });
}
function useHeaderScroll() {
  React.useEffect(() => {
    Array.from(
      document.querySelectorAll(".autolink-headings")
    ).forEach((dom) => {
      const header = dom.parentElement;
      if (header) {
        header.onclick = (event) => {
          event.preventDefault();
          scrollTo({
            top: header.offsetTop - NAV_HEIGHT
          });
        };
      }
    });
  }, []);
}
function Doc({
  content,
  toc
}) {
  useHeaderScroll();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "pt-nav", children: [
    /* @__PURE__ */ jsxRuntime.jsx(Siderbar, {}),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "pc:ml-sidebar ml-0 flex justify-between", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "mx-auto w-full max-w-[768px] transition-[margin] duration-300", children: [
        /* @__PURE__ */ jsxRuntime.jsx(MobileBar, { toc }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-[48px]", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "doc", children: content }),
          /* @__PURE__ */ jsxRuntime.jsx(Footer, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(Toc, { toc })
    ] })
  ] });
}
function Home({
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "pt-nav flex h-screen flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-[10vw]", children: title }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "text-[6vw]", children: [
      " ",
      description
    ] })
  ] }) });
}
function Switch({
  className,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      onClick,
      className: classNames(
        className,
        "bg-bg-switch border-divider hover:border-gray-1 relative h-[22px] w-[40px] rounded-[11px] border transition-colors duration-300"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "bg-bg-inverse shadow-1 absolute left-px top-px h-[18px] w-[18px] overflow-hidden rounded-[50%] transition-all duration-300 dark:translate-x-[18px]", children: /* @__PURE__ */ jsxRuntime.jsxs(
        "span",
        {
          className: classNames(
            "*:text-text-2 *:absolute *:left-[3px] *:top-[3px] *:h-[12px] *:w-[12px] *:transition-opacity *:duration-300"
          ),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "icon-[carbon--sun] opacity-100 dark:opacity-0" }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "icon-[carbon--moon] opacity-0 dark:opacity-100" })
          ]
        }
      ) })
    }
  );
}
const LOGO_MAP = {
  github: "icon-[carbon--logo-github]",
  twitter: "icon-[carbon--logo-twitter]"
};
function Nav({ nav }) {
  const { y } = useWindowScroll();
  const { pathname } = reactRouterDom.useLocation();
  const [visible, setVisible] = React.useState(false);
  const isScrolled = Boolean(y);
  const isNotHome = pathname !== "/";
  const left = nav == null ? void 0 : nav.filter((item) => item.position === "left");
  const right = nav == null ? void 0 : nav.filter(
    (item) => item.position === "right" || item.position === void 0
  );
  const getItem = (item) => {
    const { text, img, logo, dark } = item;
    if (text) {
      return /* @__PURE__ */ jsxRuntime.jsx(TextItem, { item, pathname });
    } else if (logo) {
      return /* @__PURE__ */ jsxRuntime.jsx(LogoItem, { item });
    } else if (img) {
      return /* @__PURE__ */ jsxRuntime.jsx(ImgItem, { item });
    } else if (dark) {
      return /* @__PURE__ */ jsxRuntime.jsx(DarkItem, {});
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
  };
  useDisableScroll(visible);
  if (!nav || nav.length < 1) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("header", { className: "pc:fixed absolute left-0 top-0 z-30 w-full", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: classNames(
            isScrolled || isNotHome ? "border-divider bg-bg-default" : "border-transparent bg-transparent",
            "pc:block h-nav hidden border-b px-[12px] pt-px transition-colors duration-300"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full shrink-0 justify-start", children: left == null ? void 0 : left.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-full", children: getItem(item) }, `${item.link}${index2}`)) }),
            /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full justify-end", children: right == null ? void 0 : right.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-full", children: getItem(item) }, `${item.link}${index2}`)) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pc:hidden", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-nav bg-bg-default border-b px-[12px] pt-px", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full shrink-0 justify-start", children: left == null ? void 0 : left.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: "h-full", children: getItem(item) }, `${item.link}${index2}`)) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            onClick: () => setVisible((pre) => !pre),
            className: "flex h-full items-center justify-end",
            children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "icon-[carbon--list] h-[24px] w-[24px] cursor-pointer" })
          }
        )
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: classNames(
          visible ? "visible" : "invisible",
          visible ? "opacity-100" : "opacity-0",
          "bg-bg-default mt-nav fixed inset-0 z-50 transition-opacity duration-300"
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "mt-[12px]", children: right == null ? void 0 : right.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            onClick: () => setVisible(false),
            className: "flex items-center justify-center py-[4px]",
            children: getItem(item)
          },
          `${item.link}${index2}`
        )) })
      }
    )
  ] });
}
function TextItem({ item, pathname }) {
  const { text, link } = item;
  const getDirname = (url = "/") => url.split("/")[1];
  const active = getDirname(pathname) === getDirname(link);
  if (!text) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "mx-[12px] h-full justify-end", children: /* @__PURE__ */ jsxRuntime.jsx(
    Link,
    {
      href: link,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover flex h-full items-center whitespace-nowrap text-[14px] font-[500]"
      ),
      children: text
    }
  ) });
}
function LogoItem({ item }) {
  const { logo, link } = item;
  if (!logo) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "mx-[12px] h-full", children: /* @__PURE__ */ jsxRuntime.jsx(
    Link,
    {
      href: link,
      className: "text-text-2 text-hover flex  h-full items-center",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "span",
        {
          className: classNames(LOGO_MAP[logo], "h-[24px] w-[24px]")
        }
      )
    }
  ) });
}
function ImgItem({ item }) {
  const { img, link } = item;
  if (!img) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "mx-[12px] flex h-full items-center", children: /* @__PURE__ */ jsxRuntime.jsx(Link, { href: link, children: /* @__PURE__ */ jsxRuntime.jsx("img", { src: img, className: "h-[24px] w-[24px]" }) }) });
}
function DarkItem() {
  const { toggle: toggle2 } = useDark();
  return /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "mx-[4px] flex h-full items-center", children: /* @__PURE__ */ jsxRuntime.jsx(Switch, { onClick: toggle2 }) });
}
function NotFound() {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-[60px] font-[600]", children: "404" }),
    /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-[20px] font-[700]", children: "页面失踪" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-[16px]", children: /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      {
        href: "/",
        className: "hover:border-brand hover:text-brand text-brand block rounded-[16px] border px-[16px] py-[4px] text-[14px] font-[500] transition-colors duration-300",
        "un-hover": "",
        children: "返回主页"
      }
    ) })
  ] }) });
}
function Layout({ location = window.location.pathname }) {
  var _a;
  const { pageData } = usePageData();
  const getPage = () => {
    const pageType = pageData == null ? void 0 : pageData.pageType;
    if (pageType === "home") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        Home,
        {
          title: pageData == null ? void 0 : pageData.userConfig.title,
          description: pageData == null ? void 0 : pageData.userConfig.description
        }
      );
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsxRuntime.jsx(
        Doc,
        {
          content: /* @__PURE__ */ jsxRuntime.jsx(Content, { location }),
          toc: pageData == null ? void 0 : pageData.toc
        }
      );
    } else if (pageType === "404") {
      return /* @__PURE__ */ jsxRuntime.jsx(NotFound, {});
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Nav, { nav: (_a = pageData == null ? void 0 : pageData.userConfig.themeConfig) == null ? void 0 : _a.nav }),
    getPage()
  ] });
}
async function render(location, helmetContext) {
  const pageData = await getPageData(location);
  const html = server.renderToString(
    /* @__PURE__ */ jsxRuntime.jsx(ServerPageDataProvider, { helmetContext, value: { pageData }, children: /* @__PURE__ */ jsxRuntime.jsx(server_js.StaticRouter, { location, children: /* @__PURE__ */ jsxRuntime.jsx(Layout, { location }) }) })
  );
  return html;
}
exports.render = render;
exports.routes = routes;
