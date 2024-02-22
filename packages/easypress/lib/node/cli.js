// ../../node_modules/.pnpm/tsup@8.0.1_typescript@5.3.3/node_modules/tsup/assets/esm_shims.js
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
var HTML_PATH = path2.join(ROOT_PATH, "./index.html");
var CONFIG_OPTIONS = ["easypress.config.ts", "easypress.config.js"];

// src/node/plugins/remarkMdxToc.ts
import { parse } from "acorn";
import Slugger from "github-slugger";
import { visit } from "unist-util-visit";
var remarkMdxToc = () => {
  return function(tree) {
    const toc = [];
    visit(tree, "heading", (node) => {
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
        const slugger = new Slugger();
        const id = slugger.slug(headText);
        toc.push({
          id,
          text: headText,
          depth: node.depth
        });
      }
    });
    const template = `export const toc = ${JSON.stringify(toc, null, 2)};`;
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
    ...rollupPluginMdx({
      remarkPlugins: [
        remarkGfm,
        // github的md语法
        remarkFrontmatter,
        // md模块导出frontmatter变量
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
import fse from "fs-extra";
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
            const template = await fse.readFile(templatePath, "utf-8");
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
import fg from "fast-glob";
import path3 from "path";
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
        const files = await fg.glob("**/*.{jsx,tsx,md,mdx}", {
          ignore: ["node_modules/**", "client/**", "server/**"],
          cwd: root,
          deep: 2,
          absolute: true
        });
        let importTemplate = 'import React from "react";\n';
        const routes = files.map((file, index) => {
          const fileBaseName = path3.basename(file, path3.extname(file));
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
import pluginReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
function createPlugins({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    vitePluginMdx(),
    pluginReact({ include: /\.(md|mdx|js|jsx|ts|tsx)$/ }),
    // 根据热更新规则，仅导出组件时才能保证热更新正确，因为组件副作用是确定的，所以mdx导出frontmatter等对象会提示但是仍然尝试生效，这规则是react refresh特性，所以webpack热更新插件也是这样 https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#consistent-components-exports https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/249#issuecomment-729277683
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      entry: CLIENT_ENTRY_PATH
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ root }),
    tsconfigPaths()
    // vite-env.d.ts中declare虚拟模块引入的类型需要绝对路径，所以使用路径别名插件解析tsconfig的baseurl
  ];
}

// src/node/build.ts
import fse2 from "fs-extra";
import path4 from "path";
import { build } from "vite";
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
  return build({
    mode: "production",
    root,
    plugins: createPlugins({ root, siteConfig }),
    build: {
      ssr: isServer,
      outDir: isServer ? "server" : "client",
      rollupOptions: {
        input: isServer ? SERVER_ENTRY_PATH : CLIENT_ENTRY_PATH,
        output: {
          entryFileNames: isServer ? "server-entry.js" : "client-entry.js",
          format: isServer ? "cjs" : "es"
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
  const serverEntryPath = path4.join(
    root,
    "./server",
    serverEntryChunk == null ? void 0 : serverEntryChunk.fileName
  );
  const clientEntryPath = `/${clientEntryChunk == null ? void 0 : clientEntryChunk.fileName}`;
  const { render, routes } = await import(serverEntryPath);
  const template = await fse2.readFile(HTML_PATH, "utf-8");
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
      await fse2.ensureDir(path4.join(root, "client"));
      await fse2.writeFile(path4.join(root, `client${location}.html`), html);
    })
  );
}

// src/node/config.ts
import fse3 from "fs-extra";
import path5 from "path";
import { loadConfigFromFile } from "vite";
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
  const loadResult = await loadConfigFromFile(
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
    (option) => path5.join(root, option)
  ).find((path7) => fse3.existsSync(path7));
  return userConfigPath;
}

// src/node/server.ts
import { createServer } from "vite";
async function createRuntimeDevServer({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return createServer({
    root: ROOT_PATH,
    // 避免dev服务访问路由时直接访问静态tsx资源，所以在/开启服务，路由一般在/docs内
    server: {
      host: true
      // 开启局域网与公网ip
    },
    plugins: createPlugins({ root, restartRuntimeDevServer, siteConfig })
  });
}

// src/node/cli.ts
import { program } from "commander";
import fse4 from "fs-extra";
import path6 from "path";
var cli = program;
var { version } = fse4.readJSONSync(path6.join(ROOT_PATH, "./package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).argument("[root]", "dev server root dir", process.cwd()).description("dev server").option("-p,--port <value>", "dev server port").action(async (root, { port }) => {
  const absRoot = path6.resolve(root);
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
    const absRoot = path6.resolve(root);
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
export {
  cli
};
