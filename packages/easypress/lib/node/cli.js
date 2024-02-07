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

// src/node/build.ts
async function buildRuntime(root = process.cwd()) {
}

// src/node/constants.ts
var import_path = __toESM(require("path"));
var ROOT_PATH = import_path.default.join(__dirname, "..", "..");
var SRC_PATH = import_path.default.join(ROOT_PATH, "./src");
var RUNTIME_PATH = import_path.default.join(SRC_PATH, "./runtime");
var CLIENT_ENTRY_PATH = import_path.default.join(
  RUNTIME_PATH,
  "./client/client-entry.tsx"
);
var SERVER_ENTRY_PATH = import_path.default.join(
  RUNTIME_PATH,
  "./client/server-entry.tsx"
);
var HTML_PATH = import_path.default.join(ROOT_PATH, "./index.html");

// src/node/plugins/vitePluginServeHtml.ts
var import_fs_extra = __toESM(require("fs-extra"));
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
            const html = await import_fs_extra.default.readFile(templatePath, "utf-8");
            const viteHtml = await server.transformIndexHtml?.(
              req.url,
              html,
              req.originalUrl
            );
            const finalHtml = viteHtml.replace(
              "</body>",
              `
              <script type="module" src="${entry}"></script>
              

              </body>
              `
            );
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(finalHtml);
          } catch (e) {
            console.error(e);
            return next(e);
          }
        });
      };
    }
  };
}

// src/node/server.ts
var import_plugin_react = __toESM(require("@vitejs/plugin-react"));
async function createRuntimeDevServer({ root = process.cwd() }) {
  const { createServer } = await import("vite");
  return createServer({
    root,
    server: {
      host: true
      // 开启局域网与公网ip,
    },
    plugins: [
      (0, import_plugin_react.default)(),
      vitePluginServeHtml({
        templatePath: HTML_PATH,
        // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
        entry: CLIENT_ENTRY_PATH
      })
    ]
  });
}

// src/node/cli.ts
var import_commander = require("commander");
var import_path2 = __toESM(require("path"));
var cli = import_commander.program;
var { version } = require(import_path2.default.join(__dirname, "../../package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).argument("[root]", "dev server root dir", process.cwd()).description("dev server").option("-p,--port <value>", "dev server port").action(async (root, { port }) => {
  console.log(root, { port });
  const absRoot = import_path2.default.resolve(root);
  const server = await createRuntimeDevServer({ root: absRoot });
  await server.listen(port);
  server.printUrls();
});
cli.command("build").description("build").action(async (root) => {
  try {
    const absRoot = import_path2.default.resolve(root);
    await buildRuntime(absRoot);
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cli
});
