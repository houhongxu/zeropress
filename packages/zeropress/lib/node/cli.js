// ../../node_modules/.pnpm/tsup@8.0.1_postcss@8.4.35_typescript@5.3.3/node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/node/consts.ts
import path2 from "path";
var ROOT_PATH = path2.join(__dirname, "..", "..");
var SRC_PATH = path2.join(ROOT_PATH, "./src");
var RUNTIME_PATH = path2.join(SRC_PATH, "./runtime");
var CLIENT_ENTRY_PATH = path2.join(
  RUNTIME_PATH,
  "./client/client-entry.tsx"
);
var SERVER_ENTRY_PATH = path2.join(
  RUNTIME_PATH,
  "./server/server-entry.tsx"
);
var SERVER_OUT_PATH = path2.join(ROOT_PATH, "./.zeropress");
var CLIENT_OUT_PATH = "./dist";
var CIIENT_PUBLIC_PATH = "./public";
var HTML_PATH = path2.join(ROOT_PATH, "./index.html");
var CONFIG_OPTIONS = ["zeropress.config.ts", "zeropress.config.js"];
var DEFAULT_USER_CONFIG = {
  docs: "docs",
  title: "ZEROPRESS",
  description: "SSG Framework",
  themeConfig: {
    nav: [{ text: "ZEROPRESS", link: "/", position: "left" }],
    autoNav: true,
    autoSidebar: true
  },
  icp: "",
  vite: {}
};

// src/node/plugins/vitePluginBuildImg.ts
import fse from "fs-extra";
import path3 from "path";
var isMdx = (file) => /\.mdx?/.test(file);
function vitePluginBuildImg({
  siteConfig
}) {
  return {
    name: "vitePluginBuildImg",
    apply: "build",
    transform(code, id) {
      let newCode = code;
      if (isMdx(id) && code.includes("_components.img")) {
        const dirname = path3.dirname(id);
        const [, publicDirname] = dirname.split("docs");
        const imageRegex = /_components\.img[^}]*?\bsrc:\s*["']([^"']+)["']/g;
        const srcs = Array.from(code.matchAll(imageRegex), (match) => match[1]);
        srcs.forEach(async (src) => {
          const decodeSrc = decodeURI(src);
          if (src.startsWith("./")) {
            const newSrc = path3.join(encodeURI(publicDirname), src);
            newCode = newCode.replace(src, newSrc);
            const oldPath = path3.join(dirname, decodeSrc);
            const newPath = path3.join(
              siteConfig.root,
              CLIENT_OUT_PATH,
              publicDirname,
              decodeSrc
            );
            const isOldExits = await fse.exists(oldPath);
            const isNewExits = await fse.exists(newPath);
            if (isOldExits && !isNewExits) {
              await fse.ensureDir(path3.dirname(newPath));
              await fse.copyFile(oldPath, newPath);
            }
          }
        });
      }
      return newCode;
    }
  };
}

// src/node/plugins/remarkMdxToc.ts
import { parse } from "acorn";
import Slugger from "github-slugger";
import { visit } from "unist-util-visit";
var remarkMdxToc = () => {
  return (tree) => {
    const toc = [];
    visit(tree, "heading", (node) => {
      if (node.depth > 1 && node.depth < 8) {
        const children = node.children;
        const headText = children.map((child) => {
          switch (child.type) {
            case "link":
              return child.children?.map((child2) => child2.value).join("") || "";
            default:
              return child.value;
          }
        }).join("");
        const slugger = new Slugger();
        const id = slugger.slug(headText);
        toc.push({
          id,
          text: headText,
          depth: node.depth
        });
      }
    });
    const template = `export const GetToc = () => ${JSON.stringify(toc, null, 2)};`;
    const estree = parse(template, {
      ecmaVersion: "latest",
      sourceType: "module"
    });
    const mdastNode = {
      type: "mdxjsEsm",
      value: "",
      data: {
        estree
      }
    };
    tree.children.unshift(mdastNode);
  };
};

