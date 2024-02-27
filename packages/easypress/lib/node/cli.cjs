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

// src/node/cli.ts
var cli_exports = {};
__export(cli_exports, {
  cli: () => cli
});
module.exports = __toCommonJS(cli_exports);

// src/node/consts.ts
var import_path = __toESM(require("path"), 1);
var ROOT_PATH = import_path.default.join(__dirname, "..", "..");
var SRC_PATH = import_path.default.join(ROOT_PATH, "./src");
var RUNTIME_PATH = import_path.default.join(SRC_PATH, "./runtime");
var CLIENT_ENTRY_PATH = import_path.default.join(
  RUNTIME_PATH,
  "./client/client-entry.tsx"
);
var SERVER_ENTRY_PATH = import_path.default.join(
  RUNTIME_PATH,
  "./server/server-entry.tsx"
);
var SERVER_OUT_PATH = "./.easypress";
var CLIENT_OUT_PATH = "./dist";
var HTML_PATH = import_path.default.join(ROOT_PATH, "./index.html");
var CONFIG_OPTIONS = ["easypress.config.ts", "easypress.config.js"];

// src/node/plugins/remarkMdxToc.ts
var import_acorn = require("acorn");
var import_github_slugger = __toESM(require("github-slugger"), 1);
var import_unist_util_visit = require("unist-util-visit");
var remarkMdxToc = () => {
  return function(tree) {
    const toc = [];
    (0, import_unist_util_visit.visit)(tree, "heading", (node) => {
      if (node.depth > 1 && node.depth < 8) {
        const children = node.children;
        const headText = children.map((child) => {
          var _a;
          switch (child.type) {
            case "link":
              return ((_a = child.children) == null ? void 0 : _a.map((child2) => child2.value).join("")) || "";
            default:
              return child.value;
          }
        }).join("");
        const slugger = new import_github_slugger.default();
        const id = slugger.slug(headText);
        toc.push({
          id,
          text: headText,
          depth: node.depth
        });
      }
    });
    const template = `export const toc = ${JSON.stringify(toc, null, 2)};`;
    const estree = (0, import_acorn.parse)(template, {
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
var import_rollup = __toESM(require("@mdx-js/rollup"), 1);
var import_rehype_autolink_headings = __toESM(require("rehype-autolink-headings"), 1);
var import_rehype_pretty_code = __toESM(require("rehype-pretty-code"), 1);
var import_rehype_slug = __toESM(require("rehype-slug"), 1);
var import_remark_frontmatter = __toESM(require("remark-frontmatter"), 1);
var import_remark_gfm = __toESM(require("remark-gfm"), 1);
var import_remark_mdx_frontmatter = __toESM(require("remark-mdx-frontmatter"), 1);
function vitePluginMdx() {
  return {
    enforce: "pre",
    // 兼容rollupPluginMdx与vite-plugin-react https://github.com/vitejs/vite-plugin-react/issues/38
    async handleHotUpdate(ctx) {
      if (/\.mdx?/.test(ctx.file)) {
        console.log(ctx.file);
        ctx.server.ws.send({
          type: "custom",
          event: "mdx?-update"
        });
      }
    },
    ...(0, import_rollup.default)({
      remarkPlugins: [
        import_remark_gfm.default,
        // github的md语法
        import_remark_frontmatter.default,
        // md模块导出frontmatter变量
        import_remark_mdx_frontmatter.default,
        // mdx模块导出frontmatter变量
        remarkMdxToc
      ],
      rehypePlugins: [
        import_rehype_slug.default,
        // 自动添加h1-h6的id
        [
          import_rehype_autolink_headings.default,
          // 自动添加h1-h6的<a><a/>锚点，href是id
          {
            // 用hast定义锚点内容元素 https://github.com/syntax-tree/hast#nodes
            content: {
              type: "element",
              tagName: "span",
              children: [{ type: "text", value: "#" }],
              properties: {
                class: "autolink-headings",
                style: "margin-right: 4px;"
              }
            }
          }
        ],
        [
          import_rehype_pretty_code.default,
          {
            theme: "github-light"
          }
        ]
      ]
    })
  };
}

// src/node/plugins/vitePluginServeHtml.ts
var import_fs_extra = __toESM(require("fs-extra"), 1);
function vitePluginServeHtml({
  templatePath,
  entry
}) {
  return {
    name: "vitePluginServeHtml",
    // https://cn.vitejs.dev/guide/api-plugin.html#configureserver
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          var _a, _b;
          if (!((_a = req.url) == null ? void 0 : _a.endsWith(".html")) && req.url !== "/") {
            return next();
          }
          try {
            const template = await import_fs_extra.default.readFile(templatePath, "utf-8");
            const viteHtml = await ((_b = server.transformIndexHtml) == null ? void 0 : _b.call(
              server,
              req.url,
              template,
              req.originalUrl
            ));
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
          } catch (e) {
            console.error(e);
            return next(e);
          }
        });
      };
    }
  };
}

