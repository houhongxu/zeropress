import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { matchRoutes, useLocation, useRoutes } from "react-router-dom";
import { create } from "zustand";
import classNames from "classnames";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
const NAV_HEIGHT = 56;
const DARK_KEY = "EASYPRESS_DARK";
function isBrowser() {
  return typeof window !== "undefined" && !!window.document && !!window.document.createElement;
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
const config = { "docs": "docs", "title": "EASYPRESS", "description": "SSG Framework", "themeConfig": { "nav": [{ "img": "/favicon.jpg", "link": "/", "position": "left" }, { "text": "主页", "link": "/" }, { "text": "指南", "link": "/dir/markx" }, { "dark": true }, { "logo": "github", "link": "https://github.com/houhongxu/hhxpress" }], "sidebar": { "/dir": [{ "text": "测试mdx", "items": [{ "text": "mdx", "link": "/dir/markx" }, { "text": "计数器", "link": "/dir/count" }, { "text": "计数器1", "link": "/dir/count1" }, { "text": "计数器2", "link": "/dir/count2" }, { "text": "计数器3", "link": "/dir/count3" }, { "text": "计数器4", "link": "/dir/count4" }, { "text": "计数器5", "link": "/dir/count5" }] }, { "text": "测试mdx2", "items": [{ "text": "计数器1", "link": "/dir/count1" }, { "text": "计数器2", "link": "/dir/count2" }, { "text": "计数器3", "link": "/dir/count3" }, { "text": "计数器4", "link": "/dir/count4" }, { "text": "计数器5", "link": "/dir/count5" }] }, { "text": "测试mdx3", "items": [{ "text": "计数器1", "link": "/dir/count1" }, { "text": "计数器2", "link": "/dir/count2" }, { "text": "计数器3", "link": "/dir/count3" }, { "text": "计数器4", "link": "/dir/count4" }, { "text": "计数器5", "link": "/dir/count5" }] }, { "text": "测试mdx4", "items": [{ "text": "汉字", "link": "/dir/汉字" }, { "text": "计数器2", "link": "/dir/count2" }, { "text": "计数器3", "link": "/dir/count3" }, { "text": "计数器4", "link": "/dir/count4" }, { "text": "计数器5", "link": "/dir/count5" }] }, { "text": "测试mdx5", "items": [{ "text": "计数器1", "link": "/dir/count1" }, { "text": "计数器2", "link": "/dir/count2" }, { "text": "计数器3", "link": "/dir/count3" }, { "text": "计数器4", "link": "/dir/count4" }, { "text": "计数器5", "link": "/dir/count5" }] }] } }, "vite": {} };
const toc$2 = [];
const frontmatter$2 = {
  "pageType": "home"
};
function _createMdxContent$2(props) {
  return jsx(Fragment, {});
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2();
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2,
  toc: toc$2
}, Symbol.toStringTag, { value: "Module" }));
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
const toc$1 = [{
  "id": "gfm",
  "text": "GFM",
  "depth": 2
}, {
  "id": "22222如果我是汉字-标题的id是什么呢-autolink-literals",
  "text": "22222如果我是汉字 标题的id是什么呢 Autolink literals",
  "depth": 2
}, {
  "id": "footnote3333",
  "text": "Footnote3333",
  "depth": 2
}, {
  "id": "four",
  "text": "four",
  "depth": 4
}, {
  "id": "five",
  "text": "five",
  "depth": 5
}, {
  "id": "six",
  "text": "six",
  "depth": 6
}];
const frontmatter$1 = {
  "hello": "frontmatter"
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    figure: "figure",
    h1: "h1",
    h2: "h2",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "markx",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#markx",
        children: jsx(_components.span, {
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
    }), "\n", jsxs(_components.h2, {
      id: "gfm",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#gfm",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "GFM"]
    }), "\n", jsx(_components.p, {
      children: "执行上下文就是 JavaScript 执行一段代码时的运行环境"
    }), "\n", jsx(_components.p, {
      children: "执行上下文种类分为："
    }), "\n", jsx(_components.p, {
      children: "全局执行上下文\n函数执行上下文\n块级执行上下文 （es6 后出现）\neval 执行上下文 (暂不考虑)\n注意，全局执行上下文是在编译阶段就生成并存储在执行上下文栈中的"
    }), "\n", jsx(_components.p, {
      children: "每一次执行到**(函数/代码块)时，就会创建(函数/块级)执行上下文，然后放入执行上下文栈**中，执行完后弹出"
    }), "\n", jsx(_components.p, {
      children: "所以全局执行上下文直到程序终止前都会存在 当递归调用函数时，没有终止条件就一直入栈，会产生著名的栈溢出(Stack Overflow)"
    }), "\n", jsx(_components.p, {
      children: "执行上下文创建时，会："
    }), "\n", jsx(_components.p, {
      children: "为了新增块级作用域并兼容变量提升等旧特性，出现了新的定义比如词法环境和变量环境，本质并没有太大变化，但是尽量以 es3 为基础理解，以 es2018 为基础应用"
    }), "\n", jsx(_components.p, {
      children: "es3:"
    }), "\n", jsx(_components.p, {
      children: "创建变量对象 VO(作用域)：存储变量声明+函数声明+函数参数名(全局创建全局对象 GO，函数创建活动对象 AO 并初始化 arguments)\n创建作用域链 Scope：有序链表，包括自身变量对象+父级作用域[[scope]]\n确定 this 的指向\nes6:"
    }), "\n", jsx(_components.p, {
      children: "创建词法环境：环境记录（变量对象）+ 外部环境引用 outer(作用域链) (存储变量 let/const 的内容)\n创建变量环境：与词法环境类似 (存储变量提升的内容)\n确定 this 的指向\nes2018:"
    }), "\n", jsx(_components.p, {
      children: "创建词法环境：环境记录（变量对象）+ 外部环境引用 outer(作用域链) + this (存储变量 let/const 的内容)\n创建变量环境：与词法环境类似 (存储变量提升的内容)\n很多其他环境暂时不关注\n执行上下文栈是按执行顺序压入的，但是代码作用域往往不同于调用的顺序，所以作用域是通过作用域链来控制代码可以访问的变量等内容"
    }), "\n", jsxs(_components.h2, {
      id: "22222如果我是汉字-标题的id是什么呢-autolink-literals",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#22222如果我是汉字-标题的id是什么呢-autolink-literals",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "22222如果我是汉字 标题的id是什么呢 Autolink literals"]
    }), "\n", jsx(_components.p, {
      children: "作用域和作用域链\n作用域是 es3 的知识了，我们拓展到 2018 进行理解"
    }), "\n", jsx(_components.p, {
      children: "JavaScript 采用词法(静态)作用域，就是指作用域是由代码中函数(代码块)声明的位置来决定的"
    }), "\n", jsx(_components.p, {
      children: "作用域种类分为："
    }), "\n", jsx(_components.p, {
      children: "全局作用域（es3 全局对象 GO）(es2018 (词法/变量)环境的一部分)\n函数作用域（es3 活动对象 AO）(es2018 (词法/变量)环境的一部分)\n块级作用域 (es2018 词法环境的一部分)\nes3 执行阶段先看自身作用域再看父级作用域[[scope]]，注意[[scope]]是我们无法看到的"
    }), "\n", jsx(_components.p, {
      children: "es2018 执行阶段先查找词法环境再查找变量环境再查找 outer，即先看块级作用域再看函数作用域再看父级作用域，通过这种方式解决了新增 let/const 的块级作用域的问题"
    }), "\n", jsx(_components.p, {
      children: "作用域和作用域链\n作用域是 es3 的知识了，我们拓展到 2018 进行理解"
    }), "\n", jsx(_components.p, {
      children: "JavaScript 采用词法(静态)作用域，就是指作用域是由代码中函数(代码块)声明的位置来决定的"
    }), "\n", jsx(_components.p, {
      children: "作用域种类分为："
    }), "\n", jsx(_components.p, {
      children: "全局作用域（es3 全局对象 GO）(es2018 (词法/变量)环境的一部分)\n函数作用域（es3 活动对象 AO）(es2018 (词法/变量)环境的一部分)\n块级作用域 (es2018 词法环境的一部分)\nes3 执行阶段先看自身作用域再看父级作用域[[scope]]，注意[[scope]]是我们无法看到的"
    }), "\n", jsx(_components.p, {
      children: "es2018 执行阶段先查找词法环境再查找变量环境再查找 outer，即先看块级作用域再看函数作用域再看父级作用域，通过这种方式解决了新增 let/const 的块级作用域的问题"
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
      id: "footnote3333",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#footnote3333",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "Footnote3333"]
    }), "\n", jsx(_components.p, {
      children: "闭包是一个包含环境的函数"
    }), "\n", jsx(_components.p, {
      children: "环境指的是内部函数引用外部函数的变量的集合"
    }), "\n", jsx(_components.p, {
      children: "根据词法作用域的规则，内部函数总是可以访问它们的外部函数中的变量"
    }), "\n", jsx(_components.p, {
      children: "当外部函数执行完时，内部函数引用的外包函数的变量依然保存在内存中"
    }), "\n", jsx(_components.p, {
      children: "也有人称保存的这些变量的集合叫闭包"
    }), "\n", jsx(_components.p, {
      children: "在 chrome 控制台就可以看到闭包的特性"
    }), "\n", jsx(_components.p, {
      children: "chorme 控制台的[[Scopes]]\n[[Scopes]] 不是内部 JavaScript 属性，它是 Chromium 调试器创建的功能"
    }), "\n", jsx(_components.p, {
      children: "见 stackoverflow"
    }), "\n", jsx(_components.p, {
      children: "[[Scopes]]在 chrome 版本 114.0.5735.198（正式版本） (arm64) 浏览器内可以观察闭包"
    }), "\n", jsx(_components.p, {
      children: "在控制台可以通过console.dir看到属性[[Scopes]]"
    }), "\n", jsx(_components.p, {
      children: "[[Scopes]]是一个类数组的栈结构，[Closure,Script,Global]"
    }), "\n", jsx(_components.p, {
      children: "Closure：闭包作用域\nScript：Script 标签的作用域（控制台没有标签则没有变量内容)\nGlobal：全局作用域"
    }), "\n", jsxs(_components.h4, {
      id: "four",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#four",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "four"]
    }), "\n", jsx(_components.p, {
      children: "所以就有了 this 机制，"
    }), "\n", jsx(_components.p, {
      children: "上面创建执行上下文的时候也创建了 this，所以 this 也是分为："
    }), "\n", jsx(_components.p, {
      children: "全局执行上下文 this\n函数执行上下文 this\neval 执行上下文 this (暂不考虑)\n而他们都是一种指向："
    }), "\n", jsx(_components.p, {
      children: "直接调用：在浏览器中，指向 window，严格模式指向 undefined。node 中则指向 global，严格模式指向 undefined\n也有方法使 this 指向不同值："
    }), "\n", jsx(_components.p, {
      children: "对象方法调用：this 指向调用它的对象"
    }), "\n", jsxs(_components.h5, {
      id: "five",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#five",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "five"]
    }), "\n", jsx(_components.p, {
      children: "memo 通过浅比较 props 的每个值 来判断是否需要重新渲染子组件，而且可以指定具体渲染条件"
    }), "\n", jsx(_components.p, {
      children: "这个浅比较很关键，当属性是基本类型变量时，比较是是其本身的值，当属性是函数等引用类型变量时，比较的是引用的地址"
    }), "\n", jsx(_components.p, {
      children: "属性在父组件是否是状态也很关键，如果是状态，就算是引用类型变量比如对象，那地址也是不随父组件每次渲染而刷新的"
    }), "\n", jsx(_components.p, {
      children: "所以，需要严格关注引用类型变量在父组件的情况"
    }), "\n", jsx(_components.p, {
      children: "比如 这里子组件属性是 right，那么当 right 值不变时，子组件就不随父组件渲染"
    }), "\n", jsx(_components.p, {
      children: "如果这里子组件属性是 handleClick，因为 handleClick 在父组件不是状态，所以父组件每次渲染都刷新其地址，所以 memo 也没有效果，需要配合 useCallback"
    }), "\n", jsx(_components.p, {
      children: "所以 memo 在属性不仅仅是基本类型变量时，需要配合一些 hook 使用"
    }), "\n", jsx(_components.p, {
      children: "如果子组件渲染性能消耗不是很多的话就没必要使用 memo，因为缓存本身就消耗性能， useCallback 或 useMemo 同理"
    }), "\n", jsx(_components.p, {
      children: "当 props 在父组件都是状态时\n无需额外考虑"
    }), "\n", jsxs(_components.h6, {
      id: "six",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#six",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "six"]
    }), "\n", jsx(_components.p, {
      children: "请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头\n请求页面的来源地址"
    }), "\n", jsx(_components.p, {
      children: "服务器通过 referer 记录的来源来判断是否是内部域名"
    }), "\n", jsxs(_components.p, {
      children: ["例如：但是可以直接复制链接打开", jsx(_components.a, {
        href: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png",
        children: "https://i0.hdslb.com/bfs/banner/728f45f115c9b99752bb162664600a183b23c8da.png"
      })]
    }), "\n", jsx(_components.p, {
      children: "因为直接访问没有 Referer 请求头"
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
    p: "p",
    span: "span",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h1, {
      id: "汉字",
      children: [jsx(_components.a, {
        className: "autolink-headings",
        href: "#汉字",
        children: jsx(_components.span, {
          style: {
            marginRight: "4px"
          },
          children: "#"
        })
      }), "汉字"]
    }), "\n", jsx(_components.p, {
      children: "1"
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
const __ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter,
  toc
}, Symbol.toStringTag, { value: "Module" }));
const routes = [
  { path: "/", element: React.createElement(MDXContent$2), preload: () => Promise.resolve().then(() => index) },
  { path: "/dir/count", element: React.createElement(Counter), preload: () => Promise.resolve().then(() => count) },
  { path: "/dir/markx", element: React.createElement(MDXContent$1), preload: () => Promise.resolve().then(() => markx) },
  { path: "/dir/汉字", element: React.createElement(MDXContent), preload: () => Promise.resolve().then(() => __) }
];
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
  setPageData: (pageData) => set({ pageData }),
  toc: void 0,
  setToc: (toc2) => set({ toc: toc2 })
}));
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
    "a",
    {
      href: link,
      className: "border-divider hover:border-brand group block h-full w-full rounded-[8px] border px-[16px] py-[8px] transition-colors duration-300",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-text-2 text-[12px] font-[500] leading-[20px]", children }),
        /* @__PURE__ */ jsx("div", { className: "text-text-2 group-hover:text-brand text-[14px] font-[500] leading-[20px] transition-colors duration-300", children: text })
      ]
    }
  );
}
function Siderbar() {
  const { sidebar } = useSidebar();
  if (!sidebar || Object.keys(sidebar).length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("aside", { className: "mt-nav w-sidebar border-divider bg-bg-sidebar pc:-translate-x-0 fixed inset-y-0 left-0 -translate-x-full overflow-y-auto border-r px-[28px] py-[16px] transition-transform duration-300", children: sidebar == null ? void 0 : sidebar.map((dir) => {
    return /* @__PURE__ */ jsx(SiderbarDir, { dir }, dir.text);
  }) });
}
function SiderbarDir({ dir }) {
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
          height: isExpand ? `${(((_a = dir.items) == null ? void 0 : _a.length) ?? 0) * 25}px` : "0"
        },
        className: classNames(
          "mb-[12px] flex flex-col overflow-hidden pl-[1rem] transition-[height] duration-300"
        ),
        children: (_b = dir.items) == null ? void 0 : _b.map((item) => /* @__PURE__ */ jsx(SiderbarItem, { item }, item.link))
      }
    )
  ] });
}
function SiderbarItem({ item }) {
  const { text, link } = item;
  const { pathname } = useLocation();
  const active = pathname === link;
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: link,
      className: classNames(
        active ? "text-brand" : "text-text-2",
        "text-hover p-[2px] text-[14px]"
      ),
      children: text
    }
  );
}
function Toc({ toc: toc2 }) {
  const [index2] = useTocScroll();
  if (!toc2 || toc2.length < 1) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("aside", { className: "w-toc full:flex sticky top-[calc(theme(spacing.nav)+48px)] hidden h-full flex-col", children: /* @__PURE__ */ jsxs("div", { className: "border-divider border-l px-[16px] font-[500]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-brand absolute left-0 h-[18px] w-px transition-[opacity,top] duration-300",
        style: index2 !== void 0 ? { top: index2 * 28 + 33, opacity: 100 } : { top: 33, opacity: 0 }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "text-[14px] font-[600] leading-[28px]", children: "本页目录" }),
    /* @__PURE__ */ jsx("div", { children: toc2.map((item, i) => /* @__PURE__ */ jsx(TocItem, { active: index2 === i, item }, item.id)) })
  ] }) });
}
function TocItem({
  item,
  active = false
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
        event.preventDefault();
        const target = document.getElementById(item.id);
        scrollTo({ top: ((target == null ? void 0 : target.offsetTop) ?? NAV_HEIGHT) - NAV_HEIGHT });
      },
      style: {
        paddingLeft: `${item.depth - 2}rem`
      },
      children: item.text
    }
  ) });
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
function Doc({ content, toc: toc2 }) {
  useHeaderScroll();
  return /* @__PURE__ */ jsxs("div", { className: "pt-nav", children: [
    /* @__PURE__ */ jsx(Siderbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pc:ml-sidebar ml-0 flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "doc mx-auto w-full max-w-[768px] p-[48px] transition-[margin] duration-300", children: [
        content,
        /* @__PURE__ */ jsx(Footer, {})
      ] }),
      /* @__PURE__ */ jsx(Toc, { toc: toc2 })
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
function Nav() {
  var _a;
  const { y } = useWindowScroll();
  const { pageData } = usePageData();
  const { pathname } = useLocation();
  const nav = (_a = pageData == null ? void 0 : pageData.userConfig.themeConfig) == null ? void 0 : _a.nav;
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
  return /* @__PURE__ */ jsx("header", { className: "fixed left-0 top-0 z-10 w-full", children: /* @__PURE__ */ jsx(
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
  const active = pathname === link;
  if (!text) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsx("nav", { className: "mx-[12px] h-full justify-end", children: /* @__PURE__ */ jsx(
    "a",
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
    "a",
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
  return /* @__PURE__ */ jsx("nav", { className: "mx-[12px] flex h-full items-center", children: /* @__PURE__ */ jsx("a", { href: link, children: /* @__PURE__ */ jsx("img", { src: img, className: "h-[24px] w-[24px]" }) }) });
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
function Content() {
  const element = useRoutes(routes);
  console.log(
    "文件路由",
    routes.map((i) => i.path)
  );
  return element;
}
function Layout() {
  const { pageData, toc: toc2 } = usePageData();
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
      return /* @__PURE__ */ jsx(Doc, { content: /* @__PURE__ */ jsx(Content, {}), toc: toc2 });
    } else if (pageType === "404") {
      return /* @__PURE__ */ jsx(NotFound, {});
    } else {
      return /* @__PURE__ */ jsx(Fragment, {});
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    getPage()
  ] });
}
function PageDataLayout({ children }) {
  const { setPageData, setToc } = usePageData();
  useEffect(() => {
    getPageData(location.pathname).then((pageData) => {
      setPageData(pageData);
      setToc(pageData.toc);
    });
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