// src/node/plugins/vitePluginMdx.ts
import rollupPluginMdx from "@mdx-js/rollup";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
function vitePluginMdx() {
  const isMdx2 = (file) => /\.mdx?/.test(file);
  return {
    enforce: "pre",
    // 将热更新边界拓展到接受该事件并处理的组件，提供hmr自定义事件给client
    async handleHotUpdate(ctx) {
      if (isMdx2(ctx.file)) {
        console.log("\u81EA\u5B9A\u4E49hmr\u4E8B\u4EF6:", ctx.file);
        ctx.server.ws.send({
          type: "custom",
          event: "mdx?-update"
        });
      }
    },
    ...rollupPluginMdx({
      remarkPlugins: [
        remarkGfm,
        // github的md语法
        remarkFrontmatter,
        // md模块导出frontmatter变量，改变name配置需要提供type和marker配置https://github.com/remarkjs/remark-frontmatter?tab=readme-ov-file#example-different-markers-and-fences
        remarkMdxFrontmatter,
        // mdx模块导出frontmatter变量
        remarkMdxToc
      ],
      rehypePlugins: [
        rehypeSlug,
        // 自动添加h1-h6的id
        [
          rehypeAutolinkHeadings,
          // 自动添加h1-h6的<a><a/>锚点，href是id
          {
            // 用hast定义锚点内容元素 https://github.com/syntax-tree/hast#nodes
            properties: {
              class: "autolink-headings"
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {
                style: "margin-right: 4px;"
              },
              children: [{ type: "text", value: "#" }]
            }
          }
        ],
        [
          rehypePrettyCode,
          {
            theme: "github-light"
          }
        ]
      ]
    })
  };
}

// src/node/plugins/vitePluginServeHtml.ts
import fse2 from "fs-extra";
function vitePluginServeHtml({
  templatePath,
  entry
}) {
  return {
    name: "vitePluginServeHtml",
    apply: "serve",
    // https://cn.vitejs.dev/guide/api-plugin.html#configureserver
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.endsWith(".html") && req.url !== "/") {
            return next();
          }
          const template = await fse2.readFile(templatePath, "utf-8");
          const viteHtml = await server.transformIndexHtml?.(
            req.url,
            template,
            req.originalUrl
          );
          const html = viteHtml.replace(
            "</body>",
            `
              <script type="module" src="${entry}"></script>
              

              </body>
              `
          );
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(html);
          return;
        });
      };
    }
  };
}

// src/node/plugins/vitePluginServeImg.ts
import fse3 from "fs-extra";
import mime from "mime";
import path4 from "path";
var isImg = (filename) => {
  if (!filename)
    return false;
  return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(filename);
};
function vitePluginServeImg({
  siteConfig
}) {
  return {
    name: "vite-plugin-fixed-image-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (isImg(req.url)) {
          const decodeSrc = decodeURI(req.url);
          const isExits = await fse3.exists(
            path4.join(siteConfig.root, CIIENT_PUBLIC_PATH, decodeSrc)
          );
          if (!isExits) {
            const imgPath = path4.join(
              siteConfig.root,
              siteConfig.userConfig.docs,
              decodeSrc
            );
            const imgType = mime.getType(imgPath);
            if (imgType) {
              res.setHeader("Content-Type", imgType);
            }
            fse3.createReadStream(imgPath).pipe(res);
            return;
          }
        }
        return next();
      });
    }
  };
}

// src/node/plugins/vitePluginTransformFrontmatter.ts
function vitePluginTransformFrontmatter() {
  const isMdx2 = (file) => /\.mdx?/.test(file);
  return {
    name: "vitePluginTransformFrontmatter",
    enforce: "post",
    transform(code, id) {
      if (isMdx2(id)) {
        code = code.replace("export const frontmatter", "const frontmatter");
        code += `
 export const GetFrontMatter = () => frontmatter`;
        return { code };
      }
    }
  };
}