// src/node/plugins/vitePluginVirtualConfig.ts
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
      const configPath = siteConfig.userConfigPath || "";
      if (ctx.file.includes(configPath)) {
        if (restartRuntimeDevServer) {
          console.log("\u76D1\u542C\u5230\u914D\u7F6E\u6587\u4EF6\u66F4\u65B0\uFF0C\u91CD\u542F\u670D\u52A1\u4E2D...");
          await restartRuntimeDevServer();
        }
      }
    }
  };
}

// src/node/plugins/vitePluginVirtualRoutes.ts
var import_fast_glob = __toESM(require("fast-glob"), 1);
var import_path2 = __toESM(require("path"), 1);
function vitePluginVirtualRoutes({
  root = process.cwd()
}) {
  const virtualModuleId = "virtual:routes";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  return {
    name: "vitePluginVirtualRoutes",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const files = await import_fast_glob.default.glob("**/*.{jsx,tsx,md,mdx}", {
          ignore: ["node_modules/**", "client/**", "server/**"],
          cwd: root,
          deep: 2,
          absolute: true
        });
        let importTemplate = 'import React from "react";\n';
        const routes = files.map((file, index) => {
          const fileBaseName = import_path2.default.basename(file, import_path2.default.extname(file));
          importTemplate += `import Element${index + 1} from '${file}';
`;
          return `{ path: '/${fileBaseName.replace(/index$/, "")}', element: React.createElement(Element${index + 1}), preload: ()=> import('${file}') },
`;
        });
        return `
        ${importTemplate}
        export default [${routes.join("")}]
        `;
      }
    }
  };
}

// src/node/plugins/createPlugins.ts
var import_plugin_react = __toESM(require("@vitejs/plugin-react"), 1);
var import_vite_tsconfig_paths = __toESM(require("vite-tsconfig-paths"), 1);
function createPlugins({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    vitePluginMdx(),
    (0, import_plugin_react.default)({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }),
    // 根据热更新规则，仅导出组件时才能保证热更新正确，因为组件副作用是确定的，所以mdx导出frontmatter等对象会提示但是仍然尝试生效，这规则是react refresh特性，所以webpack热更新插件也是这样 https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#consistent-components-exports https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ root }),
    (0, import_vite_tsconfig_paths.default)()
    // vite-env.d.ts中declare虚拟模块引入的类型需要绝对路径，所以使用路径别名插件解析tsconfig的baseurl
  ];
}

