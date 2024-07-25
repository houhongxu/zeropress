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

// tailwind.config.ts
var import_tailwind = require("@iconify/tailwind");
var import_path = __toESM(require("path"), 1);
var tailwindcssConfig = {
  content: [
    import_path.default.join(
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
        pc: "68px",
        full: "160px"
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
  plugins: [(0, import_tailwind.addDynamicIconSelectors)()]
};
var tailwind_config_default = tailwindcssConfig;

// src/node/consts.ts
var import_path2 = __toESM(require("path"), 1);
var ROOT_PATH = import_path2.default.join(__dirname, "..", "..");
var SRC_PATH = import_path2.default.join(ROOT_PATH, "./src");
var RUNTIME_PATH = import_path2.default.join(SRC_PATH, "./runtime");
var CLIENT_ENTRY_PATH = import_path2.default.join(
  RUNTIME_PATH,
  "./client/client-entry.tsx"
);
var SERVER_ENTRY_PATH = import_path2.default.join(
  RUNTIME_PATH,
  "./server/server-entry.tsx"
);
var SERVER_OUT_PATH = "./.easypress";
var CLIENT_OUT_PATH = "./dist";
var HTML_PATH = import_path2.default.join(ROOT_PATH, "./index.html");
var CONFIG_OPTIONS = ["easypress.config.ts", "easypress.config.js"];
var DEFAULT_USER_CONFIG = {
  docs: "docs",
  title: "EASYPRESS",
  description: "SSG Framework",
  themeConfig: {},
  vite: {}
};

// src/node/config.ts
var import_autoprefixer = __toESM(require("autoprefixer"), 1);
var import_fs_extra = __toESM(require("fs-extra"), 1);
var import_path3 = __toESM(require("path"), 1);
var import_tailwindcss = __toESM(require("tailwindcss"), 1);
var import_vite = require("vite");
var baseConfig = {
  // 配置tailwindcss
  css: {
    postcss: { plugins: [(0, import_tailwindcss.default)(tailwind_config_default), (0, import_autoprefixer.default)({})] }
  }
};
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
  const requiredUserConfig = {
    docs: userConfig.docs || DEFAULT_USER_CONFIG.docs,
    title: userConfig.title || DEFAULT_USER_CONFIG.title,
    description: userConfig.description || DEFAULT_USER_CONFIG.description,
    themeConfig: userConfig.themeConfig ?? DEFAULT_USER_CONFIG.themeConfig,
    vite: userConfig.vite ?? DEFAULT_USER_CONFIG.vite
  };
  const siteConfig = {
    root,
    userConfigPath,
    userConfig: requiredUserConfig
  };
  return siteConfig;
}
async function resolveUserConfig({
  root = process.cwd(),
  command,
  mode
}) {
  const userConfigPath = getUserConfigPath({ root });
  const loadResult = await (0, import_vite.loadConfigFromFile)(
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
    (option) => import_path3.default.join(root, option)
  ).find((path7) => import_fs_extra.default.existsSync(path7));
  return userConfigPath;
}

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
    const template = `export const GetToc = () => ${JSON.stringify(toc, null, 2)};`;
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
  const isMdx = (file) => /\.mdx?/.test(file);
  return {
    enforce: "pre",
    // 将热更新边界拓展到接受该事件并处理的组件，提供hmr自定义事件给client
    async handleHotUpdate(ctx) {
      if (isMdx(ctx.file)) {
        console.log("\u81EA\u5B9A\u4E49hmr\u4E8B\u4EF6:", ctx.file);
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
        // md模块导出frontmatter变量，改变name配置需要提供type和marker配置https://github.com/remarkjs/remark-frontmatter?tab=readme-ov-file#example-different-markers-and-fences
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
var import_fs_extra2 = __toESM(require("fs-extra"), 1);
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
            const template = await import_fs_extra2.default.readFile(templatePath, "utf-8");
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

// src/node/plugins/vitePluginTransformFrontmatter.ts
function vitePluginTransformFrontmatter() {
  const isMdx = (file) => /\.mdx?/.test(file);
  return {
    name: "vitePluginTransformFrontmatter",
    enforce: "post",
    transform(code, id) {
      if (isMdx(id)) {
        code = code.replace("export const frontmatter", "const frontmatter");
        code += `
 export const GetFrontMatter = () => frontmatter`;
        return { code };
      }
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
          console.log("\u76D1\u542C\u5230\u914D\u7F6E\u6587\u4EF6\u66F4\u65B0\uFF0C\u91CD\u542F\u670D\u52A1\u4E2D:", ctx.file);
          await restartRuntimeDevServer();
        }
      }
    }
  };
}

// src/node/plugins/vitePluginVirtualRoutes.ts
var import_fast_glob = __toESM(require("fast-glob"), 1);
var import_path4 = __toESM(require("path"), 1);
function vitePluginVirtualRoutes({
  docs
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
          cwd: docs,
          deep: 2,
          absolute: true
        });
        let importTemplate = 'import React from "react";\n';
        const routes = files.map((file, index) => {
          const relativePath = import_path4.default.relative(docs, file);
          const pathname = relativePath.replace(import_path4.default.extname(file), "").replace(/index$/, "");
          importTemplate += `import Element${index + 1} from '${file}';
`;
          return `{ path: '/${pathname}', element: React.createElement(Element${index + 1}), preload: ()=> import('${file}') },
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
  docs,
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    vitePluginMdx(),
    // vite 中提到的，“为了更轻松地将简单常量与组件一起导出，模块仅在其值发生变化时才会失效”，所以mdx导出的复杂变量toc或者frontmatter会导致react-refresh失效，具体原因是react-refresh避免复杂变量的副作用 https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#consistent-components-exports
    // webpack 也提到了 https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    // react-refresh issue中可得知 生效需要首字母大写+函数变量 dan的指南https://github.com/facebook/react/issues/16604
    (0, import_plugin_react.default)({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }),
    // mdx接入@vitejs/plugin-react https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#includeexclude
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ siteConfig, docs }),
    (0, import_vite_tsconfig_paths.default)(),
    // vite-env.d.ts中declare虚拟模块引入的类型需要绝对路径，所以使用路径别名插件解析tsconfig的baseurl
    vitePluginTransformFrontmatter()
  ];
}

// src/node/build.ts
var import_fs_extra3 = __toESM(require("fs-extra"), 1);
var import_path5 = __toESM(require("path"), 1);
var import_vite2 = require("vite");
async function buildRuntime({
  siteConfig,
  docs
}) {
  console.log("\u5220\u9664\u65E7\u4EA7\u7269\uFF1A", SERVER_OUT_PATH, CLIENT_OUT_PATH);
  await (0, import_fs_extra3.remove)(SERVER_OUT_PATH);
  await (0, import_fs_extra3.remove)(CLIENT_OUT_PATH);
  console.log("\u6784\u5EFAjs\u6587\u4EF6...");
  const [clientBundle, serverBundle] = await Promise.all([
    viteBuild({ siteConfig, docs }),
    viteBuild({ siteConfig, isServer: true, docs })
  ]);
  console.log("\u6784\u5EFAhtml\u6587\u4EF6...");
  await renderHtmls({ siteConfig, clientBundle, serverBundle });
}
function viteBuild({
  isServer = false,
  docs,
  siteConfig
}) {
  return (0, import_vite2.build)({
    mode: "production",
    root: ROOT_PATH,
    // 获取postcss等配置文件
    plugins: createPlugins({ siteConfig, docs }),
    build: {
      ssr: isServer,
      outDir: isServer ? import_path5.default.join(ROOT_PATH, SERVER_OUT_PATH) : import_path5.default.join(siteConfig.root, CLIENT_OUT_PATH),
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? "server-entry.js" : "client-entry.js",
          format: "es"
        }
      },
      ...baseConfig
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
  const serverEntryPath = import_path5.default.join(
    ROOT_PATH,
    SERVER_OUT_PATH,
    serverEntryChunk == null ? void 0 : serverEntryChunk.fileName
  );
  const clientEntryPath = `/${clientEntryChunk == null ? void 0 : clientEntryChunk.fileName}`;
  const { render, routes } = await import(serverEntryPath);
  const template = await import_fs_extra3.default.readFile(HTML_PATH, "utf-8");
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
      await import_fs_extra3.default.ensureDir(import_path5.default.join(siteConfig.root, CLIENT_OUT_PATH));
      await import_fs_extra3.default.writeFile(
        import_path5.default.join(siteConfig.root, `${CLIENT_OUT_PATH}${location}.html`),
        html
      );
    })
  );
}

// src/node/server.ts
var import_vite3 = require("vite");
async function createRuntimeDevServer({
  siteConfig,
  restartRuntimeDevServer,
  docs
}) {
  return (0, import_vite3.createServer)({
    root: siteConfig.root,
    // 避免dev服务访问路由时直接访问静态tsx资源，所以在/开启服务，路由一般在/docs内
    server: {
      host: true
      // 开启局域网与公网ip
    },
    plugins: createPlugins({
      restartRuntimeDevServer,
      siteConfig,
      docs
    }),
    ...baseConfig
  });
}

// src/node/cli.ts
var import_commander = require("commander");
var import_fs_extra4 = __toESM(require("fs-extra"), 1);
var import_path6 = __toESM(require("path"), 1);
var cli = import_commander.program;
var { version } = import_fs_extra4.default.readJSONSync(import_path6.default.join(ROOT_PATH, "./package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).description("dev server").option("-p,--port <value>", "dev server port").action(async ({ port }) => {
  const createServer2 = async () => {
    const siteConfig = await resolveSiteConfig({
      mode: "development",
      command: "serve"
    });
    const absDocs = import_path6.default.resolve(siteConfig.userConfig.docs);
    const server = await createRuntimeDevServer({
      docs: absDocs,
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
cli.command("build").description("build").action(async () => {
  try {
    const siteConfig = await resolveSiteConfig({
      mode: "production",
      command: "build"
    });
    const absDocs = import_path6.default.resolve(siteConfig.userConfig.docs);
    await buildRuntime({ siteConfig, docs: absDocs });
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cli
});
