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
var ROOT_PATH = import_path.default.join(__dirname, "..");
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
var HTML_PATH = import_path.default.join(ROOT_PATH, "./index.html");
var CONFIG_OPTIONS = ["easypress.config.ts", "easypress.config.js"];

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
          if (!req.url?.endsWith(".html") && req.url !== "/") {
            return next();
          }
          try {
            const template = await import_fs_extra.default.readFile(templatePath, "utf-8");
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

// src/node/createPlugins.ts
var import_plugin_react = __toESM(require("@vitejs/plugin-react"), 1);
function createPlugins({
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    (0, import_plugin_react.default)(),
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
      entry: CLIENT_ENTRY_PATH
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer })
  ];
}

// src/node/build.ts
var import_fs_extra2 = __toESM(require("fs-extra"), 1);
var import_path2 = __toESM(require("path"), 1);
var import_vite = require("vite");
async function buildRuntime({
  root = process.cwd(),
  siteConfig
}) {
  await Promise.all([
    viteBuild({ root, siteConfig }),
    viteBuild({ root, siteConfig, isServer: true })
  ]);
  await renderHtml({ root });
}
function viteBuild({
  root = process.cwd(),
  isServer = false,
  siteConfig
}) {
  return (0, import_vite.build)({
    mode: "production",
    root,
    plugins: createPlugins({ siteConfig }),
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
async function renderHtml({ root = process.cwd() }) {
  const serverEntryPath = import_path2.default.join(root, "./server", "./server-entry.js");
  const clientEntryPath = "./client-entry.js";
  const { render } = await import(serverEntryPath);
  const rendered = render();
  const template = await import_fs_extra2.default.readFile(HTML_PATH, "utf-8");
  const html = template.replace("<!--app-html-->", rendered).replace(
    "</body>",
    `
    <script type="module" src="${clientEntryPath}"></script>
    

    </body>
    `
  );
  await import_fs_extra2.default.ensureDir(import_path2.default.join(root, "client"));
  await import_fs_extra2.default.writeFile(import_path2.default.join(root, "client/index.html"), html);
}

// src/node/config.ts
var import_fs_extra3 = __toESM(require("fs-extra"), 1);
var import_path3 = __toESM(require("path"), 1);
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
    title: userConfig?.title || "EASYPRESS",
    description: userConfig?.description || "SSG Framework",
    themeConfig: userConfig?.themeConfig ?? {},
    vite: userConfig?.vite ?? {}
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
  const userConfigPath = getuserConfigPath({ root });
  const loadResult = await (0, import_vite2.loadConfigFromFile)(
    { command, mode },
    userConfigPath,
    root
  );
  return {
    userConfigPath: loadResult?.path,
    userConfig: loadResult?.config
  };
}
function getuserConfigPath({ root = process.cwd() }) {
  const userConfigPath = CONFIG_OPTIONS.map(
    (option) => import_path3.default.join(root, option)
  ).find((path5) => import_fs_extra3.default.existsSync(path5));
  return userConfigPath;
}

// src/node/server.ts
var import_vite3 = require("vite");
async function createRuntimeDevServer({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return (0, import_vite3.createServer)({
    root,
    server: {
      host: true
      // 开启局域网与公网ip,
    },
    plugins: createPlugins({ restartRuntimeDevServer, siteConfig })
  });
}

// src/node/cli.ts
var import_commander = require("commander");
var import_fs_extra4 = __toESM(require("fs-extra"), 1);
var import_path4 = __toESM(require("path"), 1);
var cli = import_commander.program;
var { version } = import_fs_extra4.default.readJSONSync(import_path4.default.join(ROOT_PATH, "./package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).argument("[root]", "dev server root dir", process.cwd()).description("dev server").option("-p,--port <value>", "dev server port").action(async (root, { port }) => {
  const absRoot = import_path4.default.resolve(root);
  const createServer2 = async () => {
    const siteConfig = await resolveSiteConfig({
      root,
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
    const absRoot = import_path4.default.resolve(root);
    const siteConfig = await resolveSiteConfig({
      root,
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