// src/node/build.ts
var import_fs_extra2 = __toESM(require("fs-extra"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_vite = require("vite");
async function buildRuntime({
  root = process.cwd(),
  siteConfig
}) {
  const [clientBundle, serverBundle] = await Promise.all([
    viteBuild({ root, siteConfig }),
    viteBuild({ root, siteConfig, isServer: true })
  ]);
  await renderHtmls({ root, clientBundle, serverBundle });
}
function viteBuild({
  root = process.cwd(),
  isServer = false,
  siteConfig
}) {
  return (0, import_vite.build)({
    mode: "production",
    root: ROOT_PATH,
    // 获取postcss等配置文件
    plugins: createPlugins({ root, siteConfig }),
    build: {
      ssr: isServer,
      outDir: isServer ? import_path3.default.join(ROOT_PATH, SERVER_OUT_PATH) : import_path3.default.join(root, CLIENT_OUT_PATH),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? "server-entry.js" : "client-entry.js",
          format: "es"
        }
      }
    }
  });
}
async function renderHtmls({
  root = process.cwd(),
  clientBundle,
  serverBundle
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
  const serverEntryPath = import_path3.default.join(
    ROOT_PATH,
    SERVER_OUT_PATH,
    serverEntryChunk == null ? void 0 : serverEntryChunk.fileName
  );
  const clientEntryPath = `/${clientEntryChunk == null ? void 0 : clientEntryChunk.fileName}`;
  const { render, routes } = await import(serverEntryPath);
  const template = await import_fs_extra2.default.readFile(HTML_PATH, "utf-8");
  await Promise.all(
    routes.map(async (route) => {
      const location = route.path === "/" ? "/index" : route.path || "/index";
      const rendered = render(location);
      const html = template.replace("<!--app-html-->", rendered).replace(
        "</body>",
        `
    <script type="module" src="${clientEntryPath}"></script>
    </body>
    `
      ).replace(
        "</head>",
        styleAssets.map((asset) => `<link rel="stylesheet" href="/${asset.fileName}">`).join("\n")
      );
      await import_fs_extra2.default.ensureDir(import_path3.default.join(root, CLIENT_OUT_PATH));
      await import_fs_extra2.default.writeFile(
        import_path3.default.join(root, `${CLIENT_OUT_PATH}${location}.html`),
        html
      );
    })
  );
}

// src/node/config.ts
var import_fs_extra3 = __toESM(require("fs-extra"), 1);
var import_path4 = __toESM(require("path"), 1);
var import_vite2 = require("vite");
async function resolveSiteConfig({
  root = process.cwd(),
  command,
  mode
}) {
  const { userConfigPath, userConfig } = await resolveUserConfig({
    root,
    mode,
    command
  });
  const valuableUserConfig = {
    title: (userConfig == null ? void 0 : userConfig.title) || "EASYPRESS",
    description: (userConfig == null ? void 0 : userConfig.description) || "SSG Framework",
    themeConfig: (userConfig == null ? void 0 : userConfig.themeConfig) ?? {},
    vite: (userConfig == null ? void 0 : userConfig.vite) ?? {}
  };
  const siteConfig = {
    root,
    userConfigPath,
    userConfig: valuableUserConfig
  };
  return siteConfig;
}
async function resolveUserConfig({
  root = process.cwd(),
  command,
  mode
}) {
  const userConfigPath = getUserConfigPath({ root });
  const loadResult = await (0, import_vite2.loadConfigFromFile)(
    { command, mode },
    userConfigPath,
    root
  );
  return {
    userConfigPath,
    userConfig: loadResult == null ? void 0 : loadResult.config
  };
}
function getUserConfigPath({ root = process.cwd() }) {
  const userConfigPath = CONFIG_OPTIONS.map(
    (option) => import_path4.default.join(root, option)
  ).find((path7) => import_fs_extra3.default.existsSync(path7));
  return userConfigPath;
}

// src/node/tailwindcss.ts
var import_tailwind = require("@iconify/tailwind");
var import_path5 = __toESM(require("path"), 1);
var tailwindcssConfig = {
  content: [import_path5.default.join(ROOT_PATH, "./src/runtime/**/*.{tsx,ts,jsx,js}")],
  theme: {
    extend: {
      colors: {
        divider: {
          light: "rgba(60, 60, 60, 0.29)",
          dark: "rgba(84, 84, 84, 0.48)"
        },
        bg: {
          soft: { light: "#f9f9f9", dark: "#242424" }
        },
        text: {
          light: {
            1: "#213547",
            2: "rgba(60, 60, 60, 0.7)",
            3: "rgba(60, 60, 60, 0.33)",
            4: "rgba(60, 60, 60, 0.18)"
          },
          dark: {
            1: "rgba(255, 255, 255, 0.87)",
            2: "rgba(235, 235, 235, 0.6)",
            3: "rgba(235, 235, 235, 0.38)",
            4: "rgba(235, 235, 235, 0.18)"
          }
        }
      },
      spacing: { nav: "56px", sidebar: "272px", toc: "252px" }
    }
  },
  plugins: [(0, import_tailwind.addDynamicIconSelectors)()]
};

// src/node/server.ts
var import_autoprefixer = __toESM(require("autoprefixer"), 1);
var import_tailwindcss2 = __toESM(require("tailwindcss"), 1);
var import_vite3 = require("vite");
async function createRuntimeDevServer({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return (0, import_vite3.createServer)({
    root: siteConfig.root,
    // 避免dev服务访问路由时直接访问静态tsx资源，所以在/开启服务，路由一般在/docs内
    server: {
      host: true
      // 开启局域网与公网ip
    },
    css: {
      postcss: { plugins: [(0, import_tailwindcss2.default)(tailwindcssConfig), (0, import_autoprefixer.default)({})] }
    },
    plugins: createPlugins({ root, restartRuntimeDevServer, siteConfig })
  });
}

// src/node/cli.ts
var import_commander = require("commander");
var import_fs_extra4 = __toESM(require("fs-extra"), 1);
var import_path6 = __toESM(require("path"), 1);
var cli = import_commander.program;
var { version } = import_fs_extra4.default.readJSONSync(import_path6.default.join(ROOT_PATH, "./package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).argument("[root]", "dev server root dir", process.cwd()).description("dev server").option("-p,--port <value>", "dev server port").action(async (root, { port }) => {
  const absRoot = import_path6.default.resolve(root);
  const createServer2 = async () => {
    const siteConfig = await resolveSiteConfig({
      mode: "development",
      command: "serve"
    });
    const server = await createRuntimeDevServer({
      root: absRoot,
      siteConfig,
      restartRuntimeDevServer: async () => {
        await server.close();
        await createServer2();
      }
    });
    await server.listen(port);
    server.printUrls();
  };
  await createServer2();
});
cli.command("build").argument("[root]", "build root dir", process.cwd()).description("build").action(async (root) => {
  try {
    const absRoot = import_path6.default.resolve(root);
    const siteConfig = await resolveSiteConfig({
      mode: "production",
      command: "build"
    });
    await buildRuntime({ root: absRoot, siteConfig });
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cli
});