// src/node/plugins/vitePluginVirtualConfig.ts
import path5 from "path";
function vitePluginVirtualConfig({
  siteConfig,
  restartRuntimeDevServer
}) {
  const virtualModuleId = "virtual:config";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  return {
    name: "vitePluginVirtualConfig",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(siteConfig.userConfig)}`;
      }
    },
    async handleHotUpdate(ctx) {
      const configFileName = siteConfig.userConfigPath ? path5.basename(siteConfig.userConfigPath) : void 0;
      if (configFileName && ctx.file.includes(configFileName)) {
        if (restartRuntimeDevServer) {
          console.log("\u76D1\u542C\u5230\u914D\u7F6E\u6587\u4EF6\u66F4\u65B0\uFF0C\u91CD\u542F\u670D\u52A1\u4E2D:", ctx.file);
          await restartRuntimeDevServer();
        }
      }
    }
  };
}

// src/node/utils.ts
import { spawn } from "cross-spawn";
import dayjs from "dayjs";
import fg from "fast-glob";
import fse4 from "fs-extra";
import path6 from "path";
async function globDocs(path12 = DEFAULT_USER_CONFIG.docs, options) {
  return await fg.glob("**/*.{jsx,tsx,md,mdx}", {
    ignore: ["node_modules/**", "client/**", "server/**"],
    cwd: path12,
    deep: 3,
    ...options
  });
}
var cache = /* @__PURE__ */ new Map();
function getGitTimestamp(file) {
  const cached = cache.get(file);
  if (cached)
    return cached;
  if (!fse4.existsSync(file))
    return 0;
  return new Promise((resolve, reject) => {
    const child = spawn(
      "git",
      ["log", "-1", '--pretty="%ai"', path6.basename(file)],
      { cwd: path6.dirname(file) }
    );
    let output = "";
    child.stdout.on("data", (d) => output += String(d));
    child.on("close", () => {
      if (output) {
        const timestamp = dayjs(output).unix();
        cache.set(file, timestamp);
        resolve(timestamp);
      } else {
        resolve(void 0);
      }
    });
    child.on("error", reject);
  });
}
async function promiseLimit(arr, limit, asyncFn) {
  const ret = new Array(arr.length);
  const executing = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const p = (async () => {
      const res = await asyncFn(item);
      ret[i] = res;
    })();
    executing.push(p);
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  await Promise.all(executing);
  return ret;
}

// src/shared/utils.ts
function normalizeUrl(url = "/") {
  return encodeURI(url);
}
function urlWithHtml(url) {
  return url ? url + ".html" : url;
}
function groupBy(arr, key) {
  return arr.reduce((pre, cur) => {
    const valueAsKey = cur[key];
    if (!pre[valueAsKey]) {
      pre[valueAsKey] = [];
    }
    pre[valueAsKey].push(cur);
    return pre;
  }, {});
}
function keyBy(arr, key) {
  return arr.reduce((pre, cur) => {
    const valueAsKey = cur[key];
    pre[valueAsKey] = cur;
    return pre;
  }, {});
}
function splitIndex(text) {
  const matched = text?.match(/^(\d+)(\.?\s*)(.*)$/);
  const index = matched?.[1];
  if (index) {
    return {
      index: parseInt(index),
      text: matched?.[3] ?? ""
    };
  } else {
    return {
      index: 0,
      text: text ?? ""
    };
  }
}

// src/node/plugins/vitePluginVirtualRoutes.ts
import path7 from "path";
function vitePluginVirtualRoutes({
  siteConfig
}) {
  const virtualModuleId = "virtual:routes";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  const docs = siteConfig.userConfig.docs;
  return {
    name: "vitePluginVirtualRoutes",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const files = await globDocs(docs, { absolute: true });
        let importTemplate = 'import React from "react";\n';
        const routes = await Promise.all(
          files.map(async (file, index) => {
            const relativePath = path7.relative(docs, file);
            const pathname = relativePath.replace(path7.extname(file), "").replace(/index$/, "");
            importTemplate += `import Element${index + 1} from '${file}';
`;
            const timestamp = await getGitTimestamp(file);
            return `{ file:'${file}', 
            timestamp:'${timestamp ?? ""}', 
            path: '/${normalizeUrl(urlWithHtml(pathname))}', 
            element: React.createElement(Element${index + 1}), 
            load: ()=> import('${file}') },
`;
          })
        );
        return `
        ${importTemplate}
        export default [${routes.join("")}]
        `;
      }
    }
  };
}

// src/node/plugins/createPlugins.ts
import pluginReact from "@vitejs/plugin-react";
function createPlugins({
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    vitePluginMdx(),
    // vite 中提到的，“为了更轻松地将简单常量与组件一起导出，模块仅在其值发生变化时才会失效”，所以mdx导出的复杂变量toc或者frontmatter会导致react-refresh失效，具体原因是react-refresh避免复杂变量的副作用 https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#consistent-components-exports
    // webpack 也提到了 https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    // react-refresh issue中可得知 生效需要首字母大写+函数变量 dan的指南https://github.com/facebook/react/issues/16604
    pluginReact({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }),
    // mdx接入@vitejs/plugin-react https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#includeexclude
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ siteConfig }),
    vitePluginTransformFrontmatter(),
    vitePluginBuildImg({ siteConfig }),
    vitePluginServeImg({ siteConfig })
  ];
}

// src/node/tailwind.ts
import { addDynamicIconSelectors } from "@iconify/tailwind";
import path8 from "path";
var tailwindcssConfig = {
  content: [
    path8.join(
      __dirname,
      "..",
      "..",
      "./src/default-theme/**/*.{tsx,ts,jsx,js}"
    )
    // 相对于lib的路径，tailwind引入是在node/config,打包后是lib/node/cli
  ],
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        pc: "768px",
        full: "1060px"
      },
      /** 声明时dark在下面所以默认显示dark主题颜色 */
      colors: {
        divider: "var(--ep-color-divider)",
        brand: "var(--ep-color-brand)",
        bg: {
          default: "var(--ep-color-bg-default)",
          switch: "var(--ep-color-bg-switch)",
          inverse: "var(--ep-color-bg-inverse)",
          sidebar: "var(--ep-color-bg-sidebar)"
        },
        text: {
          1: "var(--ep-color-text-1)",
          2: "var(--ep-color-text-2)",
          3: "var(--ep-color-text-3)",
          4: "var(--ep-color-text-4)"
        },
        gray: {
          1: "var(--ep-color-gray-1)"
        }
      },
      boxShadow: {
        1: "0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)",
        2: "0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07)",
        3: "0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)",
        4: "0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12)",
        5: "0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16)"
      },
      spacing: { nav: "56px", sidebar: "250px", toc: "200px" }
    }
  },
  plugins: [addDynamicIconSelectors()]
};

// src/node/build.ts
import autoprefixer from "autoprefixer";
import fse5 from "fs-extra";
import path9 from "path";
import tailwindcss from "tailwindcss";
import { build } from "vite";
async function buildRuntime({ siteConfig }) {
  console.log("\u5220\u9664\u65E7\u4EA7\u7269\uFF1A", CLIENT_OUT_PATH);
  await fse5.remove(CLIENT_OUT_PATH);
  console.log("\u6784\u5EFAjs\u6587\u4EF6...");
  const [clientBundle, serverBundle] = await promiseLimit(
    [{ siteConfig }, { siteConfig, isServer: true }],
    10,
    viteBuild
  );
  console.log("\u6784\u5EFAhtml\u6587\u4EF6...");
  await renderHtmls({ siteConfig, clientBundle, serverBundle });
}
function viteBuild({
  isServer = false,
  siteConfig
}) {
  return build({
    mode: "production",
    base: "./",
    root: ROOT_PATH,
    // 获取tsconfig.json等配置文件
    plugins: createPlugins({ siteConfig }),
    build: {
      ssr: isServer,
      outDir: isServer ? SERVER_OUT_PATH : path9.join(siteConfig.root, CLIENT_OUT_PATH),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? "server-entry.cjs" : "client-entry.[hash].js",
          format: isServer ? "cjs" : "es"
        }
      }
    },
    // 配置tailwindcss
    css: {
      postcss: { plugins: [tailwindcss(tailwindcssConfig), autoprefixer({})] }
    },
    resolve: {
      alias: {
        "@": SRC_PATH
      }
    }
  });
}
async function renderHtmls({
  clientBundle,
  serverBundle,
  siteConfig
}) {
  const clientEntryChunk = clientBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  const serverEntryChunk = serverBundle.output.find(
    (chunk) => chunk.type === "chunk" && chunk.isEntry
  );
  if (!clientEntryChunk || !serverEntryChunk) {
    throw new Error("\u6784\u5EFA\u4EA7\u7269\u4E3A\u7A7A");
  }
  const styleAssets = clientBundle.output.filter(
    (chunk) => chunk.type === "asset" && chunk.fileName.endsWith(".css")
  );
  if (await fse5.exists(CIIENT_PUBLIC_PATH)) {
    await fse5.copy(CIIENT_PUBLIC_PATH, path9.join(CLIENT_OUT_PATH));
  }
  const serverEntryPath = path9.join(SERVER_OUT_PATH, serverEntryChunk?.fileName);
  const clientEntryPath = `/${clientEntryChunk?.fileName}`;
  const helmetContext = {};
  const { render, routes } = await import(serverEntryPath);
  const { helmet } = helmetContext;
  const template = await fse5.readFile(HTML_PATH, "utf-8");
  await promiseLimit(routes, 10, async (route) => {
    const file = route.path === "/" ? "/index.html" : route.path;
    const relativeFilePath = `${CLIENT_OUT_PATH}${file}`;
    const helmetContext2 = {};
    const rendered = await render(route.path || "/", helmetContext2);
    const html = template.replace("<title>ZEROPRESS</title>", helmet?.title?.toString() || "").replace("<!--app-html-->", rendered).replace(
      "</body>",
      `
    <script type="module" src="${clientEntryPath}"></script>
    </body>
    `
    ).replace(
      "</head>",
      styleAssets.map((asset) => `<link rel="stylesheet" href="/${asset.fileName}">`).join("\n")
    );
    fse5.ensureDir(path9.join(siteConfig.root, path9.dirname(relativeFilePath))).catch((e) => console.log("client\u6587\u4EF6\u5939\u4E0D\u5B58\u5728\uFF1A", e)).then(
      () => fse5.writeFile(path9.join(siteConfig.root, relativeFilePath), html)
    ).catch((e) => console.log("html\u5199\u5165\u5931\u8D25", e));
  });
}

// src/node/config.ts
import fse6 from "fs-extra";
import path10 from "path";
import { loadConfigFromFile } from "vite";
async function resolveSiteConfig({
  root = process.cwd(),
  command,
  mode
}) {
  const { userConfigPath, userConfig = {} } = await resolveUserConfig({
    root,
    mode,
    command
  });
  const docs = userConfig.docs ?? DEFAULT_USER_CONFIG.docs;
  const auto = await autoSidebarAndNav({ docs });
  const navLeftIndex = userConfig.themeConfig?.nav?.findIndex(
    (item) => item.position === "left"
  ) ?? 0;
  const nav = userConfig.themeConfig?.autoNav === false ? userConfig.themeConfig.nav ?? [] : [
    ...(userConfig.themeConfig?.nav ?? []).slice(0, navLeftIndex),
    ...auto.nav,
    ...(userConfig.themeConfig?.nav ?? []).slice(navLeftIndex)
  ];
  const sidebar = userConfig.themeConfig?.autoSidebar === false ? userConfig.themeConfig.sidebar ?? {} : auto.sidebar;
  const normalizedNav = nav.map((item) => ({
    ...item,
    link: normalizeUrl(item.link)
  }));
  const normalizedSidebar = Object.entries(sidebar).reduce(
    (pre, [key, value]) => {
      pre[normalizeUrl(key)] = value.map((item) => ({
        ...item,
        link: normalizeUrl(item.link),
        items: item.items?.map((i) => ({ ...i, link: normalizeUrl(i.link) }))
      }));
      return pre;
    },
    {}
  );
  const requiredUserConfig = {
    docs,
    title: userConfig.title ?? DEFAULT_USER_CONFIG.title,
    description: userConfig.description ?? DEFAULT_USER_CONFIG.description,
    icp: userConfig.icp ?? DEFAULT_USER_CONFIG.icp,
    themeConfig: userConfig.themeConfig ? {
      ...userConfig.themeConfig,
      nav: normalizedNav,
      sidebar: normalizedSidebar,
      autoNav: true,
      autoSidebar: true
    } : {
      ...DEFAULT_USER_CONFIG.themeConfig,
      nav: normalizedNav,
      sidebar: normalizedSidebar,
      autoNav: true,
      autoSidebar: true
    },
    vite: userConfig.vite ?? DEFAULT_USER_CONFIG.vite
  };
  const siteConfig = {
    root,
    userConfigPath,
    userConfig: requiredUserConfig
  };
  return siteConfig;
}
async function autoSidebarAndNav({ docs }) {
  const files = (await globDocs(docs)).filter(
    (item) => !item.includes("index.md")
  );
  const data = files.map((item) => {
    const nav2 = item.split("/")[0];
    const dir = item.split("/")[1];
    const file = item.split("/")[2];
    const splitedNav = splitIndex(nav2);
    const splitedDir = splitIndex(dir);
    const splitedFile = splitIndex(file);
    return {
      path: `/${urlWithHtml(item.replace(path10.extname(item), ""))}`,
      nav: nav2,
      dir,
      file,
      navIndex: splitedNav.index,
      navText: splitedNav.text,
      navPath: `/${nav2}`,
      siderbarDirIndex: splitedDir.index,
      siderbarDirText: splitedDir.text.replace(
        path10.extname(splitedDir.text),
        ""
      ),
      fileIndex: splitedFile.index,
      fileText: splitedFile.text.replace(path10.extname(splitedFile.text), "")
    };
  });
  const nav = Object.entries(groupBy(data, "navText")).map(([navText, value]) => ({
    text: navText,
    index: keyBy(value, "navText")[navText].navIndex,
    link: value.sort(
      (a, b) => a.siderbarDirIndex - b.siderbarDirIndex + a.fileIndex - b.fileIndex
    )[0].path
  })).sort((a, b) => a.index - b.index);
  const sidebar = Object.entries(groupBy(data, "navPath")).reduce((pre, [navPath, value]) => {
    const sidebarItemsMap = Object.entries(
      groupBy(value, "siderbarDirText")
    ).reduce((pre2, [siderbarDirText, value2]) => {
      pre2[siderbarDirText] = value2.sort((a, b) => a.fileIndex - b.fileIndex).map((item) => ({
        text: item.fileText,
        link: item.path
      })).filter((item) => item.text);
      return pre2;
    }, {});
    pre[navPath] = Object.values(
      // keyBy可以根据text字段去重，因为text相同的items也是相同的，所以不会丢失值
      keyBy(
        value.sort((a, b) => a.siderbarDirIndex - b.siderbarDirIndex).map((item) => ({
          text: item.siderbarDirText,
          items: sidebarItemsMap[item.siderbarDirText],
          link: item.path
        })),
        "text"
      )
    );
    return pre;
  }, {});
  return { nav, sidebar };
}
async function resolveUserConfig({
  root = process.cwd(),
  command,
  mode
}) {
  const userConfigPath = getUserConfigPath({ root });
  const loadResult = await loadConfigFromFile(
    { command, mode },
    userConfigPath,
    root
  );
  return {
    userConfigPath,
    userConfig: loadResult?.config
  };
}
function getUserConfigPath({ root = process.cwd() }) {
  const userConfigPath = CONFIG_OPTIONS.map(
    (option) => path10.join(root, option)
  ).find((path12) => fse6.existsSync(path12));
  return userConfigPath;
}

// src/node/server.ts
import autoprefixer2 from "autoprefixer";
import tailwindcss2 from "tailwindcss";
import { createServer } from "vite";
function createRuntimeDevServer({
  siteConfig,
  restartRuntimeDevServer
}) {
  return createServer({
    root: siteConfig.root,
    // 避免dev服务访问路由时直接访问静态tsx资源，所以在/开启服务，路由一般在/docs内
    server: {
      host: true
      // 开启局域网与公网ip
    },
    plugins: createPlugins({
      restartRuntimeDevServer,
      siteConfig
    }),
    // 配置tailwindcss
    css: {
      postcss: { plugins: [tailwindcss2(tailwindcssConfig), autoprefixer2({})] }
    },
    resolve: {
      alias: {
        "@": SRC_PATH
      }
    },
    optimizeDeps: {
      // 因为zeropress是esm包，所以内部的cjs包不会被vite主动预构建，需要标记需要预构建的依赖
      include: [
        "zeropress > react-fast-compare",
        "zeropress > classnames",
        "zeropress > invariant",
        "zeropress > shallowequal",
        "zeropress > dayjs",
        "zeropress > react-dom/client"
      ],
      // 避免vite将别名和虚拟模块当成模块进行预构建
      exclude: ["@/runtime", "@/node", "@/default-theme", "@/shared"]
    }
  });
}

// src/node/cli.ts
import { program } from "commander";
import fse7 from "fs-extra";
import path11 from "path";
var cli = program;
var { version } = fse7.readJSONSync(path11.join(ROOT_PATH, "./package.json"));
cli.name("zeropress").version(version);
cli.command("dev", { isDefault: true }).description("dev server").option("-p,--port <value>", "dev server port").action(async ({ port }) => {
  const createServer2 = async () => {
    const siteConfig = await resolveSiteConfig({
      mode: "development",
      command: "serve"
    });
    const server = await createRuntimeDevServer({
      siteConfig,
      restartRuntimeDevServer: async () => {
        await server.close();
        await createServer2();
      }
    });
    await server.listen(port);
    server.printUrls();
    let isRestarting = false;
    server.watcher.on("all", async (event, path12) => {
      if (!isRestarting && event !== "change") {
        console.log("\u76D1\u542C\u5230\u6587\u4EF6\u589E\u5220\u6539\uFF0C\u91CD\u542F\u670D\u52A1\u4E2D:", path12);
        isRestarting = true;
        await server.close();
        await createServer2();
        isRestarting = false;
      }
    });
  };
  await createServer2();
});
cli.command("build").description("build").action(async () => {
  try {
    const siteConfig = await resolveSiteConfig({
      mode: "production",
      command: "build"
    });
    await buildRuntime({ siteConfig });
    console.log("\u6784\u5EFA\u6210\u529F");
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
export {
  cli
};
