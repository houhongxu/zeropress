import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import * as React from "react";
import React__default, { createContext, useContext, useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
const config = { "docs": "docs", "title": "ZEROPRESS", "description": "SSG Framework", "themeConfig": { "nav": [{ "text": "笔记", "link": "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro" }, { "img": "/favicon.jpg", "link": "/", "position": "left" }, { "dark": true, "link": "/" }, { "logo": "github", "link": "https://github.com/houhongxu/hhxpress" }], "sidebar": { "/%E7%AC%94%E8%AE%B0": [{ "text": "介绍", "items": [{ "text": "intro", "link": "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro" }] }, { "text": "git", "items": [{ "text": "常用命令", "link": "/%E7%AC%94%E8%AE%B0/1git/0%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4" }, { "text": "版本控制系统VCS", "link": "/%E7%AC%94%E8%AE%B0/1git/1%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FVCS" }, { "text": "分布式版本控制系统DVCS", "link": "/%E7%AC%94%E8%AE%B0/1git/2%E5%88%86%E5%B8%83%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FDVCS" }, { "text": "HEAD与master与branch", "link": "/%E7%AC%94%E8%AE%B0/1git/3HEAD%E4%B8%8Emaster%E4%B8%8Ebranch" }, { "text": "push", "link": "/%E7%AC%94%E8%AE%B0/1git/4push" }, { "text": "merge", "link": "/%E7%AC%94%E8%AE%B0/1git/5merge" }, { "text": "feature branch", "link": "/%E7%AC%94%E8%AE%B0/1git/6feature%20branch" }, { "text": "rebase", "link": "/%E7%AC%94%E8%AE%B0/1git/7rebase" }, { "text": "revert", "link": "/%E7%AC%94%E8%AE%B0/1git/8revert" }, { "text": "reset", "link": "/%E7%AC%94%E8%AE%B0/1git/9reset" }, { "text": "checkout", "link": "/%E7%AC%94%E8%AE%B0/1git/10checkout" }, { "text": "stash", "link": "/%E7%AC%94%E8%AE%B0/1git/11stash" }, { "text": "log与reflog", "link": "/%E7%AC%94%E8%AE%B0/1git/12log%E4%B8%8Ereflog" }, { "text": "cherry-pick", "link": "/%E7%AC%94%E8%AE%B0/1git/13cherry-pick" }, { "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/1git/99readme" }] }, { "text": "浏览器", "items": [{ "text": "浏览器进程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/1%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%9B%E7%A8%8B" }, { "text": "TCP协议", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/2TCP%E5%8D%8F%E8%AE%AE" }, { "text": "HTTP协议", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/3HTTP%E5%8D%8F%E8%AE%AE" }, { "text": "浏览器缓存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/4%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98" }, { "text": "导航流程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/5%E5%AF%BC%E8%88%AA%E6%B5%81%E7%A8%8B" }, { "text": "渲染流程", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/6%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B" }, { "text": "内存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/13%E5%86%85%E5%AD%98" }, { "text": "消息队列和事件循环", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/16%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF" }, { "text": "浏览器的dns缓存", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/98%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84dns%E7%BC%93%E5%AD%98" }, { "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/99readme" }] }, { "text": "http", "items": [{ "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/3http/99readme" }] }, { "text": "javascript", "items": [{ "text": "引用", "link": "/%E7%AC%94%E8%AE%B0/4javascript/1%E5%BC%95%E7%94%A8" }, { "text": "运算符", "link": "/%E7%AC%94%E8%AE%B0/4javascript/2%E8%BF%90%E7%AE%97%E7%AC%A6" }, { "text": "lodash手写", "link": "/%E7%AC%94%E8%AE%B0/4javascript/3lodash%E6%89%8B%E5%86%99" }] }, { "text": "webpack", "items": [{ "text": "使用 node api 学习 webpack", "link": "/%E7%AC%94%E8%AE%B0/5webpack/1%E4%BD%BF%E7%94%A8%20node%20api%20%E5%AD%A6%E4%B9%A0%20webpack" }, { "text": "cjs运行时分析", "link": "/%E7%AC%94%E8%AE%B0/5webpack/2cjs%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%86%E6%9E%90" }, { "text": "cjs模块收集与ast", "link": "/%E7%AC%94%E8%AE%B0/5webpack/3cjs%E6%A8%A1%E5%9D%97%E6%94%B6%E9%9B%86%E4%B8%8East" }, { "text": "文件名中的hash", "link": "/%E7%AC%94%E8%AE%B0/5webpack/4%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84hash" }, { "text": "cjs与esm", "link": "/%E7%AC%94%E8%AE%B0/5webpack/5cjs%E4%B8%8Eesm" }, { "text": "esm to cjs", "link": "/%E7%AC%94%E8%AE%B0/5webpack/6esm%20to%20cjs" }, { "text": "code spliting运行时分析", "link": "/%E7%AC%94%E8%AE%B0/5webpack/7code%20spliting%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%86%E6%9E%90" }, { "text": "magic comment", "link": "/%E7%AC%94%E8%AE%B0/5webpack/8magic%20comment" }, { "text": "hash 的增强", "link": "/%E7%AC%94%E8%AE%B0/5webpack/9hash%20%E7%9A%84%E5%A2%9E%E5%BC%BA" }, { "text": "module与chunk与asset", "link": "/%E7%AC%94%E8%AE%B0/5webpack/10module%E4%B8%8Echunk%E4%B8%8Easset" }, { "text": "bundle spliting", "link": "/%E7%AC%94%E8%AE%B0/5webpack/11bundle%20spliting" }, { "text": "高效分包", "link": "/%E7%AC%94%E8%AE%B0/5webpack/12%E9%AB%98%E6%95%88%E5%88%86%E5%8C%85" }, { "text": "loader初识", "link": "/%E7%AC%94%E8%AE%B0/5webpack/13loader%E5%88%9D%E8%AF%86" }, { "text": "json处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/14json%E5%A4%84%E7%90%86" }, { "text": "import assertions", "link": "/%E7%AC%94%E8%AE%B0/5webpack/15import%20assertions" }, { "text": "html处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/16html%E5%A4%84%E7%90%86" }, { "text": "图片处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/17%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86" }, { "text": "小图片处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/18%E5%B0%8F%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86" }, { "text": "svg图片处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/19svg%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86" }, { "text": "简单样式处理", "link": "/%E7%AC%94%E8%AE%B0/5webpack/20%E7%AE%80%E5%8D%95%E6%A0%B7%E5%BC%8F%E5%A4%84%E7%90%86" }, { "text": "readme", "link": "/%E7%AC%94%E8%AE%B0/5webpack/99readme" }] }, { "text": "ahooks", "items": [{ "text": "useLocalStorageState与useSessionStorageState", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/1useLocalStorageState%E4%B8%8EuseSessionStorageState" }, { "text": "useUpdateEffect 与 useUpdateLayoutEffectt", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/2useUpdateEffect%20%E4%B8%8E%20useUpdateLayoutEffectt" }, { "text": "useLatest与useMemoizedFn", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/3useLatest%E4%B8%8EuseMemoizedFn" }, { "text": "use(Raf)Timeout与use(Raf)Interval与useCountDown", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/4use(Raf)Timeout%E4%B8%8Euse(Raf)Interval%E4%B8%8EuseCountDown" }, { "text": "useRequest", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/5useRequest" }, { "text": "useMount与useUnMount与useMountedRefx.md", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/6useMount%E4%B8%8EuseUnMount%E4%B8%8EuseMountedRefx.md" }, { "text": "useUpdate", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/7useUpdate" }, { "text": "useCreation", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/8useCreation" }, { "text": "useDeepCompareEffect", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/9useDeepCompareEffect" }, { "text": "useAnimationFrame和计时器", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/97useAnimationFrame%E5%92%8C%E8%AE%A1%E6%97%B6%E5%99%A8" }, { "text": "工具函数", "link": "/%E7%AC%94%E8%AE%B0/6ahooks/98.%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0" }] }] }, "autoNav": true, "autoSidebar": true }, "vite": {} };
const GetToc$_ = () => [];
const frontmatter$_ = {
  "pageType": "home"
};
function _createMdxContent$_(props) {
  return jsx(Fragment, {});
}
function MDXContent$_(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$_, {
      ...props
    })
  }) : _createMdxContent$_();
}
const GetFrontMatter$_ = () => frontmatter$_;
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$_,
  GetToc: GetToc$_,
  default: MDXContent$_
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$Z = () => [];
const frontmatter$Z = void 0;
function _createMdxContent$Z(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "笔记",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#笔记",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "笔记"]
    }), "\n", jsx(_components.p, {
      children: "温故知新"
    }), "\n", jsx(_components.p, {
      children: "一开始的笔记都是机械的复制关键点重组，记忆很浅，仅方便查阅"
    }), "\n", jsx(_components.p, {
      children: "现在可以希望用疑问->解决->复述的方式加深记忆"
    })]
  });
}
function MDXContent$Z(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$Z, {
      ...props
    })
  }) : _createMdxContent$Z(props);
}
const GetFrontMatter$Z = () => frontmatter$Z;
const intro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$Z,
  GetToc: GetToc$Z,
  default: MDXContent$Z
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$Y = () => [];
const frontmatter$Y = void 0;
function _createMdxContent$Y(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "常用命令",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#常用命令",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "常用命令"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git pull"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git push 提交到远程仓库，--force 强制提交"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git checkout feat/627 切换分支，-b 切换并创建"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git merge feat/627 将 feat/627 分支合并入当前分支"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git remote -v 查看源"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git remote set-url --push origin no_push 禁止 push"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "git cherry-pick d4296dbde1f44c244ba8215aa55a12fa601a96ea 选中任意分支的提交到本分支"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$Y(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$Y, {
      ...props
    })
  }) : _createMdxContent$Y(props);
}
const GetFrontMatter$Y = () => frontmatter$Y;
const _0____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$Y,
  GetToc: GetToc$Y,
  default: MDXContent$Y
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$X = () => [{
  "id": "checkout-和-reset-的不同",
  "text": "checkout 和 reset 的不同",
  "depth": 2
}];
const frontmatter$X = void 0;
function _createMdxContent$X(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "checkout",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#checkout",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "checkout"]
    }), "\n", jsx(_components.p, {
      children: "checkout 并不止可以切换 branch。checkout 本质上的功能其实是：签出（ checkout ）指定的 commit"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "git checkout branch名"
      }), " 的本质，其实是把 HEAD 指向指定的 branch，然后签出这个 branch 所对应的 commit 的工作目录。所以同样的，checkout 的目标也可以不是 branch，而直接指定某个 commit"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.code, {
        children: "git checkout 78a4bc"
      })
    }), "\n", jsxs(_components.h2, {
      id: "checkout-和-reset-的不同",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#checkout-和-reset-的不同",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "checkout 和 reset 的不同"]
    }), "\n", jsx(_components.p, {
      children: "reset 在移动 HEAD 时会带着它所指向的 branch 一起移动，而 checkout 不会。当你用 checkout 指向其他地方的时候，HEAD 和 它所指向的 branch 就自动脱离了"
    }), "\n", jsx(_components.p, {
      children: "而且，checkout 有一个专门用来只让 HEAD 和 branch 脱离而不移动 HEAD 的用法"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.code, {
        children: "git checkout --detach"
      })
    })]
  });
}
function MDXContent$X(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$X, {
      ...props
    })
  }) : _createMdxContent$X(props);
}
const GetFrontMatter$X = () => frontmatter$X;
const _10checkout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$X,
  GetToc: GetToc$X,
  default: MDXContent$X
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$W = () => [{
  "id": "stash临时存放工作目录的改动",
  "text": "stash：临时存放工作目录的改动",
  "depth": 2
}];
const frontmatter$W = void 0;
function _createMdxContent$W(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "stash",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#stash",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "stash"]
    }), "\n", jsxs(_components.h2, {
      id: "stash临时存放工作目录的改动",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#stash临时存放工作目录的改动",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "stash：临时存放工作目录的改动"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "git satsh"
      }), " 不保存未 add 的"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "git satsh -u"
      }), " 也保存未 add 的"]
    })]
  });
}
function MDXContent$W(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$W, {
      ...props
    })
  }) : _createMdxContent$W(props);
}
const GetFrontMatter$W = () => frontmatter$W;
const _11stash = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$W,
  GetToc: GetToc$W,
  default: MDXContent$W
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$V = () => [{
  "id": "log",
  "text": "log",
  "depth": 2
}, {
  "id": "reflog引用的-log",
  "text": "reflog：引用的 log",
  "depth": 2
}];
const frontmatter$V = void 0;
function _createMdxContent$V(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "reflog",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reflog",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reflog"]
    }), "\n", jsxs(_components.h2, {
      id: "log",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#log",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "log"]
    }), "\n", jsx(_components.p, {
      children: "查看 commit 记录"
    }), "\n", jsxs(_components.h2, {
      id: "reflog引用的-log",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reflog引用的-log",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reflog：引用的 log"]
    }), "\n", jsx(_components.p, {
      children: "可以查看 Git 仓库中的引用的移动记录。如果不指定引用，它会显示 HEAD 的移动记录"
    })]
  });
}
function MDXContent$V(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$V, {
      ...props
    })
  }) : _createMdxContent$V(props);
}
const GetFrontMatter$V = () => frontmatter$V;
const _12log_reflog = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$V,
  GetToc: GetToc$V,
  default: MDXContent$V
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$U = () => [];
const frontmatter$U = void 0;
function _createMdxContent$U(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "cherry-pick",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#cherry-pick",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "cherry-pick"]
    }), "\n", jsx(_components.p, {
      children: "选中任意分支的指定 commit，提到当前分支"
    })]
  });
}
function MDXContent$U(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$U, {
      ...props
    })
  }) : _createMdxContent$U(props);
}
const GetFrontMatter$U = () => frontmatter$U;
const _13cherryPick = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$U,
  GetToc: GetToc$U,
  default: MDXContent$U
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$T = () => [{
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
const frontmatter$T = void 0;
function _createMdxContent$T(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "版本控制系统-vcs",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#版本控制系统-vcs",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "版本控制系统 VCS"]
    }), "\n", jsxs(_components.h2, {
      id: "版本控制最基本功能",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#版本控制最基本功能",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "版本控制：最基本功能"]
    }), "\n", jsxs(_components.p, {
      children: ["最简单的就是编辑器的撤回功能，撤回到上一个", jsx(_components.strong, {
        children: "版本"
      })]
    }), "\n", jsxs(_components.h2, {
      id: "主动提交程序代码和普通文本的区别",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#主动提交程序代码和普通文本的区别",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "主动提交：程序代码和普通文本的区别"]
    }), "\n", jsx(_components.p, {
      children: "程序代码需要历史代码的查找，回退等功能"
    }), "\n", jsxs(_components.p, {
      children: ["VCS 保存修改历史，使用的是", jsx(_components.strong, {
        children: "主动提交"
      }), "改动的机制"]
    }), "\n", jsxs(_components.h2, {
      id: "多人合作的同步需求中央仓库",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#多人合作的同步需求中央仓库",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "多人合作的同步需求：中央仓库"]
    }), "\n", jsxs(_components.p, {
      children: ["多个人共同开发需要一个", jsx(_components.strong, {
        children: "中央仓库"
      }), "作为代码的存储中心"]
    }), "\n", jsxs(_components.h2, {
      id: "中央式版本控制系统",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#中央式版本控制系统",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "中央式版本控制系统"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "第一次加入团队时，把中央仓库的代码取下来"
      }), "\n", jsx(_components.li, {
        children: "写完的新功能提交到中央仓库"
      }), "\n", jsx(_components.li, {
        children: "同事提交到中央仓库的新代码，及时同步下来"
      }), "\n"]
    })]
  });
}
function MDXContent$T(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$T, {
      ...props
    })
  }) : _createMdxContent$T(props);
}
const GetFrontMatter$T = () => frontmatter$T;
const _1______VCS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$T,
  GetToc: GetToc$T,
  default: MDXContent$T
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$S = () => [{
  "id": "优缺点",
  "text": "优缺点",
  "depth": 2
}];
const frontmatter$S = void 0;
function _createMdxContent$S(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "分布式版本控制系统-dvcs",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#分布式版本控制系统-dvcs",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "分布式版本控制系统 DVCS"]
    }), "\n", jsx(_components.p, {
      children: "分布式 VCS （Distributed VCS ）和中央式的区别在于，分布式 VCS 除了中央仓库之外，还有本地仓库"
    }), "\n", jsx(_components.p, {
      children: "中央仓库的主要作用"
    }), "\n", jsx(_components.p, {
      children: "中央式 VCS :"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "保存版本历史"
      }), "\n", jsx(_components.li, {
        children: "同步团队代码"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "分布式 VCS:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "同步团队代码"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "注意，分布式 VCS 也保存了历史版本，但是历史版本更多的是作为团队间的同步中转站"
    }), "\n", jsxs(_components.h2, {
      id: "优缺点",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#优缺点",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "优缺点"]
    }), "\n", jsx(_components.p, {
      children: "优点："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "无需联网，速度更快"
      }), "\n", jsx(_components.li, {
        children: "提交更细"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "缺点："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "clone 慢"
      }), "\n", jsx(_components.li, {
        children: "本地需要存储"
      }), "\n"]
    })]
  });
}
function MDXContent$S(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$S, {
      ...props
    })
  }) : _createMdxContent$S(props);
}
const GetFrontMatter$S = () => frontmatter$S;
const _2_________DVCS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$S,
  GetToc: GetToc$S,
  default: MDXContent$S
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$R = () => [{
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
const frontmatter$R = void 0;
function _createMdxContent$R(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "head-与-master-与-branch",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#head-与-master-与-branch",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HEAD 与 master 与 branch"]
    }), "\n", jsxs(_components.h2, {
      id: "引用commit-的快捷方式",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#引用commit-的快捷方式",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "引用：commit 的快捷方式"]
    }), "\n", jsxs(_components.p, {
      children: ["commit 都有一串 hash 值，很长：", jsx(_components.code, {
        children: "d6687fee2c0be551e0a4819053ad88ee42dc91b9"
      }), "\n可以用前几位来指定这个 commit：", jsx(_components.code, {
        children: "d6687fe"
      })]
    }), "\n", jsx(_components.p, {
      children: "引用就是 字符串，如"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["commit 的引用：", jsx(_components.code, {
          children: "d6687fee2c0be551e0a4819053ad88ee42dc91b9"
        })]
      }), "\n", jsxs(_components.li, {
        children: ["branch 的引用：", jsx(_components.code, {
          children: "ref: refs/heads/fix"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "head当前-commit-的引用",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#head当前-commit-的引用",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HEAD：当前 commit 的引用"]
    }), "\n", jsx(_components.p, {
      children: "一般是指向当前分支，当前分支指向，最新的 commit"
    }), "\n", jsxs(_components.h2, {
      id: "branch-引用指向分支的最新-commit",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#branch-引用指向分支的最新-commit",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "branch 引用：指向分支的最新 commit"]
    }), "\n", jsx(_components.p, {
      children: "branch 是平等的，master 不同但是并不高一级"
    }), "\n", jsx(_components.p, {
      children: "HEAD 除了可以指向 commit，还可以指向一个 branch，当它指向某个 branch 的时候，会通过这个 branch 来间接地指向某个 commit"
    }), "\n", jsx(_components.p, {
      children: "当 HEAD 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 branch 一起移动"
    }), "\n", jsx(_components.p, {
      children: "当然通过 reset 指令可以让 HEAD 直接指向 commit"
    }), "\n", jsxs(_components.h2, {
      id: "操作",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#操作",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "操作"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["创建：", jsx(_components.code, {
          children: "git branch feature1"
        })]
      }), "\n", jsxs(_components.li, {
        children: ["切换：", jsx(_components.code, {
          children: "git checkout feature1"
        })]
      }), "\n", jsxs(_components.li, {
        children: ["创建并切换：", jsx(_components.code, {
          children: "git checkout -b feature1"
        })]
      }), "\n", jsxs(_components.li, {
        children: ["删除：", jsx(_components.code, {
          children: "git branch -d feature1"
        })]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "注意："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "HEAD 指向的 branch 不能删除"
      }), "\n", jsx(_components.li, {
        children: "由于 Git 中的 branch 只是一个引用，所以删除 branch 的操作也只会删掉这个引用，并不会删除任何的 commit。不过如果一个 commit 不在任何一个 branch 的「路径」上，或者换句话说，如果没有任何一个 branch 可以回溯到这条 commit，它会被 Git 的回收机制删除掉"
      }), "\n", jsx(_components.li, {
        children: "出于安全考虑，没有被合并到 master 过的 branch 在删除时会失败，但是可以把 -d 改成 -D，小写换成大写，就能删除"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "mastermain-默认-branch",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#mastermain-默认-branch",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "master/main: 默认 branch"]
    }), "\n", jsx(_components.p, {
      children: "主分支，仅创建仓库或者下载仓库时时默认切换到此分支"
    })]
  });
}
function MDXContent$R(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$R, {
      ...props
    })
  }) : _createMdxContent$R(props);
}
const GetFrontMatter$R = () => frontmatter$R;
const _3HEAD_master_branch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$R,
  GetToc: GetToc$R,
  default: MDXContent$R
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$Q = () => [];
const frontmatter$Q = void 0;
function _createMdxContent$Q(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "push-的本质",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#push-的本质",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "push 的本质"]
    }), "\n", jsx(_components.p, {
      children: "push 是把当前的分支上传到远程仓库，并把这个 branch 的路径上的所有 commits 也一并上传"
    }), "\n", jsx(_components.p, {
      children: "push 的时候，如果当前分支是一个本地创建的分支，需要指定远程仓库名和分支名，用 git push origin branch_name 的格式，而不能只用 git push；或者可以通过 git config 修改 push.default 来改变 push 时的行为逻辑"
    }), "\n", jsx(_components.p, {
      children: "push 的时候之后上传当前分支，并不会上传 HEAD；远程仓库的 HEAD 是永远指向默认分支（即 master/main）的"
    })]
  });
}
function MDXContent$Q(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$Q, {
      ...props
    })
  }) : _createMdxContent$Q(props);
}
const GetFrontMatter$Q = () => frontmatter$Q;
const _4push = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$Q,
  GetToc: GetToc$Q,
  default: MDXContent$Q
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$P = () => [{
  "id": "含义",
  "text": "含义",
  "depth": 2
}, {
  "id": "冲突",
  "text": "冲突",
  "depth": 2
}];
const frontmatter$P = void 0;
function _createMdxContent$P(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "merge",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#merge",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "merge"]
    }), "\n", jsx(_components.p, {
      children: "pull 的内部操作其实是把远程仓库取到本地后（使用的是 fetch），再用一次 merge 来把远端仓库的新 commits 合并到本地"
    }), "\n", jsxs(_components.p, {
      children: ["即", jsx(_components.code, {
        children: "git fetch"
      }), " ", jsx(_components.code, {
        children: "git merge origin/HEAD"
      })]
    }), "\n", jsx(_components.p, {
      children: "fetch 会更新远程仓库的本地镜像 origin/HEAD 和 origin/master\n随后 merge 针对没有冲突的 commit 会进行 fast-forward 快速前移来移动到最新 commit"
    }), "\n", jsxs(_components.h2, {
      id: "含义",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#含义",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "含义"]
    }), "\n", jsx(_components.p, {
      children: "从目标 commit 和当前 commit （即 HEAD 所指向的 commit）分叉的位置起，把目标 commit 的路径上的所有 commit 的内容一并应用到当前 commit，然后自动生成一个新的 commit"
    }), "\n", jsxs(_components.h2, {
      id: "冲突",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#冲突",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "冲突"]
    }), "\n", jsx(_components.p, {
      children: "自动合并能力："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "不同文件，A 文件，B 文件"
      }), "\n", jsx(_components.li, {
        children: "同一文件不同行，第 1 行，第 2 行"
      }), "\n"]
    })]
  });
}
function MDXContent$P(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$P, {
      ...props
    })
  }) : _createMdxContent$P(props);
}
const GetFrontMatter$P = () => frontmatter$P;
const _5merge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$P,
  GetToc: GetToc$P,
  default: MDXContent$P
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$O = () => [];
const frontmatter$O = void 0;
function _createMdxContent$O(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "feature-branch",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#feature-branch",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "feature branch"]
    }), "\n", jsx(_components.p, {
      children: "最流行的工作流"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "任何新的功能（feature）或 bug 修复全都新建一个 branch 来写"
      }), "\n", jsx(_components.li, {
        children: "branch 写完后，合并到 master，然后删掉这个 branch"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "会不听的分支合并分支合并，如果不想分支留着可以用 rebase"
    }), "\n", jsx(_components.p, {
      children: "PR 默认也是这种模式，当然也可以选择 rebase 等模式"
    })]
  });
}
function MDXContent$O(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$O, {
      ...props
    })
  }) : _createMdxContent$O(props);
}
const GetFrontMatter$O = () => frontmatter$O;
const _6feature_branch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$O,
  GetToc: GetToc$O,
  default: MDXContent$O
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$N = () => [{
  "id": "rebase--i",
  "text": "rebase -i",
  "depth": 2
}];
const frontmatter$N = void 0;
function _createMdxContent$N(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "rebase",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#rebase",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "rebase"]
    }), "\n", jsx(_components.p, {
      children: "！禁止从 master 向其他 branch 执行 rebase"
    }), "\n", jsx(_components.p, {
      children: "将分支 fix 的新 commit 都放在主分支 master 的最新 commit 后面"
    }), "\n", jsx(_components.p, {
      children: "应该在分支 fix 没有 push 到远程仓库时使用较好，如果已经 push 见以下情况："
    }), "\n", jsx(_components.p, {
      children: "分支 master 分支 fix 都进行了新的开发并 push"
    }), "\n", jsx(_components.p, {
      children: "分支 master 有了新 commit-m"
    }), "\n", jsx(_components.p, {
      children: "分支 fix 也有了新 commit-f"
    }), "\n", jsxs(_components.p, {
      children: ["在分支 fix", jsx(_components.code, {
        children: "git rebase master"
      }), "会重新 提取 commit-f 并变基到当前 maser，会处于更改后未 push 的状态"]
    }), "\n", jsx(_components.p, {
      children: "此时 fix 在 master 的最新 commit-m 处，origin/fix 在 fix 最新 commit-f 处"
    }), "\n", jsxs(_components.p, {
      children: ["然后", jsx(_components.code, {
        children: "git checkout master"
      }), " ", jsx(_components.code, {
        children: "git merge fix"
      }), "可以完成 master 的 rebase 更新，通过 merge 的 fast-forward 情况"]
    }), "\n", jsxs(_components.p, {
      children: ["但是如果 ", jsx(_components.code, {
        children: "git checkout fix"
      }), " 再 ", jsx(_components.code, {
        children: "git push"
      }), " 会发现有两次 commit-f 提交并产生了 merge"]
    }), "\n", jsx(_components.p, {
      children: "因为 fix 和 origin/fix 存在冲突，fix 领先于 origin/fix，领先的就是变基操作复制的 commit-f"
    }), "\n", jsx(_components.p, {
      children: "因为 rebase 提取的 commit 的 hash 和之前的 commit 不同，而且对同一个文件进行了更新，所以需要 merge"
    }), "\n", jsxs(_components.p, {
      children: ["解决方案是对 fix 直接", jsx(_components.code, {
        children: "git push -f"
      }), "覆盖 fix 分支"]
    }), "\n", jsx(_components.p, {
      children: "由于是个人分支 fix 所以 -f 影响不大"
    }), "\n", jsx(_components.p, {
      children: "但是尽量避免这种操作，仅在分支不需要继续开发或者未 push 时进行 rebase"
    }), "\n", jsxs(_components.h2, {
      id: "rebase--i",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#rebase--i",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "rebase -i"]
    }), "\n", jsx(_components.p, {
      children: "常用于整理与合并 commit"
    }), "\n", jsx(_components.p, {
      children: "比如需要合并三个 commit 为一个，合并 432\ncommit-1\ncommit-2\ncommit-3\ncommit-4"
    }), "\n", jsxs(_components.p, {
      children: ["则", jsx(_components.code, {
        children: "git rebase -i commit-1"
      }), "\n对 commit-4、commit-3、commit-2 进行处理\npick 为保留，squash 为合并入前一个 commit"]
    }), "\n", jsx(_components.p, {
      children: "同时可以调整顺序"
    }), "\n", jsx(_components.p, {
      children: "pick commit-1\npick commit-2\npick commit-4\ns commit-3"
    }), "\n", jsxs(_components.p, {
      children: ["合并后因为本地与远程记录不同，提交同样需要", jsx(_components.code, {
        children: "git push -f"
      })]
    })]
  });
}
function MDXContent$N(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$N, {
      ...props
    })
  }) : _createMdxContent$N(props);
}
const GetFrontMatter$N = () => frontmatter$N;
const _7rebase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$N,
  GetToc: GetToc$N,
  default: MDXContent$N
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$M = () => [];
const frontmatter$M = void 0;
function _createMdxContent$M(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "revert",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#revert",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "revert"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "git revert HEAD^"
      }), "\n会增加一条新的 commit，它的内容和倒数第二个 commit 是相反的，从而和倒数第二个 commit 相互抵消，达到撤销的效果"]
    })]
  });
}
function MDXContent$M(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$M, {
      ...props
    })
  }) : _createMdxContent$M(props);
}
const GetFrontMatter$M = () => frontmatter$M;
const _8revert = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$M,
  GetToc: GetToc$M,
  default: MDXContent$M
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$L = () => [];
const frontmatter$L = void 0;
function _createMdxContent$L(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "参考",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://juejin.cn/book/6844733697996881928?enter_from=search_result&utm_source=search",
        children: "小册"
      })
    })]
  });
}
function MDXContent$L(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$L, {
      ...props
    })
  }) : _createMdxContent$L(props);
}
const GetFrontMatter$L = () => frontmatter$L;
const _99readme$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$L,
  GetToc: GetToc$L,
  default: MDXContent$L
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$K = () => [{
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
const frontmatter$K = void 0;
function _createMdxContent$K(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "reset",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset"]
    }), "\n", jsxs(_components.h2, {
      id: "reset-的本质移动-head-以及它所指向的-branch",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset-的本质移动-head-以及它所指向的-branch",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset 的本质：移动 HEAD 以及它所指向的 branch"]
    }), "\n", jsx(_components.p, {
      children: "实质行为并不是撤销，而是移动 HEAD ，并且「捎带」上 HEAD 所指向的 branch（如果有的话）"
    }), "\n", jsx(_components.p, {
      children: "所以同理，reset --hard 不仅可以撤销提交，还可以用来把 HEAD 和 branch 移动到其他的任何地方"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.code, {
        children: "git reset --hard branch2"
      })
    }), "\n", jsx(_components.p, {
      children: "直接让 branch1 值与 branch2 相同"
    }), "\n", jsxs(_components.h2, {
      id: "reset---hard重置工作目录与-add-暂存区",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset---hard重置工作目录与-add-暂存区",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset --hard：重置工作目录与 add 暂存区"]
    }), "\n", jsx(_components.p, {
      children: "工作目录里的内容会被完全重置为和 HEAD 的新位置相同的内容。"
    }), "\n", jsx(_components.p, {
      children: "就是你的未 commit 提交的修改会被全部丢弃，但是不影响已经 commit 的内容"
    }), "\n", jsxs(_components.h2, {
      id: "reset---soft保留工作目录与-add-暂存区",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset---soft保留工作目录与-add-暂存区",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset --soft：保留工作目录与 add 暂存区"]
    }), "\n", jsx(_components.p, {
      children: "reset --soft 会在重置 HEAD 和 branch 时，保留工作目录和暂存区中的内容，并把重置 HEAD 所带来的新的差异放进暂存区"
    }), "\n", jsx(_components.p, {
      children: "就是会自动 add 不同的文件并保留之前的 add"
    }), "\n", jsxs(_components.h2, {
      id: "reset-不加参数保留工作目录并清空-add-暂存区",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#reset-不加参数保留工作目录并清空-add-暂存区",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "reset 不加参数：保留工作目录，并清空 add 暂存区"]
    }), "\n", jsx(_components.p, {
      children: "默认使用 --mixed 参数"
    }), "\n", jsx(_components.p, {
      children: "保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录"
    }), "\n", jsx(_components.p, {
      children: "就是撤销 add"
    })]
  });
}
function MDXContent$K(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$K, {
      ...props
    })
  }) : _createMdxContent$K(props);
}
const GetFrontMatter$K = () => frontmatter$K;
const _9reset = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$K,
  GetToc: GetToc$K,
  default: MDXContent$K
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$J = () => [];
const frontmatter$J = void 0;
function _createMdxContent$J(props) {
  const _components = {
    a: "a",
    h1: "h1",
    span: "span",
    ...props.components
  };
  return jsxs(_components.h1, {
    id: "内存",
    children: [jsx(_components.a, {
      className: "autolink-headings",
      href: "#内存",
      children: jsx(_components.span, {
        style: {
          marginRight: "4px"
        },
        children: "#"
      })
    }), "内存"]
  });
}
function MDXContent$J(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$J, {
      ...props
    })
  }) : _createMdxContent$J(props);
}
const GetFrontMatter$J = () => frontmatter$J;
const _13__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$J,
  GetToc: GetToc$J,
  default: MDXContent$J
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$I = () => [{
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
const frontmatter$I = void 0;
function _createMdxContent$I(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "消息队列和事件循环",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#消息队列和事件循环",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "消息队列和事件循环"]
    }), "\n", jsxs(_components.h2, {
      id: "单线程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#单线程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "单线程"]
    }), "\n", jsx(_components.p, {
      children: "一个线程中去执行任务"
    }), "\n", jsxs(_components.h2, {
      id: "在线程运行过程中处理新任务",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#在线程运行过程中处理新任务",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "在线程运行过程中处理新任务"]
    }), "\n", jsx(_components.p, {
      children: "要想在线程运行过程中，能接收并执行新的任务，就需要采用事件(任务)循环机制\n不停的循环接受事件(任务)，接受后处理事件(任务)"
    }), "\n", jsxs(_components.h2, {
      id: "处理其他线程发送过来的任务",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#处理其他线程发送过来的任务",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "处理其他线程发送过来的任务"]
    }), "\n", jsx(_components.p, {
      children: "渲染主线程会频繁接收到来自于 IO 线程的一些任务，比如鼠标点击，资源加载完成等"
    }), "\n", jsx(_components.p, {
      children: "使用消息队列存放要执行的任务，IO 线程中产生的新任务添加进消息队列尾部"
    }), "\n", jsx(_components.p, {
      children: "事件循环从队列头部取出任务"
    }), "\n", jsxs(_components.h2, {
      id: "处理其他进程发送过来的任务",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#处理其他进程发送过来的任务",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "处理其他进程发送过来的任务"]
    }), "\n", jsx(_components.p, {
      children: "渲染进程专门有一个 IO 线程用来接收其他进程传进来的消息"
    }), "\n", jsxs(_components.h2, {
      id: "消息队列中的任务类型",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#消息队列中的任务类型",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "消息队列中的任务类型"]
    }), "\n", jsx(_components.p, {
      children: "输入事件（鼠标滚动、点击、移动）、微任务、文件读写、WebSocket、JavaScript 定时器等等。\nJavaScript 执行、解析 DOM、样式计算、布局计算、CSS 动画等。"
    }), "\n", jsxs(_components.h2, {
      id: "页面使用单线程的缺点",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#页面使用单线程的缺点",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "页面使用单线程的缺点"]
    }), "\n", jsx(_components.p, {
      children: "第一个问题是如何处理高优先级的任务。"
    }), "\n", jsx(_components.p, {
      children: "通常我们把消息队列中的任务称为宏任务，每个宏任务中都包含了一个微任务队列"
    }), "\n", jsx(_components.p, {
      children: "执行宏任务的过程中，如果 DOM 有变化，那么就会将该变化添加到微任务列表中，宏任务中的主要功能都直接完成之后，执行当前宏任务中的微任务"
    }), "\n", jsx(_components.p, {
      children: "微任务常用的就是 promise"
    }), "\n", jsxs(_components.h2, {
      id: "总结",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#总结",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "总结"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "如果有一些确定好的任务，可以使用一个单线程来按照顺序处理这些任务，这是第一版线程模型。"
      }), "\n", jsx(_components.li, {
        children: "要在线程执行过程中接收并处理新的任务，就需要引入循环语句和事件系统，这是第二版线程模型。"
      }), "\n", jsx(_components.li, {
        children: "如果要接收其他线程发送过来的任务，就需要引入消息队列，这是第三版线程模型。"
      }), "\n", jsx(_components.li, {
        children: "如果其他进程想要发送任务给页面主线程，那么先通过 IPC 把任务发送给渲染进程的 IO 线程，IO 线程再把任务发送给页面主线程。"
      }), "\n", jsx(_components.li, {
        children: "消息队列机制并不是太灵活，为了适应效率和实时性，引入了微任务。"
      }), "\n"]
    })]
  });
}
function MDXContent$I(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$I, {
      ...props
    })
  }) : _createMdxContent$I(props);
}
const GetFrontMatter$I = () => frontmatter$I;
const _16_________ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$I,
  GetToc: GetToc$I,
  default: MDXContent$I
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$H = () => [];
const frontmatter$H = void 0;
function _createMdxContent$H(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "浏览器进程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器进程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器进程"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "浏览器进程：界面显示、用户交互、子进程管理，同时提供存储等功能"
      }), "\n", jsx(_components.li, {
        children: "渲染进程：安全考虑，渲染进程都是运行在沙箱模式下，包括排版引擎 Blink 和 JavaScript 引擎 V8 ，可以将 HTML、CSS、JS 转换为页面"
      }), "\n", jsx(_components.li, {
        children: "GPU 进程：3D CSS、Chrome UI、网页"
      }), "\n", jsx(_components.li, {
        children: "网络进程：网络资源加载"
      }), "\n", jsx(_components.li, {
        children: "插件进程：运行插件，因为插件容易崩溃所以分离为进程"
      }), "\n"]
    })]
  });
}
function MDXContent$H(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$H, {
      ...props
    })
  }) : _createMdxContent$H(props);
}
const GetFrontMatter$H = () => frontmatter$H;
const _1_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$H,
  GetToc: GetToc$H,
  default: MDXContent$H
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$G = () => [{
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
const frontmatter$G = void 0;
function _createMdxContent$G(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "tcp-协议",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcp-协议",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP 协议"]
    }), "\n", jsxs(_components.h2, {
      id: "ip-internet-protocol-网际协议",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#ip-internet-protocol-网际协议",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "IP Internet Protocol 网际协议"]
    }), "\n", jsx(_components.p, {
      children: "IP 地址就是计算机的地址，通过 IP 将数据包传递给另一个主机"
    }), "\n", jsx(_components.p, {
      children: "数据包会携带 IP 头"
    }), "\n", jsxs(_components.h2, {
      id: "udp-user-datagram-protocol-用户数据包协议",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#udp-user-datagram-protocol-用户数据包协议",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "UDP User Datagram Protocol 用户数据包协议"]
    }), "\n", jsxs(_components.p, {
      children: ["UDP 通过", jsx(_components.strong, {
        children: "端口号"
      }), "把数据包传递给对应的程序"]
    }), "\n", jsx(_components.p, {
      children: "数据包会携带 UDP 头（含本机目标端口号）和 IP 头"
    }), "\n", jsx(_components.p, {
      children: "对于错误的数据包，UDP 并不提供重发机制，只是丢弃当前的包，而且 UDP 在发送之后也无法知道是否能达到目的地"
    }), "\n", jsx(_components.p, {
      children: "UDP 不能保证数据可靠性，但是传输速度却非常快"
    }), "\n", jsxs(_components.h2, {
      id: "tcp-transmission-control-protocol-传输控制协议",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcp-transmission-control-protocol-传输控制协议",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP Transmission Control Protocol 传输控制协议"]
    }), "\n", jsx(_components.p, {
      children: "TCP 是一种面向连接的、可靠的、基于字节流的传输层通信协议"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "TCP 提供丢失重传机制"
      }), "\n", jsx(_components.li, {
        children: "TCP 引入了数据包排序机制，乱序数据包可以组合成完整文件"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "数据包会携带 TCP 头（含本机目标端口号和序号）和 IP 头"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "建立连接：连接过程会三次握手，会发送三个数据包才会确认连接建立"
      }), "\n", jsx(_components.li, {
        children: "传输数据：接受端会对每个数据包发出确认操作，发送端没有收到确认信息的会触发重发机制，而且接收端会按照 TCP 头中的序号排序数据包"
      }), "\n", jsx(_components.li, {
        children: "断开连接：断开过程会四次挥手，保证双方都断开连接"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "tcpip-四层模型",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#tcpip-四层模型",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "TCP/IP 四层模型"]
    }), "\n", jsx(_components.p, {
      children: "IEEE802->IP->TCP/UDP->HTTP"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/img/note/2/2-1.jpg",
        alt: "2-1"
      })
    })]
  });
}
function MDXContent$G(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$G, {
      ...props
    })
  }) : _createMdxContent$G(props);
}
const GetFrontMatter$G = () => frontmatter$G;
const _2TCP__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$G,
  GetToc: GetToc$G,
  default: MDXContent$G
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$F = () => [{
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
const frontmatter$F = void 0;
function _createMdxContent$F(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "http-协议",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#http-协议",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "HTTP 协议"]
    }), "\n", jsx(_components.p, {
      children: "HTTP 是一种允许浏览器向服务器获取资源的协议，是 Web 的基础"
    }), "\n", jsxs(_components.h2, {
      id: "dns-domain-name-system-域名系统",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#dns-domain-name-system-域名系统",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "DNS Domain Name System 域名系统"]
    }), "\n", jsxs(_components.p, {
      children: ["将域名与 IP 地址做一一映射\n浏览器有 DNS", jsx(_components.strong, {
        children: "数据缓存服务"
      }), "，解析过的域名会缓存，减少请求"]
    }), "\n", jsxs(_components.h2, {
      id: "浏览器发起-http-请求的流程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器发起-http-请求的流程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器发起 HTTP 请求的流程"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["构建请求行\n请求方法 + 请求 URI + HTTP 协议版本\n例如：", jsx(_components.code, {
            children: "GET /index.html HTTP/1.1"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "查找缓存"
        }), "\n", jsx(_components.p, {
          children: "浏览器会在请求前查询浏览器缓存中是否有该文件，如果有则结束请求"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "准备 IP 地址与端口"
        }), "\n", jsx(_components.p, {
          children: "现在只有 URL，HTTP 需要与服务器建立 TCP 连接就需要 IP 地址与端口，所以通过一下方式获得"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "请求 DNS 返回域名对应的 IP 地址"
          }), "\n", jsx(_components.li, {
            children: "从 URL 中获取端口号，HTTP 默认为 80"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "等待 TCP 队列"
        }), "\n", jsx(_components.p, {
          children: "Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。"
        }), "\n", jsx(_components.p, {
          children: "http/1.1 一个 tcp 同时只能处理一个请求，浏览器会为每个域名维护 6 个 tcp 连接"
        }), "\n", jsx(_components.p, {
          children: "但是每个 tcp 连接是可以复用的，也就是处理完一个请求之后，不断开这个 tcp 连接，可以用来处理下个 http 请求"
        }), "\n", jsx(_components.p, {
          children: "不过 http2 是可以并行请求资源的，所以如果使用 http2，浏览器只会为每个域名维护一个 tcp 连接"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "建立 TCP 连接"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "发送 HTTP 请求"
        }), "\n", jsx(_components.p, {
          children: "发送请求行\n发送请求头\n发送请求体(POST)"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "服务器处理-http-请求的流程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#服务器处理-http-请求的流程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "服务器处理 HTTP 请求的流程"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["返回请求\n返回响应行(协议版本+状态码 ", jsx(_components.code, {
            children: "HTTP/1.1 200 OK"
          }), ")\n返回响应头\n返回响应体"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["断开连接\n服务器返回完后会断链接\n但是如果请求头中有", jsx(_components.code, {
            children: "Connection:Keep-Alive"
          }), "会保持 TCP 连接"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["重定向\n响应头", jsx(_components.code, {
            children: "Location"
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$F(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$F, {
      ...props
    })
  }) : _createMdxContent$F(props);
}
const GetFrontMatter$F = () => frontmatter$F;
const _3HTTP__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$F,
  GetToc: GetToc$F,
  default: MDXContent$F
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$E = () => [{
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
const frontmatter$E = void 0;
function _createMdxContent$E(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "浏览器缓存",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器缓存",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器缓存"]
    }), "\n", jsxs(_components.h2, {
      id: "dns-缓存",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#dns-缓存",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "DNS 缓存"]
    }), "\n", jsx(_components.p, {
      children: "缓存域名对应的 IP"
    }), "\n", jsxs(_components.h2, {
      id: "页面资源缓存",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#页面资源缓存",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "页面资源缓存"]
    }), "\n", jsxs(_components.p, {
      children: ["通过响应头", jsx(_components.code, {
        children: "Cache-Control"
      }), "设置是否缓存该资源"]
    }), "\n", jsxs(_components.p, {
      children: ["缓存过期后浏览器会继续发起请求并携带请求头", jsx(_components.code, {
        children: 'If-None-Match:"4f80f-13c-3a1xb12a"'
      })]
    }), "\n", jsx(_components.p, {
      children: "服务器会根据该请求头判断资源是否更新\n没有更新则返回 状态码 304\n如果有更新则返回新资源"
    }), "\n", jsxs(_components.h2, {
      id: "登录状态",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#登录状态",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "登录状态"]
    }), "\n", jsxs(_components.p, {
      children: ["服务器接受到账号密码后查询数据库，如果正确则生成 uid 并记录，返回在响应头\n", jsx(_components.code, {
        children: "Set-Cookie: UID=3431uad;"
      })]
    }), "\n", jsx(_components.p, {
      children: "浏览器解析响应头后会保存在 Cookie"
    }), "\n", jsxs(_components.p, {
      children: ["用户再次访问时浏览器会将 uid 携带在请求头", jsx(_components.code, {
        children: "Cookie: UID=3431uad;"
      })]
    }), "\n", jsx(_components.p, {
      children: "服务器收到 Cookie 后会查询记录下的 uid 数据，如果已经存在，则返回登录后的用户数据"
    })]
  });
}
function MDXContent$E(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$E, {
      ...props
    })
  }) : _createMdxContent$E(props);
}
const GetFrontMatter$E = () => frontmatter$E;
const _4_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$E,
  GetToc: GetToc$E,
  default: MDXContent$E
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$D = () => [{
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
const frontmatter$D = void 0;
function _createMdxContent$D(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "导航流程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#导航流程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "导航流程"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/img/note/2/5-1.jpg",
        alt: "5-1"
      })
    }), "\n", jsx(_components.p, {
      children: "用户发出 URL 请求到页面开始解析的这个过程，就叫做导航"
    }), "\n", jsxs(_components.h2, {
      id: "用户输入",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#用户输入",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "用户输入"]
    }), "\n", jsx(_components.p, {
      children: "输入后 地址栏会判断输入的关键字是搜索内容，还是请求的 URL："
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "搜索内容：启用搜索引擎"
      }), "\n", jsx(_components.li, {
        children: "URL：如果符合 URL 规则，浏览器会加上协议"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "回车后 先触发 beforeunload 事件，可以进行询问用户是否离开等操作\n然后进入加载状态，等待提交文档"
    }), "\n", jsxs(_components.h2, {
      id: "网络进程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#网络进程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "网络进程"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "查找本地缓存是否缓存了该资源，如果缓存就直接返回资源"
      }), "\n", jsx(_components.li, {
        children: "如果没有缓存，进行 DNS 解析，获取 IP 地址"
      }), "\n", jsx(_components.li, {
        children: "利用 IP 地址和服务器建立 TCP 连接，如果请求协议是 HTTPS，那么还需要先建立 TLS 连接"
      }), "\n", jsx(_components.li, {
        children: "浏览器端会构建请求行、请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送"
      }), "\n", jsx(_components.li, {
        children: "服务器根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程"
      }), "\n", jsx(_components.li, {
        children: "重定向：状态码是 301,302,307,308 时根据响应头 Location 重定向，可以通过这个方式将 http 请求 重定向为 https 请求"
      }), "\n", jsx(_components.li, {
        children: "响应数据：通过 Content-Type 响应头区分响应体数据类型，比如 HTML 和 js"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "准备渲染进程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#准备渲染进程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "准备渲染进程"]
    }), "\n", jsx(_components.p, {
      children: "Chrome 会为不同站页面分配一个渲染进程，进程在沙箱内"
    }), "\n", jsxs(_components.h2, {
      id: "提交文档",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#提交文档",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "提交文档"]
    }), "\n", jsx(_components.p, {
      children: "浏览器进程将网络进程接收到的 HTML 数据提交给渲染进程"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息"
      }), "\n", jsx(_components.li, {
        children: "渲染进程接受到“提交文档”消息后，从网络进程接受文档数据，接受完成后给浏览器进程发送“确认提交”消息"
      }), "\n", jsx(_components.li, {
        children: "浏览器进程收到“确认提交”的消息后，更新浏览器界面历史状态、安全状态、URL ，然后更新页面页面"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "渲染阶段",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#渲染阶段",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "渲染阶段"]
    }), "\n", jsx(_components.p, {
      children: "文档提交后，渲染进程开始页面解析与子资源加载，并停止加载动画"
    })]
  });
}
function MDXContent$D(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$D, {
      ...props
    })
  }) : _createMdxContent$D(props);
}
const GetFrontMatter$D = () => frontmatter$D;
const _5____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$D,
  GetToc: GetToc$D,
  default: MDXContent$D
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$C = () => [];
const frontmatter$C = void 0;
function _createMdxContent$C(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "渲染流程",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#渲染流程",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "渲染流程"]
    }), "\n", jsx(_components.p, {
      children: "DOM 生成\n样式计算\n布局\n。。。"
    })]
  });
}
function MDXContent$C(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$C, {
      ...props
    })
  }) : _createMdxContent$C(props);
}
const GetFrontMatter$C = () => frontmatter$C;
const _6____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$C,
  GetToc: GetToc$C,
  default: MDXContent$C
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$B = () => [{
  "id": "chrome-的-dns-缓存",
  "text": "Chrome 的 dns 缓存",
  "depth": 2
}];
const frontmatter$B = void 0;
function _createMdxContent$B(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "浏览器的-dns-缓存",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#浏览器的-dns-缓存",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "浏览器的 dns 缓存"]
    }), "\n", jsxs(_components.h2, {
      id: "chrome-的-dns-缓存",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#chrome-的-dns-缓存",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Chrome 的 dns 缓存"]
    }), "\n", jsx(_components.p, {
      children: "chrome://net-internals/#dns"
    })]
  });
}
function MDXContent$B(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$B, {
      ...props
    })
  }) : _createMdxContent$B(props);
}
const GetFrontMatter$B = () => frontmatter$B;
const _98_____dns__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$B,
  GetToc: GetToc$B,
  default: MDXContent$B
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$A = () => [];
const frontmatter$A = void 0;
function _createMdxContent$A(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "参考",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://time.geekbang.org/column/intro/100033601?code=nQdm4VreDyrwzIsmJOa2fcr87sMexy98JSDAIn2etJo%253D&tab=catalog",
        children: "李兵"
      })
    })]
  });
}
function MDXContent$A(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$A, {
      ...props
    })
  }) : _createMdxContent$A(props);
}
const GetFrontMatter$A = () => frontmatter$A;
const _99readme$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$A,
  GetToc: GetToc$A,
  default: MDXContent$A
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$z = () => [];
const frontmatter$z = void 0;
function _createMdxContent$z(props) {
  const _components = {
    a: "a",
    h1: "h1",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "参考",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://q.shanyue.tech/",
        children: "山月"
      })
    })]
  });
}
function MDXContent$z(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$z, {
      ...props
    })
  }) : _createMdxContent$z(props);
}
const GetFrontMatter$z = () => frontmatter$z;
const _99readme$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$z,
  GetToc: GetToc$z,
  default: MDXContent$z
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$y = () => [{
  "id": "c",
  "text": "c++",
  "depth": 2
}, {
  "id": "js",
  "text": "js",
  "depth": 2
}];
const frontmatter$y = void 0;
function _createMdxContent$y(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "引用",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#引用",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "引用"]
    }), "\n", jsxs(_components.h2, {
      id: "c",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#c",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "c++"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "指针：指向的内存地址，直接访问是内存地址，通过*访问值"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "指针常量（引用） int * const p：是指针的常量，不能切换指向，和 js 无可比性"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "常量指针 const int * p：指向常量的指针"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "js",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#js",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "js"]
    }), "\n", jsx(_components.p, {
      children: "js 没有指针"
    }), "\n", jsx(_components.p, {
      children: "js 的引用可以对比 c++的指针，同样是指向内存地址，但是 js 直接访问就是值"
    })]
  });
}
function MDXContent$y(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$y, {
      ...props
    })
  }) : _createMdxContent$y(props);
}
const GetFrontMatter$y = () => frontmatter$y;
const _1__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "运算符",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#运算符",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "运算符"]
    }), "\n", jsx(_components.p, {
      children: "赋值运算符"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "优先级"
      }), "\n", jsx(_components.li, {
        children: "结合性，只有在优先级相同时，结合性才发挥作用\n赋值运算符=是右结合，即从右开始加括号，如 a = b = c = 3 为 a = (b = (c = 3))"
      }), "\n"]
    })]
  });
}
function MDXContent$x(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$x, {
      ...props
    })
  }) : _createMdxContent$x(props);
}
const GetFrontMatter$x = () => frontmatter$x;
const _2___ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$x,
  GetToc: GetToc$x,
  default: MDXContent$x
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$w = () => [{
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
const frontmatter$w = void 0;
function _createMdxContent$w(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "loadash-手写",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#loadash-手写",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "loadash 手写"]
    }), "\n", jsxs(_components.h2, {
      id: "keyby",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#keyby",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "keyBy"]
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
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " keyBy"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "K"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " keyof"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "arr"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[], "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "key"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " K"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " arr."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "reduce"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "pre"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "cur"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " itemKey"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cur[key];"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " itemKey "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: ' "string"'
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " itemKey "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: ' "number"'
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      pre[itemKey "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cur;"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " pre;"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, {} "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Record"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "string"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">);"
            })]
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
    }), "\n", jsxs(_components.h3, {
      id: "mapkeys",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#mapkeys",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "mapKeys"]
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
        children: jsx(_components.code, {
          "data-language": "ts",
          "data-theme": "github-light",
          style: {
            display: "grid"
          },
          children: jsx(_components.span, {
            "data-line": "",
            children: " "
          })
        })
      })
    }), "\n", jsxs(_components.h3, {
      id: "merge",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#merge",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "merge"]
    })]
  });
}
function MDXContent$w(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$w, {
      ...props
    })
  }) : _createMdxContent$w(props);
}
const GetFrontMatter$w = () => frontmatter$w;
const _3lodash__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$w,
  GetToc: GetToc$w,
  default: MDXContent$w
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$v = () => [{
  "id": "createusestoragestate",
  "text": "createUseStorageState",
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
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "uselocalstoragestate-与-usesessionstoragestate",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselocalstoragestate-与-usesessionstoragestate",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLocalStorageState 与 useSessionStorageState"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "useLocalStorageState"
      }), "\n", jsx(_components.li, {
        children: "useSessionStorageState"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "都是通过函数 createUseStorageState来生成"
    }), "\n", jsxs(_components.h2, {
      id: "createusestoragestate",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#createusestoragestate",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "createUseStorageState"]
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " useLocalStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  isBrowser "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " localStorage "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
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
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " useSessionStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  isBrowser "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " sessionStorage "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
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
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUseStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getStorage"
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
              children: " Storage"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useStorageState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "key"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    let"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " storage"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Storage"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 错误处理"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
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
                color: "#005CC5"
              },
              children: "      onError"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#24292E"
              },
              children: "        console."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      },"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // https://github.com/alibaba/hooks/issues/800"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 防止Cookie禁用时无法获取localStorage或者SessionStorage"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 普通用户期望的功能是“禁用 Cookie”，但实际上意味着“不要让网站在我的计算机上保留数据”，目前，该行为取决于浏览器"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    try"
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
                color: "#24292E"
              },
              children: "      storage "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStorage"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (err) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      onError"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(err)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 自定义序列化方法"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " serializer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options?.serializer) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "serializer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " JSON"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "stringify"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 自定义反序列化方法"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " deserializer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options?.deserializer) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "deserializer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " JSON"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "parse"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 获取当前存储的值"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStoredValue"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      try"
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
                color: "#D73A49"
              },
              children: "        const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " raw"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " storage?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getItem"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (raw) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "          return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " deserializer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(raw)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (e) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        onError"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 没有存的值时使用defaultValue()或者defaultValue"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(options?.defaultValue)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "defaultValue"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?.defaultValue"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 初始化状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "state"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " getStoredValue"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // key改变时更新状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    useUpdateEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#6F42C1"
              },
              children: "      setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getStoredValue"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "())"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, [key])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 更新状态，参数同setState形式"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " updateState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " IFuncUpdater"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " currentState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(state) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // undefined时移除存储，否则更新存储"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isUndef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        storage?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "removeItem"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
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
                color: "#D73A49"
              },
              children: "        try"
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
                color: "#24292E"
              },
              children: "          storage?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setItem"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(key, "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "serializer"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(currentState))"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (e) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "          console."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(e)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [state, "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(updateState)] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  "
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
                color: "#24292E"
              },
              children: " useStorageState"
            })]
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
    })]
  });
}
function MDXContent$v(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$v, {
      ...props
    })
  }) : _createMdxContent$v(props);
}
const GetFrontMatter$v = () => frontmatter$v;
const _1useLocalStorageState_useSessionStorageState = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$v,
  GetToc: GetToc$v,
  default: MDXContent$v
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$u = () => [{
  "id": "useupdateeffect-与-useupdatelayouteffect",
  "text": "useUpdateEffect 与 useUpdateLayoutEffect",
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
    li: "li",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "useupdateeffect-与-useupdatelayouteffect",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdateeffect-与-useupdatelayouteffect",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdateEffect 与 useUpdateLayoutEffect"]
    }), "\n", jsxs(_components.h2, {
      id: "useupdateeffect-与-useupdatelayouteffect-1",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdateeffect-与-useupdatelayouteffect-1",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdateEffect 与 useUpdateLayoutEffect"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "useUpdateEffect：跳过第一次渲染的 useEffect"
      }), "\n", jsx(_components.li, {
        children: "useUpdateLayoutEffect：跳过第一次渲染的 useLayoutEffect"
      }), "\n"]
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
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " useEffect "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "|"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " useLayoutEffect"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " createUpdateEffect"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "hook"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " EffectHookType"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "hook"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "effect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // hook就是useEffect或者useLayoutEffect"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // effect和deps是useEffect(effect, deps)的参数"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 初始化isMounted为false，未挂载过"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isMounted"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // for react-refresh"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 渲染后重置isMounted"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    hook"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      return"
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        isMounted.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    hook"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "isMounted.current) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // 第一次渲染不执行用户的effect回调"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        isMounted.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // 第二次渲染后都执行用户的effect回调"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " effect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, deps)"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
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
function MDXContent$u(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$u, {
      ...props
    })
  }) : _createMdxContent$u(props);
}
const GetFrontMatter$u = () => frontmatter$u;
const _2useUpdateEffect___useUpdateLayoutEffectt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$u,
  GetToc: GetToc$u,
  default: MDXContent$u
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$t = () => [{
  "id": "uselatest",
  "text": "useLatest",
  "depth": 2
}, {
  "id": "usememoizedfn",
  "text": "useMemoizedFn",
  "depth": 2
}];
const frontmatter$t = void 0;
function _createMdxContent$t(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "uselatest-与-usememoizedfn",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselatest-与-usememoizedfn",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLatest 与 useMemoizedFn"]
    }), "\n", jsxs(_components.h2, {
      id: "uselatest",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#uselatest",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useLatest"]
    }), "\n", jsx(_components.p, {
      children: "获取最新值的 hook，但是不能避免对象的地址改变"
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
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 每次渲染都将最新的value存到ref中，但是value如果是引用类型地址还是会变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " ref"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(value)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ref.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ref"
            })]
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
      id: "usememoizedfn",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usememoizedfn",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useMemoizedFn"]
    }), "\n", jsx(_components.p, {
      children: "获取最新更新了状态的最新函数的 hook，而且函数地址不变，理论上可以替换 useCallback"
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
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// https://github.com/alibaba/hooks/pull/1470"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "type"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PickFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "  this"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " ThisParameterType"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  ..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Parameters"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " ReturnType"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 返回更新了状态但是地址不变的fn"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " noop"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "fn"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 开发环境日志"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (isDev) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      console."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        `useMemoizedFn expected parameter is a function, got ${"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fn"
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "}`"
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
              children: "      )"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // fnRef因为适配所以分开写"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 本质就是fnRef=useLatest(fn)"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 注意fnRef.current的地址会改变"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使用useRef保存最新的fn"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(fn)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 适配 react devtool"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // why not write `fnRef.current = fn`?"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // https://github.com/alibaba/hooks/issues/728"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fnRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fn, [fn])"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 初始化memoizedFn，memoizedFn.current的函数地址不会改变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " memoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "PickFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">>()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 只有初始化时赋值"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "memoizedFn.current) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 这里的第一个参数this是适配eslint的eslint no-invalid-this https://github.com/alibaba/hooks/pull/1464"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 这里是防止函数地址改变才包裹一层function"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 防止函数this指向丢失使用apply调用"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    memoizedFn."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fnRef.current."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "apply"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", args)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 返回的memoizedFn.current始终是通过function包裹的fn.current，fn.current保证是最新的函数"
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
                color: "#24292E"
              },
              children: " memoizedFn.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            })]
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
    })]
  });
}
function MDXContent$t(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$t, {
      ...props
    })
  }) : _createMdxContent$t(props);
}
const GetFrontMatter$t = () => frontmatter$t;
const _3useLatest_useMemoizedFn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$t,
  GetToc: GetToc$t,
  default: MDXContent$t
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$s = () => [{
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
const frontmatter$s = void 0;
function _createMdxContent$s(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "useraftimeout-与-userafinterval-与-usecountdown",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useraftimeout-与-userafinterval-与-usecountdown",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "use(Raf)Timeout 与 use(Raf)Interval 与 useCountDown"]
    }), "\n", jsxs(_components.h2, {
      id: "usetimeout",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usetimeout",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useTimeout"]
    }), "\n", jsx(_components.p, {
      children: "setTimeout 的 hook，返回 clear 函数来清除定时器"
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "fn"
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
                color: "#005CC5"
              },
              children: " void"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使fn函数对象地址不变，哪怕fn内含有状态也不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerCallback"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使setInterval的timer不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使clear函数对象地址不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 校验delay"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 保存最新定时器timer"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerCallback, delay)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
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
      id: "useraftimeout",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useraftimeout",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRafTimeout"]
    }), "\n", jsx(_components.p, {
      children: "用 requestAnimationFrame 模拟实现的 useTimeout，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等"
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
              children: "interface"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
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
              children: "  id"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timeout"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 先实现setRafTimeout"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  callback"
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
                color: "#005CC5"
              },
              children: " void"
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
              children: "  delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
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
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 如果是node等环境没有requestAnimationFrame，直接使用setTimeout调用后的定时器id"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " requestAnimationFrame "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
                color: "#24292E"
              },
              children: "      id: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(callback, delay),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录定时器id"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: "    id: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
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
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录开始时间"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " startTime"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 递归调用requestAnimationFrame，这是requestAnimationFrame的使用方式"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " loop"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 记录当前时间，话说这里也能用参数获取requestAnimationFrame调用的时间"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " current"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果delay的时间到了，执行callback"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " startTime "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 否则继续递归"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      handle.id "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录定时器id"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  handle.id "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " handle"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 判断是否有cancelAnimationFrame"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " cancelAnimationFrameIsNotDefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "t"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " t"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
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
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cancelAnimationFrame "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 清除setRafTimeout定时器"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 如果是node等环境没有cancelAnimationFrame使用clearTimeout"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancelAnimationFrameIsNotDefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancelAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useTimeout逻辑类似"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "fn"
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
                color: "#005CC5"
              },
              children: " void"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Handle"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "return"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, delay)"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearRafTimeout"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
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
      id: "useinterval",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useinterval",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useInterval"]
    }), "\n", jsx(_components.p, {
      children: "setInterval 的 hook，返回 clear 函数来清除定时器"
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useInterval"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  fn"
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
                color: "#005CC5"
              },
              children: " void"
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
              children: "  delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
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
              children: "  options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "immediate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {},"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使fn函数对象地址不变，哪怕fn内含有状态也不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerCallback"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使setInterval的timer不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "null"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使clear函数对象地址不变"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 校验delay"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果配置immediate则第一次渲染也执行fn"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options.immediate) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      timerCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 保存最新定时器timer"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerCallback, delay)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay, options.immediate])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
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
      id: "userafinterval",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#userafinterval",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRafInterval"]
    }), "\n", jsx(_components.p, {
      children: "用 requestAnimationFrame 模拟实现的 useInterval，更精准，页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等"
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
              children: "interface"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
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
              children: "  id"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useRafTimeout中类似"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  callback"
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
                color: "#005CC5"
              },
              children: " void"
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
              children: "  delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
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
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
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
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " requestAnimationFrame "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
                color: "#24292E"
              },
              children: "      id: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(callback, delay),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  let"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " start "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: "    id: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
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
              children: "  }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " loop"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " current"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " start "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      start "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Date"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "getTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    handle.id "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  handle.id "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(loop)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " handle"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " cancelAnimationFrameIsNotDefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "t"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " t"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " NodeJS"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Timer"
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
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " cancelAnimationFrame "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "handle"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Handle"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancelAnimationFrameIsNotDefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " clearInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancelAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(handle.id)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 和useInterval中类似"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  fn"
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
                color: "#005CC5"
              },
              children: " void"
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
              children: "  delay"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
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
              children: "  options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
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
              children: "    immediate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  },"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " immediate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options?.immediate"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fnRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timerRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Handle"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(delay) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " delay "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "return"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (immediate) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    timerRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#24292E"
              },
              children: "      fnRef."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, delay)"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [delay])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " clear"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (timerRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      clearRafInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timerRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " clear"
            })]
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
      id: "usecountdown",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usecountdown",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useCountDown"]
    }), "\n", jsx(_components.p, {
      children: "倒计时 Hook"
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
              children: " type"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " dayjs"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "ConfigType"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " interface"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
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
              children: "  leftTime"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  targetDate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  interval"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  onEnd"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
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
                color: "#005CC5"
              },
              children: " void"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " interface"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FormattedRes"
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
              children: "  days"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  hours"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  minutes"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  seconds"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  milliseconds"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 计算剩余时间"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "target"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TDate"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "target) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " left"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " dayjs"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target)."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "valueOf"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Date."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "now"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " left "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ?"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " :"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " left"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 格式化毫秒为日期"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " parseMs"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "milliseconds"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FormattedRes"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
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
                color: "#D73A49"
              },
              children: "  return"
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
                color: "#24292E"
              },
              children: "    days: Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 86400000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    hours: Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 3600000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 24"
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
              children: "    minutes: Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60"
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
              children: "    seconds: Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 60"
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
              children: "    milliseconds: Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "floor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(milliseconds) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "%"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
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
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCountdown"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "leftTime"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "targetDate"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "interval"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "onEnd"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 计算目标时间"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " target"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TDate"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果leftTime传入了值，注意undefined也算"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'leftTime'"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " in"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 如果leftTime是>0的数字"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(leftTime) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " leftTime "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        ?"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Date."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "now"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " leftTime"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        :"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "else"
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
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " targetDate"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [leftTime, targetDate])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 倒计时状态，就是countdown"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "timeLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setTimeLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target))"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 保存onEnd钩子"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " onEndRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(onEnd)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 没有目标时间则停止，并归零倒计时"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "target) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // for stop"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setTimeLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 立即计算并保存一次"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "    setTimeLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "calcLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target))"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " timer"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 每隔interval计算并保存倒计时"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " targetLeft"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " calcLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(target)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      setTimeLeft"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(targetLeft)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 倒计时结束时清除计时器并执行onEnd钩子"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (targetLeft "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        clearInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timer)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        onEndRef."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }, interval)"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
              children: " clearInterval"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timer)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [target, interval])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 将倒计时格式化为日期"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " formattedRes"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useMemo"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " parseMs"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(timeLeft), [timeLeft])"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [timeLeft, formattedRes] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " const"
            })]
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
    })]
  });
}
function MDXContent$s(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$s, {
      ...props
    })
  }) : _createMdxContent$s(props);
}
const GetFrontMatter$s = () => frontmatter$s;
const _4use_Raf_Timeout_use_Raf_Interval_useCountDown = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$s,
  GetToc: GetToc$s,
  default: MDXContent$s
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$r = () => [{
  "id": "userequestimplement",
  "text": "useRequestImplement",
  "depth": 2
}, {
  "id": "fetch",
  "text": "Fetch",
  "depth": 2
}];
const frontmatter$r = void 0;
function _createMdxContent$r(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "userequest",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#userequest",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRequest"]
    }), "\n", jsx(_components.p, {
      children: "useRequest 使用的插件机制\n通过 useRequestImplement 引入插件"
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
          children: [jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>("
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   service: Service<TData, TParams>,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   plugins?: Plugin<TData, TParams>[],"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ): Result<TFormated, TParams>"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// function useRequest<TData, TParams extends any[]>("
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   service: Service<TData, TParams>,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   options?: OptionsWithoutFormat<TData, TParams>,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//   plugins?: Plugin<TData, TParams>[],"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ): Result<TData, TParams>"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRequest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]>("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  service"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Service"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service就是接口"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options就是配置项"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  plugins"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[], "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// plugins是插件"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
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
              children: " useRequestImplement"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">(service, options, ["
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    ..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(plugins "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useDebouncePlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useLoadingDelayPlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    usePollingPlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useRefreshOnWindowFocusPlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useThrottlePlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useAutoRunPlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useCachePlugin,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    useRetryPlugin,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[])"
            })]
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
      id: "userequestimplement",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#userequestimplement",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useRequestImplement"]
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
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRequestImplement"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]>("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  service"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Service"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service就是接口，useRequset透传"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options就是配置项，useRequset透传"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  plugins"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Plugin"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [], "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// plugins是插件，"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "manual"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "rest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 开发环境"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (isDev) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (options.defaultParams "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "Array."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isArray"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(options.defaultParams)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      console."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "warn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        `expected defaultParams is array, got ${"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options"
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "defaultParams"
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "}`"
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
              children: "      )"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 将配置了默认manual的配置项给fetch"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fetchOptions"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    manual,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    ..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "rest,"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 始终保存最新的请求函数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " serviceRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useLatest"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(service)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 强制组件重新渲染的函数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " update"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useUpdate"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // Fetch实例处理请求，useCreation确保实例不会重复创建"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " fetchInstance"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCreation"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用插件的初始化钩子，然后获取Fetch初始值，如useAutoRunPlugin配置了loading初始值，注意和其他钩子在插件中写法不一样，这个是直接挂在函数上的，而不是返回值上"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " initState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " plugins"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      ."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "p"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " p?."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onInit"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(fetchOptions))"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      ."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "filter"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(Boolean)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Fetch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      serviceRef,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fetchOptions,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      update,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      Object."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "assign"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}, "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "initState),"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    )"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 在fetchInstance保存fetchOptions，为了fetchInstance调用options里的钩子，但是为什么类中没定义这个变量?"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fetchInstance.options "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fetchOptions"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 执行所有插件返回的包含多个钩子的对象"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  fetchInstance.pluginImpls "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " plugins."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "p"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " p"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance, fetchOptions))"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 组件渲染时，未配置手动请求时，发起请求"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useMount"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "manual) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // useCachePlugin can set fetchInstance.state.params from cache when init"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " params"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " fetchInstance.state.params "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " options.defaultParams "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // @ts-ignore"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      fetchInstance."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
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
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 组件销毁时取消请求"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useUnmount"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#24292E"
              },
              children: "    fetchInstance."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "cancel"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
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
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    loading: fetchInstance.state.loading,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    data: fetchInstance.state.data,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    error: fetchInstance.state.error,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    params: fetchInstance.state.params "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [],"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    cancel: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.cancel."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    refresh: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.refresh."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    refreshAsync: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.refreshAsync."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    run: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.run."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    runAsync: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.runAsync."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    mutate: "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "useMemoizedFn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance.mutate."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "bind"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fetchInstance)),"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Result"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
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
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.h2, {
      id: "fetch",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#fetch",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Fetch"]
    }), "\n", jsx(_components.p, {
      children: "核心代码"
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
              children: " default"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " class"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Fetch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " extends"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]> {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 插件钩子对象的数组"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  pluginImpls"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PluginReturn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">[]"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 记录的请求次数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  count"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 0"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "  state"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " FetchState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
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
                color: "#24292E"
              },
              children: "    loading: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
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
              children: "    params: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
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
              children: "    data: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
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
              children: "    error: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
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
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  constructor"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " serviceRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " MutableRefObject"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "Service"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">>, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// service"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " options"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Options"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// options"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " subscribe"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Subscribe"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 强制渲染的函数"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    public"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " initState"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Partial"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "FetchState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}, "
            }), jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// 初始状态"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  ) {"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 设置初始状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
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
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      loading: "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "options.manual,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "initState,"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 设置状态并强制渲染，没有用react的useState来保证状态改变时渲染，而是用强制渲染新数据实现"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "s"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Partial"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "FetchState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {}) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
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
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state,"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "s,"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "subscribe"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 执行钩子"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "event"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " keyof"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " PluginReturn"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">, "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "rest"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "[]) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 遍历插件钩子对象的数组，执行对应钩子"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " r"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".pluginImpls."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "map"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "i"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " i[event]?.("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "rest))."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "filter"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(Boolean)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 返回钩子给的状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " Object."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "assign"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}, "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "r)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 核心请求函数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  async"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " runAsync"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
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
                color: "#6F42C1"
              },
              children: "TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 请求次数加一"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " currentCount"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 执行插件onBefore钩子，并获取钩子给的状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
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
                color: "#005CC5"
              },
              children: "      stopNow"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
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
                color: "#005CC5"
              },
              children: "      returnNow"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
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
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "state"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onBefore'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果钩子给了stopNow就停止"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // stop request"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (stopNow) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 强制渲染新状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
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
              children: "      loading: "
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
              children: "      params,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      ..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "state,"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 如果钩子给了stopNow就返回"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // return now"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (returnNow) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "resolve"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(state.data)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用配置里的钩子onBefore"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onBefore"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    try"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 获取真正的请求函数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      let"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { servicePromise } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "        'onRequest'"
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
                color: "#005CC5"
              },
              children: "        this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".serviceRef.current,"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        params,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      )"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "servicePromise) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        servicePromise "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".serviceRef."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 开始请求，res是promise的then"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " res"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " await"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " servicePromise"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 取消请求"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // prevent run.then when request is canceled"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 强制渲染新状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        data: res,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        error: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
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
              children: "        loading: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
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
              children: "      })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用配置里的钩子onSuccess和插件里的"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onSuccess"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(res, params)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onSuccess'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", res, params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用配置里的钩子onFinally"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onFinally"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params, res, "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 调用插件里的钩子onFinally"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "        this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onFinally'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params, res, "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "      // 返回promise的then"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " res"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (error) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "        // prevent run.then when request is canceled"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "        return"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " Promise"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " {})"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        error,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        loading: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
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
              children: "      })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onError"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(error, params)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onError'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error, params)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "      this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "onFinally"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "?.(params, "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (currentCount "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "        this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onFinally'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", params, "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", error)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      throw"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " error"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 处理了promise的then的错误的函数"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  run"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "params"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TParams"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runAsync"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "params)."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "catch"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".options.onError) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "        console."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "error"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(error)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 取消请求"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  cancel"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".count "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
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
              children: "      loading: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
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
              children: "    })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onCancel'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 再请求一次"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  refresh"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // @ts-ignore"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "run"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.params "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []))"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 返回新请求的promise的then"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  refreshAsync"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "() {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // @ts-ignore"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runAsync"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.params "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " []))"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 修改data"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  mutate"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "data"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "oldData"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?:"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " TData"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " targetData"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(data) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "?"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " data"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ".state.data) "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " data"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 调用插件里的钩子onMutate"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "runPluginHandler"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: "'onMutate'"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", targetData)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "    // 强制渲染新状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "    this"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      data: targetData,"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
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
    })]
  });
}
function MDXContent$r(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$r, {
      ...props
    })
  }) : _createMdxContent$r(props);
}
const GetFrontMatter$r = () => frontmatter$r;
const _5useRequest = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$r,
  GetToc: GetToc$r,
  default: MDXContent$r
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$q = () => [];
const frontmatter$q = void 0;
function _createMdxContent$q(props) {
  return jsx(Fragment, {});
}
function MDXContent$q(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$q, {
      ...props
    })
  }) : _createMdxContent$q();
}
const GetFrontMatter$q = () => frontmatter$q;
const _6useMount_useUnMount_useMountedRef_mdx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$q,
  GetToc: GetToc$q,
  default: MDXContent$q
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$p = () => [];
const frontmatter$p = void 0;
function _createMdxContent$p(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "useupdate",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useupdate",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useUpdate"]
    }), "\n", jsx(_components.p, {
      children: "强制重新渲染"
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useUpdate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 初始为第一个对象字面量"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " [, "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({})"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 调用时更新为第二个对象字面量来触发重新渲染"
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
              children: " useCallback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " setState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({}), [])"
            })]
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
    })]
  });
}
function MDXContent$p(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$p, {
      ...props
    })
  }) : _createMdxContent$p(props);
}
const GetFrontMatter$p = () => frontmatter$p;
const _7useUpdate = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "usecreation",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usecreation",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useCreation"]
    }), "\n", jsx(_components.p, {
      children: "useCreation 是 useMemo 或 useRef 的替代品。"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "useMemo 无法保证被 memo 的值一定不会被重计算"
      }), "\n", jsx(_components.li, {
        children: "useRef 对复杂值如 new Obj() 会导致实例重复创建"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "而 useCreation 空 deps 被 memo 的值不会被重计算，参数是函数也保证了实例不会重新创建"
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
              children: " default"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useCreation"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "factory"
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
              children: " T"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " DependencyList"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 使用ref保存是否创建等状态"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " { "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "current"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " } "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "({"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    deps,"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    obj: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "undefined"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " as"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
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
              children: "    initialized: "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "false"
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
              children: "  })"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "  // 未创建 或者 依赖不同"
            })
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (current.initialized "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " false"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "depsAreSame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(current.deps, deps)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.deps "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " deps"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.obj "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " factory"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    current.initialized "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
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
                color: "#24292E"
              },
              children: " current.obj "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "as"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " T"
            })]
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
    })]
  });
}
function MDXContent$o(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$o, {
      ...props
    })
  }) : _createMdxContent$o(props);
}
const GetFrontMatter$o = () => frontmatter$o;
const _8useCreation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$o,
  GetToc: GetToc$o,
  default: MDXContent$o
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$n = () => [{
  "id": "useanimationframe",
  "text": "useAnimationFrame",
  "depth": 2
}, {
  "id": "计时器",
  "text": "计时器",
  "depth": 2
}];
const frontmatter$n = void 0;
function _createMdxContent$n(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "useanimationframe-和计时器",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useanimationframe-和计时器",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useAnimationFrame 和计时器"]
    }), "\n", jsx(_components.p, {
      children: "因为 setTimeout/setInterval 会因为任务阻塞延迟严重"
    }), "\n", jsx(_components.p, {
      children: "requestAnimationFrame 可以实现更精准的计时器"
    }), "\n", jsx(_components.p, {
      children: "requestAnimationFrame 是自动匹配帧率调用的 api，60 帧执行 60 次，120 帧执行 120 次"
    }), "\n", jsx(_components.p, {
      children: "api 设计目的就是使动画更丝滑"
    }), "\n", jsx(_components.p, {
      children: "所以 requestAnimationFrame 需要与浏览器的重绘同步，具有调用优先级，不会因为任务阻塞"
    }), "\n", jsxs(_components.h2, {
      id: "useanimationframe",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#useanimationframe",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useAnimationFrame"]
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
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "callback"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "durationTime"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " void"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " requestRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " startTimeRef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">()"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " animate"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "time"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " DOMHighResTimeStamp"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#D73A49"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (startTimeRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " durationTime"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " time "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " startTimeRef.current"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "      callback"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(durationTime)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    startTimeRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " time"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    requestRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(animate)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(() "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#24292E"
              },
              children: "    requestRef.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " requestAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(animate)"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "    return"
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "      if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " (requestRef.current) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "        cancelAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(requestRef.current)"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }, [])"
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
      id: "计时器",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#计时器",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "计时器"]
    }), "\n", jsx(_components.figure, {
      "data-rehype-pretty-code-figure": "",
      children: jsx(_components.pre, {
        style: {
          backgroundColor: "#fff",
          color: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "github-light",
        children: jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " IndexPage"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
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
                color: "#24292E"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ["
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "count"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "setCount"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useState"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useAnimationFrame"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "durationTime"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
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
                color: "#6F42C1"
              },
              children: "    setCount"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "prevCount"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " prevCount "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " durationTime "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1000"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
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
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "div"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">{Math."
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "round"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(count)}</"
            }), jsx(_components.span, {
              style: {
                color: "#22863A"
              },
              children: "div"
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
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " default"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " IndexPage"
            })]
          })]
        })
      })
    }), "\n", jsx("p", {
      align: "right",
      children: "23.12.01"
    })]
  });
}
function MDXContent$n(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$n, {
      ...props
    })
  }) : _createMdxContent$n(props);
}
const GetFrontMatter$n = () => frontmatter$n;
const _97useAnimationFrame____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$n,
  GetToc: GetToc$n,
  default: MDXContent$n
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$m = () => [];
const frontmatter$m = void 0;
function _createMdxContent$m(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "工具函数",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#工具函数",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "工具函数"]
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
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isBrowser"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " !!"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " window "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'undefined'"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " &&"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  window.document "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "&&"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  window.document.createElement"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isObject"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " Record"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "> "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!=="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " null"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " &&"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'object'"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isFunction"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "..."
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "args"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "=>"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'function'"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isString"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " string"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'string'"
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isBoolean"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " boolean"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'boolean'"
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isNumber"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " number"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'number'"
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " const"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isUndef"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " unknown"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ")"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: " value"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " is"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " undefined"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " =>"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  typeof"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " value "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'undefined'"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " isDev"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  process.env."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "NODE_ENV"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ==="
            }), jsx(_components.span, {
              style: {
                color: "#032F62"
              },
              children: " 'development'"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ||"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " process.env."
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "NODE_ENV"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ==="
            }), jsx(_components.span, {
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
function MDXContent$m(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$m, {
      ...props
    })
  }) : _createMdxContent$m(props);
}
const GetFrontMatter$m = () => frontmatter$m;
const _98_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$m,
  GetToc: GetToc$m,
  default: MDXContent$m
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$l = () => [{
  "id": "usedeepeffect",
  "text": "useDeepEffect",
  "depth": 2
}];
const frontmatter$l = void 0;
function _createMdxContent$l(props) {
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
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "usedeepcompareeffect",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usedeepcompareeffect",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useDeepCompareEffect"]
    }), "\n", jsxs(_components.h2, {
      id: "usedeepeffect",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#usedeepeffect",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "useDeepEffect"]
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
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " isDeepEqual"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "cur"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "pre"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  return"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " true"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "function"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useDeepEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "fn"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                color: "#E36209"
              },
              children: "deps"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ") {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " flag"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "0"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ");"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  const"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " preDeps"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: " ="
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: " useRef"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: "any"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ">();"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "  if"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " ("
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "!"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "isDeepEqual"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(deps, preDeps.current)) {"
            })]
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "    flag.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "+="
            }), jsx(_components.span, {
              style: {
                color: "#005CC5"
              },
              children: " 1"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: ";"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "  preDeps.current "
            }), jsx(_components.span, {
              style: {
                color: "#D73A49"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: " deps;"
            })]
          }), "\n", jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", jsxs(_components.span, {
            "data-line": "",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1"
              },
              children: "  useEffect"
            }), jsx(_components.span, {
              style: {
                color: "#24292E"
              },
              children: "(fn, [flag.current]);"
            })]
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
    })]
  });
}
function MDXContent$l(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$l, {
      ...props
    })
  }) : _createMdxContent$l(props);
}
const GetFrontMatter$l = () => frontmatter$l;
const _9useDeepCompareEffect = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$l,
  GetToc: GetToc$l,
  default: MDXContent$l
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$k = () => [{
  "id": "moduletype",
  "text": "moduleType",
  "depth": 2
}, {
  "id": "chunk",
  "text": "chunk",
  "depth": 2
}];
const frontmatter$k = void 0;
function _createMdxContent$k(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "modulechunkasset",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#modulechunkasset",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "module/chunk/asset"]
    }), "\n", jsxs(_components.h2, {
      id: "moduletype",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#moduletype",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "moduleType"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "javascript/auto：我们在项目内引入的 ESM/CommonJS 的模块 (ESM 模块要看 loader 是如何处理的，也有可能是 javascript/esm 类型，不必深究)"
      }), "\n", jsx(_components.li, {
        children: "javascript/esm：我们在项目内引入的 ESM Package，比如 html-to-image，在其 package.json 中含有 module 字段"
      }), "\n", jsx(_components.li, {
        children: "javascript/dynamic：require('./src' + xxx)，动态加载"
      }), "\n", jsx(_components.li, {
        children: "asset：图片等资源"
      }), "\n", jsx(_components.li, {
        children: "asset/resource：图片等资源"
      }), "\n", jsx(_components.li, {
        children: "runtime：webpack_require 下挂载的诸多方法"
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "chunk",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#chunk",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "chunk"]
    }), "\n", jsx(_components.p, {
      children: "一个 chunk 包含以下属性"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "initial：是否是 initial chunk，即首次 HTML 必须加载的模块"
      }), "\n", jsx(_components.li, {
        children: "entry：是否是 entry chunk"
      }), "\n", jsx(_components.li, {
        children: "hash：chunkhash"
      }), "\n"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "分析你们项目中打包后 stats 对象的 module/chunk/asset"
        }), "\n", jsx(_components.p, {
          children: "分析"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "contenthash 与 chunkhash 有何区别"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "chunkhash：对应 chunk 的 hash"
          }), "\n", jsx(_components.li, {
            children: "contenthash：对应 chunk 中每个 content 的 hash，比如一个 chunk 中既包含 js，又包含 css 时"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "什么是 Concatenated Module"
        }), "\n", jsx(_components.p, {
          children: "将多个模块打包为 webpack 的一个模块"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "什么是 initial chunk"
        }), "\n", jsx(_components.p, {
          children: "首次 HTML 必须加载的模块"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "output.filename 与 output.chunkFilename 的区别是什么"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "filename：initial chunk 的文件名"
          }), "\n", jsx(_components.li, {
            children: "chunkFilename：非 initial chunk 的文件名"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$k(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$k, {
      ...props
    })
  }) : _createMdxContent$k(props);
}
const GetFrontMatter$k = () => frontmatter$k;
const _10module_chunk_asset = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$k,
  GetToc: GetToc$k,
  default: MDXContent$k
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$j = () => [];
const frontmatter$j = void 0;
function _createMdxContent$j(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    ol: "ol",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "bundle-spliting",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#bundle-spliting",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "bundle spliting"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "将示例一中的 common.js 抽出来进行单独打包"
      }), "\n", jsx(_components.li, {
        children: "optimization.splitChunks 中 chunks、minChunks、minSize 各参数代表什么"
      }), "\n", jsx(_components.li, {
        children: "如果将示例一中的 common.js 在 index.js 中引用，即被 initial chunk 引用，打包会发生什么"
      }), "\n", jsx(_components.li, {
        children: "如果将示例二中的 lodash.js 在 index.js 中引用，即被 initial chunk 引用，打包会发生什么"
      }), "\n"]
    })]
  });
}
function MDXContent$j(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$j, {
      ...props
    })
  }) : _createMdxContent$j(props);
}
const GetFrontMatter$j = () => frontmatter$j;
const _11bundle_spliting = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    span: "span",
    ...props.components
  };
  return jsxs(_components.h1, {
    id: "高效分包",
    children: [jsx(_components.a, {
      className: "autolink-headings",
      href: "#高效分包",
      children: jsx(_components.span, {
        style: {
          marginRight: "4px"
        },
        children: "#"
      })
    }), "高效分包"]
  });
}
function MDXContent$i(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$i, {
      ...props
    })
  }) : _createMdxContent$i(props);
}
const GetFrontMatter$i = () => frontmatter$i;
const _12____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$i,
  GetToc: GetToc$i,
  default: MDXContent$i
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$h = () => [];
const frontmatter$h = void 0;
function _createMdxContent$h(props) {
  return jsx(Fragment, {});
}
function MDXContent$h(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$h, {
      ...props
    })
  }) : _createMdxContent$h();
}
const GetFrontMatter$h = () => frontmatter$h;
const _13loader__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$h,
  GetToc: GetToc$h,
  default: MDXContent$h
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$g = () => [];
const frontmatter$g = void 0;
function _createMdxContent$g(props) {
  return jsx(Fragment, {});
}
function MDXContent$g(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$g, {
      ...props
    })
  }) : _createMdxContent$g();
}
const GetFrontMatter$g = () => frontmatter$g;
const _14json__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$g,
  GetToc: GetToc$g,
  default: MDXContent$g
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$f = () => [];
const frontmatter$f = void 0;
function _createMdxContent$f(props) {
  return jsx(Fragment, {});
}
function MDXContent$f(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$f, {
      ...props
    })
  }) : _createMdxContent$f();
}
const GetFrontMatter$f = () => frontmatter$f;
const _15import_assertions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$f,
  GetToc: GetToc$f,
  default: MDXContent$f
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$e = () => [];
const frontmatter$e = void 0;
function _createMdxContent$e(props) {
  return jsx(Fragment, {});
}
function MDXContent$e(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$e, {
      ...props
    })
  }) : _createMdxContent$e();
}
const GetFrontMatter$e = () => frontmatter$e;
const _16html__ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$e,
  GetToc: GetToc$e,
  default: MDXContent$e
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$d = () => [];
const frontmatter$d = void 0;
function _createMdxContent$d(props) {
  return jsx(Fragment, {});
}
function MDXContent$d(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$d, {
      ...props
    })
  }) : _createMdxContent$d();
}
const GetFrontMatter$d = () => frontmatter$d;
const _17____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$d,
  GetToc: GetToc$d,
  default: MDXContent$d
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$c = () => [];
const frontmatter$c = void 0;
function _createMdxContent$c(props) {
  return jsx(Fragment, {});
}
function MDXContent$c(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$c, {
      ...props
    })
  }) : _createMdxContent$c();
}
const GetFrontMatter$c = () => frontmatter$c;
const _18_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$c,
  GetToc: GetToc$c,
  default: MDXContent$c
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$b = () => [];
const frontmatter$b = void 0;
function _createMdxContent$b(props) {
  return jsx(Fragment, {});
}
function MDXContent$b(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$b, {
      ...props
    })
  }) : _createMdxContent$b();
}
const GetFrontMatter$b = () => frontmatter$b;
const _19svg____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$b,
  GetToc: GetToc$b,
  default: MDXContent$b
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$a = () => [];
const frontmatter$a = void 0;
function _createMdxContent$a(props) {
  const _components = {
    a: "a",
    h1: "h1",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "使用-node-api-学习-webpack",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#使用-node-api-学习-webpack",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "使用 node api 学习 webpack​"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "使用 webpack api 打包一个最简的 js 资源"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.img, {
            src: "/img/note/5/z-1-1.jpg",
            alt: "z-1-1"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "你所使用含有 webpack 的项目中，webpack 是通过 webpack-cli 打包的吗？"
        }), "\n", jsx(_components.p, {
          children: "是，nextjs 和 umijs 2.直播后明白并不是，nextjs 和 umijsj 将 webpack 包直接放入 compiled 文件夹 ，防止依赖更新带来的问题，所以是 api 打包的"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如何计算每次 webpack 构建时间"
        }), "\n", jsx(_components.p, {
          children: "stat.toJson().time\nstat.endTime - stat.statTime"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "断点调试 webpack 源码，了解其编译时间（startTime/endTime）是如何计算的"
        }), "\n", jsxs(_components.p, {
          children: ["首先进入 run 函数\n", jsx(_components.img, {
            src: "/img/note/5/z-1-2.jpg",
            alt: "z-1-2"
          }), "\n可以看到直接定义了 startTime\n下面是要找 endTime\n先看最后的调用逻辑\n", jsx(_components.img, {
            src: "/img/note/5/z-1-3.jpg",
            alt: "z-1-3"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["如果是判断是否闲置，两种情况都执行内部的 run 函数\n", jsx(_components.img, {
            src: "/img/note/5/z-1-4.jpg",
            alt: "z-1-4"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["再看 run 函数，如果错误执行的 finalCallback 把 err 传给用户，没有错误则执行 onCompiled 函数\n", jsx(_components.img, {
            src: "/img/note/5/z-1-5.jpg",
            alt: "z-1-5"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["这里便赋值了 startTime 和 endTime，compilation 对象是在调用 onCompiled 时由 webpack 实例的 compile 编译函数传过来的参数\n然后 new Stats 生成 stats 实例，实例根据 Stats 里定义的\n", jsx(_components.img, {
            src: "/img/note/5/z-1-6.jpg",
            alt: "z-1-6"
          })]
        }), "\n", jsx(_components.p, {
          children: "get 函数即可访问 startTime 和 endTime"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "断点调试执行 webpack 命令时的流程，体验它是如何在 webpack/webpack-cli 间相互调用的"
        }), "\n", jsxs(_components.p, {
          children: ["首先执行 webpack/bin/webpack.js\n", jsx(_components.img, {
            src: "/img/note/5/z-1-7.jpg",
            alt: "z-1-7"
          })]
        }), "\n", jsx(_components.p, {
          children: "其中 runCli 函数根据传入的 cli 对象拼接路径，加载 webpack-cli/bin/cli.js\npkg.bin[cli.binName]即 pkg.bin['webpack-cli']\nwebpack-cli 的 package.json 里配置了 bin\n![z-1-8]/img/note/5/z-1-8.jpg)"
        }), "\n", jsxs(_components.p, {
          children: ["调用逻辑是判断是否安装 webpack，未安装时引导安装，已安装则直接调用 webpack-cli\n", jsx(_components.img, {
            src: "/img/note/5/z-1-9.jpg",
            alt: "z-1-9"
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$a(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$a, {
      ...props
    })
  }) : _createMdxContent$a(props);
}
const GetFrontMatter$a = () => frontmatter$a;
const _1___node_api____webpack = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$a,
  GetToc: GetToc$a,
  default: MDXContent$a
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$9 = () => [];
const frontmatter$9 = void 0;
function _createMdxContent$9(props) {
  return jsx(Fragment, {});
}
function MDXContent$9(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$9, {
      ...props
    })
  }) : _createMdxContent$9();
}
const GetFrontMatter$9 = () => frontmatter$9;
const _20______ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$9,
  GetToc: GetToc$9,
  default: MDXContent$9
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$8 = () => [{
  "id": "作业",
  "text": "作业",
  "depth": 2
}];
const frontmatter$8 = void 0;
function _createMdxContent$8(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "cjs-运行时分析",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#cjs-运行时分析",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "cjs 运行时分析"]
    }), "\n", jsxs(_components.h2, {
      id: "作业",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#作业",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "作业"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "webpack 运行时代码进行调试三遍并理解"
        }), "\n", jsx(_components.p, {
          children: "调试略"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "webpack 的模块加载器是如何实现的"
        }), "\n", jsxs(_components.p, {
          children: [jsx(_components.img, {
            src: "/img/note/5/z-2-1.jpg",
            alt: "z-2-1"
          }), "\n首先定义全局缓存对象", jsx(_components.code, {
            children: "__webpack_module_cache__"
          }), "\n然后定义打包器函数", jsx(_components.code, {
            children: "__webpack_require__(moduleId){}"
          }), "\n函数中：\n首先根据 moduleId 读取全局缓存对象\n如果存在缓存，则直接返回缓存模块的 exports 对象\n如果不存在缓存，创建新的模块对象，首先根据 moduleId 放入缓存，然后赋值给局部模块对象，此时局部模块对象仅有 exports 属性\n然后根据 moduleId 读取全局模块数组，执行该模块函数并传入函数里的局部模块对象，拿到指定模块的 exports 值\n最后导出该模块的 exports 值"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "webpack 的运行时代码做了那些事情"
        }), "\n", jsxs(_components.p, {
          children: ["首先定义全局模块数组，将模块用带参数的函数包裹并根据 moduleId 放入数组的第一个位置后，第一个位置为入口模块 ", jsx(_components.code, {
            children: "__webpack_modules__"
          }), "\n然后定义模块加载器，可以根据 moduleId 执行模块，并返回模块的 exports 值 ", jsx(_components.code, {
            children: "__webpack_require__"
          }), "(moduleId){}\n最后执行模块加载器加载入口模块", jsx(_components.code, {
            children: "__webpack_require__(0)"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["CommonJS 中，如果不对 module 进行缓存有什么问题，即不实现以上的 ", jsx(_components.code, {
            children: "__webpack_module_cache__"
          }), " 数据结构"]
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "避免模块反复生成"
          }), "\n", jsx(_components.li, {
            children: "单例模式，每个模块只在第一次被引用时产出模块对象，之后的引用都是同一个对象。"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["阅读 webpack 模块加载器代码，我们在 CommonJS 中使用 ", jsx(_components.code, {
            children: "module.exports"
          }), " 与 ", jsx(_components.code, {
            children: "exports"
          }), " 有何区别"]
        }), "\n", jsxs(_components.p, {
          children: ["module.exports 是访问 module 的 exports 属性的值，exports 是该值的引用，即类似于", jsx(_components.code, {
            children: "const exports=module.exports"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["如何理解 webpack 运行时代码最后是 ", jsx(_components.code, {
            children: "__webpack_require__(0)"
          })]
        }), "\n", jsxs(_components.p, {
          children: [jsx(_components.img, {
            src: "/img/note/5/z-2-2.jpg",
            alt: "z-2-2"
          }), "\n", jsx(_components.img, {
            src: "/img/note/5/z-2-3.jpg",
            alt: "z-2-3"
          }), "\n执行打包后的 js 然后打印", jsx(_components.code, {
            children: "__webpack_modules__"
          }), "发现 0 的位置是空的\n所以其实 0 只是一个预留位置\n解释成是储存入口模块可能更容易理解\n且因为", jsx(_components.code, {
            children: "__webpack_modules__"
          }), "是根据文件的依赖关系进行深度优先遍历得来的数组，所以根节点即入口文件即 0 位置的模块"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$8(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$8, {
      ...props
    })
  }) : _createMdxContent$8(props);
}
const GetFrontMatter$8 = () => frontmatter$8;
const _2cjs_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "cjs-模块收集与-ast",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#cjs-模块收集与-ast",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "cjs 模块收集与 ast"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "了解 AST 概念"
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "通过解析 parser 生成 AST"
          }), "\n", jsx(_components.li, {
            children: "code(词法分析)=>Token(语法分析)=>AST"
          }), "\n", jsx(_components.li, {
            children: "Token 可以进行代码检查，语法高亮等"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 AST Explore 尝试 Javascript/CSS 解析，并观察其语法树"
        }), "\n", jsxs(_components.p, {
          children: [jsx(_components.img, {
            src: "/img/note/5/z-3-1.jpg",
            alt: "z-3-1"
          }), "\n如图是 require 的语法树，4.会用到"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如何根据入口文件搜索出所有需要打包的模块"
        }), "\n", jsxs(_components.p, {
          children: ["code 解析成 AST 后，以入口文件作为根节点开始深度优先遍历，通过 AST 找到具有 require 函数的节点,构建", jsx(_components.strong, {
            children: "webpack_modules"
          }), " 数组"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如何模拟实现运行时代码的生成，实现 mini-webpack"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.a, {
            href: "https://github.com/903040380/poor-webpack",
            children: "示例仓库"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如何去除代码中的所有 console.log"
        }), "\n", jsxs(_components.p, {
          children: ["见", jsx(_components.a, {
            href: "https://github.com/903040380/poor-webpack",
            children: "示例仓库"
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$7(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$7, {
      ...props
    })
  }) : _createMdxContent$7(props);
}
const GetFrontMatter$7 = () => frontmatter$7;
const _3cjs_____ast = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$7,
  GetToc: GetToc$7,
  default: MDXContent$7
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$6 = () => [];
const frontmatter$6 = void 0;
function _createMdxContent$6(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "文件名中的-hash",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#文件名中的-hash",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "文件名中的 hash"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "什么是 Long Term Cache，有何作用"
        }), "\n", jsx(_components.p, {
          children: "在服务器对响应头设置 cache-control 的值来达到最大化缓存时间，一般指一年时间或者两年时间"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "为什么配置 output.filename 时不建议注入版本号"
        }), "\n", jsx(_components.p, {
          children: "因为会导致更新版本时所有文件名变化，当文件名变更时会重新进行缓存，那么更新版本会导致所有缓存失效，但是更新版本一般并不会更新所有文件"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "为什么可以配置 Long Term Cache"
        }), "\n", jsx(_components.p, {
          children: "因为 webpack 打包时可以配置 contenthash,只改变改变内容的文件的 hash 值，新的文件会重新进行缓存，不会导致版本问题"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如何提升 webpack 编译时期计算 hash 的速度"
        }), "\n", jsxs(_components.p, {
          children: ["通过 output.hashFunction 属性,webpack5 已经支持直接配置’xxhash64‘\n", jsx(_components.a, {
            href: "https://github.com/umijs/umi/pull/9168#event-7302069734",
            children: "根据此方法对 umi 进行了优化"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 Node.js 中如何进行 hash 计算"
        }), "\n", jsx(_components.p, {
          children: "参考大佬的回答，是用 crypto 库"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$6(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$6, {
      ...props
    })
  }) : _createMdxContent$6(props);
}
const GetFrontMatter$6 = () => frontmatter$6;
const _4_____hash = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$6,
  GetToc: GetToc$6,
  default: MDXContent$6
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$5 = () => [];
const frontmatter$5 = void 0;
function _createMdxContent$5(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "cjs-与-esm",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#cjs-与-esm",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "cjs 与 esm"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "什么是 esm/commonjs"
        }), "\n", jsx(_components.p, {
          children: "esm:"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "是 ES 的模块规范，浏览器 node 都可运行"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "静态导入，所以可以 tree shaking，减少 js 体积，编译阶段就进行导入和导出"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "支持动态导入，执行到该行代码时才开始导入，异步加载（Promise）"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "导出的值是引用"
            }), "\n"]
          }), "\n"]
        }), "\n", jsx(_components.p, {
          children: "cjs: -是 node 的模块规范，webpack 和 node 都可运行，单纯浏览器环境不可以"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "动态导入，执行到该行代码时才开始导入，同步加载，加载完模块才会继续执行"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "具有缓存，可以通过 require.cache 查看，加载过的模块会通过缓存加载"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "导出的值是复制的值，类似 exports.a=a"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "什么是 import(module)"
        }), "\n", jsx(_components.p, {
          children: "类似于 require 的动态导入，但是是异步加载（Promise）"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "了解 skypack 和 jsdeliver 两个 npm 的 cdn 网站"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: jsx(_components.a, {
                href: "https://www.skypack.dev/",
                children: "skypack"
              })
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: jsx(_components.a, {
                href: "https://www.jsdelivr.com/",
                children: "jsdeliver"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$5(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$5, {
      ...props
    })
  }) : _createMdxContent$5(props);
}
const GetFrontMatter$5 = () => frontmatter$5;
const _5cjs_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$5,
  GetToc: GetToc$5,
  default: MDXContent$5
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$4 = () => [];
const frontmatter$4 = void 0;
function _createMdxContent$4(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "esm-to-cjs",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#esm-to-cjs",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "esm to cjs"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "对含 ESM 模块的 webpack 运行时代码进行调试与理解"
        }), "\n", jsx(_components.p, {
          children: "ok"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "webpack 含 ESM 的运行时代码做了那些事情"
        }), "\n", jsxs(_components.p, {
          children: ["首先根据 ast 生成的", jsx(_components.code, {
            children: "__webpack_module__"
          }), "的中用", jsx(_components.code, {
            children: "__webpack_require__"
          }), "的属性方法，r 给 ", jsx(_components.code, {
            children: "__webpack_exports__"
          }), "添加鉴别是 esm 模块的属性，d 将导出的属性用 getter(setter)定义，\n属性在下方声明是因为访问时已经赋值\n", jsx(_components.img, {
            src: "/img/note/5/z-6-1.jpg",
            alt: "z-6-1"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["缓存和", jsx(_components.code, {
            children: "__webpack_require__"
          }), "同 cjsm 模块\n", jsx(_components.img, {
            src: "/img/note/5/z-6-2.jpg",
            alt: "z-6-2"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["定义", jsx(_components.code, {
            children: "__webpack_require__"
          }), "的属性方法，r,d,o\n", jsx(_components.img, {
            src: "/img/note/5/z-6-3.jpg",
            alt: "z-6-3"
          })]
        }), "\n", jsxs(_components.p, {
          children: ["先和", jsx(_components.code, {
            children: "__webpack_module__"
          }), "中模块一样执行 r,给入口模块添加 esm 标签，然后调用", jsx(_components.code, {
            children: "__webpack_require__"
          }), "返回 sum 模块的导出"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "__webpack_require__"
          }), " 中的 d/r/o 各个变量指什么意思"]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "d:将 esm 导出的变量变成 exports 的 getter/setter 属性"
          }), "\n", jsx(_components.li, {
            children: "r:给 exports 添加一个属性标志这是 esm 模块"
          }), "\n", jsx(_components.li, {
            children: "o:相当于 Object 的 hasOwnProperty 方法"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$4(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$4, {
      ...props
    })
  }) : _createMdxContent$4(props);
}
const GetFrontMatter$4 = () => frontmatter$4;
const _6esm_to_cjs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$4,
  GetToc: GetToc$4,
  default: MDXContent$4
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$3 = () => [];
const frontmatter$3 = void 0;
function _createMdxContent$3(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "code-spliting-运行时分析",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#code-spliting-运行时分析",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "code spliting 运行时分析"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "对 code spliting 后的代码进行调试与理解"
        }), "\n", jsxs(_components.p, {
          children: ["见", jsx(_components.a, {
            href: "https://github.com/903040380/Xwebpack/tree/master/code-spliting/example/jsonp",
            children: "代码中的注释"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["将自己项目取消代码压缩进行打包，观察其打包后的代码骨架\n", jsx(_components.img, {
            src: "/img/note/5/z-7-1.jpg",
            alt: "z-7-1"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 webpack 中如何实现 code spliting"
        }), "\n", jsx(_components.p, {
          children: "import() 动态导入"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 webpack 中，加载 chunk 脚本的 JSONP Callback 如何实现"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.img, {
            src: "/img/note/5/z-7-2.jpg",
            alt: "z-7-2"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "当 output.chunkLoading 配置为 import 时，分析其源码"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.img, {
            src: "/img/note/5/z-7-3.jpg",
            alt: "z-7-3"
          })
        }), "\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "__webpack_require__.f.j"
          }), "不同\n", jsx(_components.code, {
            children: "__webpack_require__.l"
          }), "不需要了"]
        }), "\n", jsx(_components.p, {
          children: jsx(_components.img, {
            src: "/img/note/5/z-7-4.jpg",
            alt: "z-7-4"
          })
        }), "\n", jsx(_components.p, {
          children: "jsonp 不需要了，用 installChunck 替代"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["当代码分割时，async chunk 所对应的源代码发生变更时，该 async chunk 路径将会发生变化，而 entry chunk 中的", jsx(_components.code, {
            children: "__webpack_require__.u"
          }), " 内容也将发生变化，导致 entry chunk 的内容发生变更，随之路径发生变更，这将导致不必要的缓存失效，如何处理该问题。"]
        }), "\n", jsx(_components.p, {
          children: "runtimeChunk 设置为 true 可以单独把 webpack 的运行时给独立出来，这样每次只重新请求 runtime 文件，nextjs 就是这样做的,见 hash 的增强章节"
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$3(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$3, {
      ...props
    })
  }) : _createMdxContent$3(props);
}
const GetFrontMatter$3 = () => frontmatter$3;
const _7code_spliting_____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    code: "code",
    h1: "h1",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "magic-comment",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#magic-comment",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "magic comment"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 webpack 中有哪些魔法注释"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackIgnore：设置为 true 时，禁用动态导入解析。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackChunkName: 新 chunk 的名称。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackMode：可以指定以不同的模式解析动态导入。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackPrefetch：告诉浏览器将来可能需要该资源来进行某些导航跳转。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackPreload：告诉浏览器在当前导航期间可能需要该资源。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackInclude：在导入解析（import resolution）过程中，用于匹配的正则表达式。只有匹配到的模块才会被打包。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackExclude：在导入解析（import resolution）过程中，用于匹配的正则表达式。所有匹配到的模块都不会被打包。"
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsx(_components.p, {
              children: "webpackExports: 告知 webpack 只构建指定出口的动态 import() 模块。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "在 webpack 中如何实现 prefetch 的"
        }), "\n", jsxs(_components.p, {
          children: ["配置", jsx(_components.code, {
            children: "/* webpackPrefetch: true */"
          }), "后，webpack 运行时，会生成", jsx(_components.code, {
            children: "<link ref='prefetch'>"
          }), "标签并放入 dom 中，浏览器会开始预加载资源"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "阅读 prefetch 后的运行时代码进行理解"
        }), "\n", jsxs(_components.p, {
          children: ["见", jsx(_components.a, {
            href: "https://github.com/903040380/Xwebpack/tree/master/code-spliting/example/prefetch",
            children: "代码中的注释"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "补充关于 preload 的问题"
        }), "\n", jsxs(_components.p, {
          children: ["preload chunk 会在父 chunk 加载时，以并行方式开始加载。\nprefetch chunk 会在父 chunk 加载结束后开始加载。\n所以，需要在 sumjs 里再次 preload 导入 add 才产生 preload，即", jsx(_components.strong, {
            children: "只能加载 chunk 的 chunk"
          })]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2(props);
}
const GetFrontMatter$2 = () => frontmatter$2;
const _8magic_comment = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter: GetFrontMatter$2,
  GetToc: GetToc$2,
  default: MDXContent$2
}, Symbol.toStringTag, { value: "Module" }));
const GetToc$1 = () => [];
const frontmatter$1 = void 0;
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    h1: "h1",
    li: "li",
    p: "p",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "参考",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#参考",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "参考"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.a, {
            href: "https://q.shanyue.tech/",
            children: "山月"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.a, {
            href: "https://github.com/903040380/webpack-demo",
            children: "示例仓库"
          })
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
const GetFrontMatter$1 = () => frontmatter$1;
const _99readme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    code: "code",
    h1: "h1",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "hash-的增强",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#hash-的增强",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "hash 的增强"]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "理解 deterministic chunkIds/moduleIds，以及什么情况下 id 会发生变更"
        }), "\n", jsxs(_components.p, {
          children: ["当模块加载顺序发生改变，模块顺序会发生改变，moduleIds 随之改变，而同时", jsx(_components.code, {
            children: "__webpack_require__.u"
          }), "读取到的 chunkId 随 moduleIds 改变，即 chunkIds 改变"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "如有余力，阅读源码查看 deterministic 在 webpack 的内部实现"
        }), "\n", jsx(_components.p, {
          children: "根据大佬回答，只要模块的路径和文件名不做更改，那么 deterministic 后的 hash 值就是稳定的"
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "理解 runtimeChunk 选项，阅读其源码，理解它是如何运行代码的"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.img, {
            src: "/img/note/5/z-9-1.jpg",
            alt: "z-9-1"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "阅读常见的社区以及自己公司的脚手架代码，观察是否配置了以上优化选项，如果没有，考虑是否可贡献代码"
        }), "\n", jsx(_components.p, {
          children: jsx(_components.a, {
            href: "https://github.com/umijs/umi/pull/9541",
            children: "umi 已提交 pr，正在修改中"
          })
        }), "\n"]
      }), "\n"]
    })]
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
const GetFrontMatter = () => frontmatter;
const _9hash____ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetFrontMatter,
  GetToc,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/", element: React__default.createElement(MDXContent$_), preload: () => Promise.resolve().then(() => index) },
  { path: "/%E7%AC%94%E8%AE%B0/0%E4%BB%8B%E7%BB%8D/intro", element: React__default.createElement(MDXContent$Z), preload: () => Promise.resolve().then(() => intro) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/0%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4", element: React__default.createElement(MDXContent$Y), preload: () => Promise.resolve().then(() => _0____) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/10checkout", element: React__default.createElement(MDXContent$X), preload: () => Promise.resolve().then(() => _10checkout) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/11stash", element: React__default.createElement(MDXContent$W), preload: () => Promise.resolve().then(() => _11stash) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/12log%E4%B8%8Ereflog", element: React__default.createElement(MDXContent$V), preload: () => Promise.resolve().then(() => _12log_reflog) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/13cherry-pick", element: React__default.createElement(MDXContent$U), preload: () => Promise.resolve().then(() => _13cherryPick) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/1%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FVCS", element: React__default.createElement(MDXContent$T), preload: () => Promise.resolve().then(() => _1______VCS) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/2%E5%88%86%E5%B8%83%E5%BC%8F%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%B3%BB%E7%BB%9FDVCS", element: React__default.createElement(MDXContent$S), preload: () => Promise.resolve().then(() => _2_________DVCS) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/3HEAD%E4%B8%8Emaster%E4%B8%8Ebranch", element: React__default.createElement(MDXContent$R), preload: () => Promise.resolve().then(() => _3HEAD_master_branch) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/4push", element: React__default.createElement(MDXContent$Q), preload: () => Promise.resolve().then(() => _4push) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/5merge", element: React__default.createElement(MDXContent$P), preload: () => Promise.resolve().then(() => _5merge) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/6feature%20branch", element: React__default.createElement(MDXContent$O), preload: () => Promise.resolve().then(() => _6feature_branch) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/7rebase", element: React__default.createElement(MDXContent$N), preload: () => Promise.resolve().then(() => _7rebase) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/8revert", element: React__default.createElement(MDXContent$M), preload: () => Promise.resolve().then(() => _8revert) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/99readme", element: React__default.createElement(MDXContent$L), preload: () => Promise.resolve().then(() => _99readme$3) },
  { path: "/%E7%AC%94%E8%AE%B0/1git/9reset", element: React__default.createElement(MDXContent$K), preload: () => Promise.resolve().then(() => _9reset) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/13%E5%86%85%E5%AD%98", element: React__default.createElement(MDXContent$J), preload: () => Promise.resolve().then(() => _13__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/16%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E5%92%8C%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF", element: React__default.createElement(MDXContent$I), preload: () => Promise.resolve().then(() => _16_________) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/1%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BF%9B%E7%A8%8B", element: React__default.createElement(MDXContent$H), preload: () => Promise.resolve().then(() => _1_____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/2TCP%E5%8D%8F%E8%AE%AE", element: React__default.createElement(MDXContent$G), preload: () => Promise.resolve().then(() => _2TCP__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/3HTTP%E5%8D%8F%E8%AE%AE", element: React__default.createElement(MDXContent$F), preload: () => Promise.resolve().then(() => _3HTTP__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/4%E6%B5%8F%E8%A7%88%E5%99%A8%E7%BC%93%E5%AD%98", element: React__default.createElement(MDXContent$E), preload: () => Promise.resolve().then(() => _4_____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/5%E5%AF%BC%E8%88%AA%E6%B5%81%E7%A8%8B", element: React__default.createElement(MDXContent$D), preload: () => Promise.resolve().then(() => _5____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/6%E6%B8%B2%E6%9F%93%E6%B5%81%E7%A8%8B", element: React__default.createElement(MDXContent$C), preload: () => Promise.resolve().then(() => _6____) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/98%20%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84dns%E7%BC%93%E5%AD%98", element: React__default.createElement(MDXContent$B), preload: () => Promise.resolve().then(() => _98_____dns__) },
  { path: "/%E7%AC%94%E8%AE%B0/2%E6%B5%8F%E8%A7%88%E5%99%A8/99readme", element: React__default.createElement(MDXContent$A), preload: () => Promise.resolve().then(() => _99readme$2) },
  { path: "/%E7%AC%94%E8%AE%B0/3http/99readme", element: React__default.createElement(MDXContent$z), preload: () => Promise.resolve().then(() => _99readme$1) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/1%E5%BC%95%E7%94%A8", element: React__default.createElement(MDXContent$y), preload: () => Promise.resolve().then(() => _1__) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/2%E8%BF%90%E7%AE%97%E7%AC%A6", element: React__default.createElement(MDXContent$x), preload: () => Promise.resolve().then(() => _2___) },
  { path: "/%E7%AC%94%E8%AE%B0/4javascript/3lodash%E6%89%8B%E5%86%99", element: React__default.createElement(MDXContent$w), preload: () => Promise.resolve().then(() => _3lodash__) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/1useLocalStorageState%E4%B8%8EuseSessionStorageState", element: React__default.createElement(MDXContent$v), preload: () => Promise.resolve().then(() => _1useLocalStorageState_useSessionStorageState) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/2useUpdateEffect%20%E4%B8%8E%20useUpdateLayoutEffectt", element: React__default.createElement(MDXContent$u), preload: () => Promise.resolve().then(() => _2useUpdateEffect___useUpdateLayoutEffectt) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/3useLatest%E4%B8%8EuseMemoizedFn", element: React__default.createElement(MDXContent$t), preload: () => Promise.resolve().then(() => _3useLatest_useMemoizedFn) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/4use(Raf)Timeout%E4%B8%8Euse(Raf)Interval%E4%B8%8EuseCountDown", element: React__default.createElement(MDXContent$s), preload: () => Promise.resolve().then(() => _4use_Raf_Timeout_use_Raf_Interval_useCountDown) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/5useRequest", element: React__default.createElement(MDXContent$r), preload: () => Promise.resolve().then(() => _5useRequest) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/6useMount%E4%B8%8EuseUnMount%E4%B8%8EuseMountedRefx.md", element: React__default.createElement(MDXContent$q), preload: () => Promise.resolve().then(() => _6useMount_useUnMount_useMountedRef_mdx) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/7useUpdate", element: React__default.createElement(MDXContent$p), preload: () => Promise.resolve().then(() => _7useUpdate) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/8useCreation", element: React__default.createElement(MDXContent$o), preload: () => Promise.resolve().then(() => _8useCreation) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/97useAnimationFrame%E5%92%8C%E8%AE%A1%E6%97%B6%E5%99%A8", element: React__default.createElement(MDXContent$n), preload: () => Promise.resolve().then(() => _97useAnimationFrame____) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/98.%E5%B7%A5%E5%85%B7%E5%87%BD%E6%95%B0", element: React__default.createElement(MDXContent$m), preload: () => Promise.resolve().then(() => _98_____) },
  { path: "/%E7%AC%94%E8%AE%B0/6ahooks/9useDeepCompareEffect", element: React__default.createElement(MDXContent$l), preload: () => Promise.resolve().then(() => _9useDeepCompareEffect) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/10module%E4%B8%8Echunk%E4%B8%8Easset", element: React__default.createElement(MDXContent$k), preload: () => Promise.resolve().then(() => _10module_chunk_asset) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/11bundle%20spliting", element: React__default.createElement(MDXContent$j), preload: () => Promise.resolve().then(() => _11bundle_spliting) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/12%E9%AB%98%E6%95%88%E5%88%86%E5%8C%85", element: React__default.createElement(MDXContent$i), preload: () => Promise.resolve().then(() => _12____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/13loader%E5%88%9D%E8%AF%86", element: React__default.createElement(MDXContent$h), preload: () => Promise.resolve().then(() => _13loader__) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/14json%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$g), preload: () => Promise.resolve().then(() => _14json__) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/15import%20assertions", element: React__default.createElement(MDXContent$f), preload: () => Promise.resolve().then(() => _15import_assertions) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/16html%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$e), preload: () => Promise.resolve().then(() => _16html__) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/17%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$d), preload: () => Promise.resolve().then(() => _17____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/18%E5%B0%8F%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$c), preload: () => Promise.resolve().then(() => _18_____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/19svg%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$b), preload: () => Promise.resolve().then(() => _19svg____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/1%E4%BD%BF%E7%94%A8%20node%20api%20%E5%AD%A6%E4%B9%A0%20webpack", element: React__default.createElement(MDXContent$a), preload: () => Promise.resolve().then(() => _1___node_api____webpack) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/20%E7%AE%80%E5%8D%95%E6%A0%B7%E5%BC%8F%E5%A4%84%E7%90%86", element: React__default.createElement(MDXContent$9), preload: () => Promise.resolve().then(() => _20______) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/2cjs%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%86%E6%9E%90", element: React__default.createElement(MDXContent$8), preload: () => Promise.resolve().then(() => _2cjs_____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/3cjs%E6%A8%A1%E5%9D%97%E6%94%B6%E9%9B%86%E4%B8%8East", element: React__default.createElement(MDXContent$7), preload: () => Promise.resolve().then(() => _3cjs_____ast) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/4%E6%96%87%E4%BB%B6%E5%90%8D%E4%B8%AD%E7%9A%84hash", element: React__default.createElement(MDXContent$6), preload: () => Promise.resolve().then(() => _4_____hash) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/5cjs%E4%B8%8Eesm", element: React__default.createElement(MDXContent$5), preload: () => Promise.resolve().then(() => _5cjs_esm) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/6esm%20to%20cjs", element: React__default.createElement(MDXContent$4), preload: () => Promise.resolve().then(() => _6esm_to_cjs) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/7code%20spliting%E8%BF%90%E8%A1%8C%E6%97%B6%E5%88%86%E6%9E%90", element: React__default.createElement(MDXContent$3), preload: () => Promise.resolve().then(() => _7code_spliting_____) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/8magic%20comment", element: React__default.createElement(MDXContent$2), preload: () => Promise.resolve().then(() => _8magic_comment) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/99readme", element: React__default.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => _99readme) },
  { path: "/%E7%AC%94%E8%AE%B0/5webpack/9hash%20%E7%9A%84%E5%A2%9E%E5%BC%BA", element: React__default.createElement(MDXContent), preload: () => Promise.resolve().then(() => _9hash____) }
];
async function getPageData(pathname) {
  var _a, _b, _c, _d;
  const matched = routes.find((route) => route.path === pathname);
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
const PageDataContext = createContext({});
const usePageData = () => {
  return useContext(PageDataContext);
};
function PageDataProvider({
  children,
  value
}) {
  const [pageData, setPageData] = useState(value.pageData);
  useEffect(() => {
  });
  return /* @__PURE__ */ jsx(PageDataContext.Provider, { value: { pageData, setPageData }, children });
}
const NAV_HEIGHT = 56;
const DARK_KEY = "ZEROPRESS_DARK";
function isBrowser() {
  return typeof window !== "undefined" && !!window.document && !!window.document.createElement;
}
function normalizeUrl(url = "/") {
  return encodeURI(url);
}
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
  const [x, setX] = useState();
  const [y, setY] = useState();
  useEffect(() => {
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
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index2) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index2];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$1({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}
const NavigationContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /* @__PURE__ */ React.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /* @__PURE__ */ React.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}
function useInRouterContext() {
  return React.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  return React.useContext(LocationContext).location;
}
const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React.useContext(NavigationContext).static;
  if (!isStatic) {
    React.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = React.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let dataRouterContext = React.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = React.useContext(NavigationContext);
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useRoutes(routes2, locationArg) {
  return useRoutesImpl(routes2, locationArg);
}
function useRoutesImpl(routes2, locationArg, dataRouterState, future) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(
    false,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : invariant(false) : void 0;
  let {
    navigator
  } = React.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = React.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (process.env.NODE_ENV !== "production") {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ') : void 0;
    process.env.NODE_ENV !== "production" ? warning(matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.') : void 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ React.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (process.env.NODE_ENV !== "production") {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ React.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ React.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ React.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ React.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ React.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ React.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ React.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ React.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = React.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ React.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m) => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index2 === 0) {
          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index2) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ React.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ React.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ React.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook || {});
var DataRouterStateHook = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = React.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, hookName + ' can only be used on routes that contain a unique "id"') : invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = React.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0;
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? warning(false, message) : void 0;
  }
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = React.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = React.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  process.env.NODE_ENV !== "production" ? warning(locationContext != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.") : void 0;
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ React.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
new Promise(() => {
});
function Content({ location = "/" }) {
  const element = useRoutes(routes, normalizeUrl(location));
  console.log(
    "文件路由",
    routes.map((i) => i.path)
  );
  return element;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function Link({
  href = "/",
  className,
  children,
  onClick
}) {
  const navigate = useNavigate();
  const { setPageData } = usePageData();
  const isCsg = !(href == null ? void 0 : href.startsWith("http"));
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
function useSidebar() {
  var _a;
  const { pageData } = usePageData();
  const sidebar = ((_a = pageData == null ? void 0 : pageData.userConfig.themeConfig) == null ? void 0 : _a.sidebar) ?? {};
  const { pathname } = useLocation();
  const sidebarEntry = Object.entries(sidebar).find(
    ([key]) => pathname.startsWith(key)
  );
  const sidebarDir = sidebarEntry == null ? void 0 : sidebarEntry[1];
  return { sidebar: sidebarDir };
}
function usePrevNextPage() {
  const { sidebar } = useSidebar();
  const { pathname } = useLocation();
  const flatted = (sidebar == null ? void 0 : sidebar.map((dir) => dir.items ?? []).flat()) ?? [];
  const currentPageIndex = flatted.findIndex((item) => (item == null ? void 0 : item.link) === pathname);
  const prevPage = flatted[currentPageIndex - 1];
  const nextPage = flatted[currentPageIndex + 1];
  return { prevPage, nextPage };
}
function useTocScroll() {
  const [index2, setIndex] = useState();
  useEffect(() => {
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
function Footer() {
  const { prevPage, nextPage } = usePrevNextPage();
  return /* @__PURE__ */ jsx("footer", { className: "mt-[32px]", children: /* @__PURE__ */ jsxs("div", { className: "border-divider flex justify-between border-t pt-[24px]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[calc(50%-4px)]", children: prevPage && /* @__PURE__ */ jsx(Button, { text: prevPage.text, link: prevPage.link, children: "上一页" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-[calc(50%-4px)]", children: nextPage && /* @__PURE__ */ jsx(Button, { text: nextPage.text, link: nextPage.link, children: "下一页" }) })
  ] }) });
}
function Button({
  children,
  text,
  link
}) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: link,
      className: "border-divider hover:border-brand group block h-full w-full rounded-[8px] border px-[16px] py-[8px] transition-colors duration-300",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-text-2 text-[12px] font-[500] leading-[20px]", children }),
        /* @__PURE__ */ jsx("div", { className: " text-text-2 group-hover:text-brand overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-[500] leading-[20px] transition-colors duration-300", children: text })
      ]
    }
  );
}
function MobileSiderbar({
  visible,
  onClick
}) {
  const { sidebar } = useSidebar();
  if (!Array.isArray(sidebar) || sidebar.length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      "aside",
      {
        className: classNames(
          "w-sidebar border-divider bg-bg-sidebar fixed inset-y-0 left-0 z-40 overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300",
          visible ? "-translate-x-0" : "-translate-x-full"
        ),
        children: sidebar.map((dir) => {
          return /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("aside", { className: "mt-nav w-sidebar border-divider bg-bg-sidebar pc:-translate-x-0 fixed inset-y-0 left-0 z-40 -translate-x-full overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300", children: sidebar.map((dir) => {
    return /* @__PURE__ */ jsx(SiderbarDir, { dir }, dir.text);
  }) });
}
function SiderbarDir({
  dir,
  onClick
}) {
  var _a, _b;
  const [isExpand, setIsExpand] = useState(!dir.collapsed);
  return /* @__PURE__ */ jsxs("div", { className: "border-divider mt-[4px] border-t first:mt-0 first:border-t-0", children: [
    /* @__PURE__ */ jsxs(
      "h2",
      {
        onClick: () => setIsExpand((pre) => !pre),
        className: "text-text-1 mb-[6px] mt-[12px] flex cursor-pointer items-center justify-between font-[700]",
        children: [
          /* @__PURE__ */ jsx("span", { children: dir.text }),
          /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          height: isExpand ? `${(((_a = dir.items) == null ? void 0 : _a.length) ?? 0) * 27}px` : "0"
        },
        className: classNames(
          "mb-[12px] flex flex-col overflow-hidden pl-[1rem] transition-[height] duration-300"
        ),
        children: (_b = dir.items) == null ? void 0 : _b.map((item) => /* @__PURE__ */ jsx(
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
  const { pathname } = useLocation();
  const active = pathname === link;
  return /* @__PURE__ */ jsx(
    Link,
    {
      href: link,
      onClick,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover mb-[2px] overflow-hidden text-ellipsis whitespace-nowrap p-[2px] text-[14px]"
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
  if (!Array.isArray(toc) || toc.length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: classNames(
          "fixed inset-0  bg-[#00000060] transition-all duration-300",
          visible ? "opacity-100" : "opacity-0",
          visible ? "visible" : "invisible"
        ),
        onClick
      }
    ),
    /* @__PURE__ */ jsx(
      "aside",
      {
        className: classNames(
          "w-toc border-divider bg-bg-sidebar fixed inset-y-0 right-0 z-40  h-full border-l px-[28px] py-[16px] transition-transform duration-300",
          visible ? "translate-x-0" : "translate-x-full"
        ),
        children: /* @__PURE__ */ jsx(TocBody, { onClick, toc })
      }
    )
  ] });
}
function Toc({ toc }) {
  if (!Array.isArray(toc) || toc.length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("aside", { className: "w-toc full:flex sticky top-[calc(theme(spacing.nav)+48px)] hidden h-full flex-col", children: /* @__PURE__ */ jsx(TocBody, { toc }) });
}
function TocBody({
  toc,
  onClick
}) {
  const [index2] = useTocScroll();
  return /* @__PURE__ */ jsxs("div", { className: "border-divider pc:border-l px-[16px] font-[500]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pc:block bg-brand absolute left-0 hidden h-[18px] w-px transition-[opacity,top] duration-300",
        style: index2 !== void 0 ? { top: index2 * 28 + 33, opacity: 100 } : { top: 33, opacity: 0 }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-[14px] font-[600] leading-[28px]", children: "本页目录" }),
    /* @__PURE__ */ jsx("div", { children: toc.map((item, i) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    "a",
    {
      href: `#${item.id}`,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover block overflow-hidden text-ellipsis whitespace-nowrap text-[13px] leading-[28px]"
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
  const [state, setState] = useState({
    siderber: false,
    toc: false
  });
  return /* @__PURE__ */ jsxs("div", { className: "h-nav pc:hidden bg-bg-default sticky top-0 z-50 w-full border-b", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex h-full items-center justify-between px-[24px]", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "icon-[carbon--list] h-[24px] w-[24px] cursor-pointer",
          onClick: () => {
            setState({ siderber: true, toc: false });
          }
        }
      ),
      toc && toc.length > 0 && /* @__PURE__ */ jsx(
        "a",
        {
          className: "icon-[carbon--border-top] h-[24px] w-[24px] cursor-pointer",
          onClick: () => {
            setState({ siderber: false, toc: true });
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      MobileSiderbar,
      {
        visible: state.siderber,
        onClick: () => setState({ siderber: false, toc: false })
      }
    ),
    /* @__PURE__ */ jsx(
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: "pt-nav", children: [
    /* @__PURE__ */ jsx(Siderbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pc:ml-sidebar ml-0 flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-[768px] transition-[margin] duration-300", children: [
        /* @__PURE__ */ jsx(MobileBar, { toc }),
        /* @__PURE__ */ jsxs("div", { className: "p-[48px]", children: [
          /* @__PURE__ */ jsx("div", { className: "doc", children: content }),
          /* @__PURE__ */ jsx(Footer, {})
        ] })
      ] }),
      /* @__PURE__ */ jsx(Toc, { toc })
    ] })
  ] });
}
function Home({
  title,
  description
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "pt-nav flex h-screen flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[10vw]", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "text-[6vw]", children: [
      " ",
      description
    ] })
  ] }) });
}
function Switch({
  className,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: classNames(
        className,
        "bg-bg-switch border-divider hover:border-gray-1 relative h-[22px] w-[40px] rounded-[11px] border transition-colors duration-300"
      ),
      children: /* @__PURE__ */ jsx("div", { className: "bg-bg-inverse shadow-1 absolute left-px top-px h-[18px] w-[18px] overflow-hidden rounded-[50%] transition-all duration-300 dark:translate-x-[18px]", children: /* @__PURE__ */ jsxs(
        "span",
        {
          className: classNames(
            "*:text-text-2 *:absolute *:left-[3px] *:top-[3px] *:h-[12px] *:w-[12px] *:transition-opacity *:duration-300"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: "icon-[carbon--sun] opacity-100 dark:opacity-0" }),
            /* @__PURE__ */ jsx("div", { className: "icon-[carbon--moon] opacity-0 dark:opacity-100" })
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
  const { pathname } = useLocation();
  const isScrolled = Boolean(y);
  const isNotHome = pathname !== "/";
  const left = nav == null ? void 0 : nav.filter((item) => item.position === "left");
  const right = nav == null ? void 0 : nav.filter(
    (item) => item.position === "right" || item.position === void 0
  );
  const getItem = (item) => {
    const { text, img, logo, dark } = item;
    if (text) {
      return /* @__PURE__ */ jsx(TextItem, { item, pathname });
    } else if (logo) {
      return /* @__PURE__ */ jsx(LogoItem, { item });
    } else if (img) {
      return /* @__PURE__ */ jsx(ImgItem, { item });
    } else if (dark) {
      return /* @__PURE__ */ jsx(DarkItem, {});
    } else {
      return /* @__PURE__ */ jsx(Fragment, {});
    }
  };
  if (!nav || nav.length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("header", { className: "pc:fixed absolute left-0 top-0 z-50 w-full", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: classNames(
        isScrolled || isNotHome ? "border-divider bg-bg-default" : "border-transparent bg-transparent",
        "h-nav border-b px-[12px] pt-px transition-colors duration-300"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex h-full items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-full justify-start", children: left == null ? void 0 : left.map((item, index2) => /* @__PURE__ */ jsx("div", { className: "h-full", children: getItem(item) }, `${item.link}${index2}`)) }),
        /* @__PURE__ */ jsx("div", { className: "flex h-full justify-end", children: right == null ? void 0 : right.map((item, index2) => /* @__PURE__ */ jsx("div", { className: "h-full", children: getItem(item) }, `${item.link}${index2}`)) })
      ] })
    }
  ) });
}
function TextItem({ item, pathname }) {
  const { text, link } = item;
  const getDirname = (url = "/") => url.split("/").at(-2);
  const active = getDirname(pathname) === getDirname(link);
  if (!text) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("nav", { className: "mx-[12px] h-full justify-end", children: /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("nav", { className: "mx-[12px] h-full", children: /* @__PURE__ */ jsx(
    Link,
    {
      href: link,
      className: "text-text-2 text-hover flex  h-full items-center",
      children: /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("nav", { className: "mx-[12px] flex h-full items-center", children: /* @__PURE__ */ jsx(Link, { href: link, children: /* @__PURE__ */ jsx("img", { src: img, className: "h-[24px] w-[24px]" }) }) });
}
function DarkItem() {
  const { toggle: toggle2 } = useDark();
  return /* @__PURE__ */ jsx("nav", { className: "mx-[4px] flex h-full items-center", children: /* @__PURE__ */ jsx(Switch, { onClick: toggle2 }) });
}
function NotFound() {
  return /* @__PURE__ */ jsx("div", { className: "flex h-screen items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[60px] font-[600]", children: "404" }),
    /* @__PURE__ */ jsx("h1", { className: "text-[20px] font-[700]", children: "页面失踪" }),
    /* @__PURE__ */ jsx("div", { className: "pt-[16px]", children: /* @__PURE__ */ jsx(
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
  console.log("页面数据：", pageData);
  const getPage = () => {
    const pageType = pageData == null ? void 0 : pageData.pageType;
    if (pageType === "home") {
      return /* @__PURE__ */ jsx(
        Home,
        {
          title: pageData == null ? void 0 : pageData.userConfig.title,
          description: pageData == null ? void 0 : pageData.userConfig.description
        }
      );
    } else if (pageType === "doc") {
      return /* @__PURE__ */ jsx(
        Doc,
        {
          content: /* @__PURE__ */ jsx(Content, { location }),
          toc: pageData == null ? void 0 : pageData.toc
        }
      );
    } else if (pageType === "404") {
      return /* @__PURE__ */ jsx(NotFound, {});
    } else {
      return /* @__PURE__ */ jsx(Fragment, {});
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Nav, { nav: (_a = pageData == null ? void 0 : pageData.userConfig.themeConfig) == null ? void 0 : _a.nav }),
    getPage()
  ] });
}
function StaticRouter({
  basename,
  children,
  location: locationProp = "/",
  future
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = Action.Pop;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state || null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location,
    navigationType: action,
    navigator: staticNavigator,
    future,
    static: true
  });
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href = typeof to === "string" ? to : createPath(to);
  let encoded = ABSOLUTE_URL_REGEX.test(href) ? new URL(href) : new URL(href, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
async function render(location) {
  const pageData = await getPageData(location);
  const html = renderToString(
    /* @__PURE__ */ jsx(PageDataProvider, { value: { pageData }, children: /* @__PURE__ */ jsx(StaticRouter, { location, children: /* @__PURE__ */ jsx(Layout, { location }) }) })
  );
  return html;
}
export {
  render,
  routes
};
