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

// src/node/build.ts
import fse from "fs-extra";
import path3 from "path";
import { build } from "vite";
async function buildRuntime({ root = process.cwd() }) {
  await Promise.all([viteBuild({ root }), viteBuild({ root, isServer: true })]);
  await renderHtml({ root });
}
function viteBuild({ root = process.cwd(), isServer = false }) {
  return build({
    mode: "production",
    root,
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
  const serverEntryPath = path3.join(root, "./server", "./server-entry.js");
  const clientEntryPath = "./client-entry.js";
  const { render } = await import(serverEntryPath);
  const rendered = render();
  const template = await fse.readFile(HTML_PATH, "utf-8");
  const html = template.replace("<!--app-html-->", rendered).replace(
    "</body>",
    `
    <script type="module" src="${clientEntryPath}"></script>
    

    </body>
    `
  );
  await fse.ensureDir(path3.join(root, "client"));
  await fse.writeFile(path3.join(root, "client/index.html"), html);
  await fse.remove(path3.join(root, "server"));
}

// src/node/plugins/vitePluginServeHtml.ts
import fse2 from "fs-extra";
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
import pluginReact from "@vitejs/plugin-react";
async function createRuntimeDevServer({ root = process.cwd() }) {
  const { createServer } = await import("vite");
  return createServer({
    root,
    server: {
      host: true
      // 开启局域网与公网ip,
    },
    plugins: [
      pluginReact(),
      vitePluginServeHtml({
        templatePath: HTML_PATH,
        // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
        entry: CLIENT_ENTRY_PATH
      })
    ]
  });
}

// src/node/cli.ts
import { program } from "commander";
import fse3 from "fs-extra";
import path4 from "path";
var cli = program;
var { version } = fse3.readJSONSync(path4.join(ROOT_PATH, "./package.json"));
cli.name("easypress").version(version);
cli.command("dev", { isDefault: true }).argument("[root]", "dev server root dir", process.cwd()).description("dev server").option("-p,--port <value>", "dev server port").action(async (root, { port }) => {
  const absRoot = path4.resolve(root);
  const server = await createRuntimeDevServer({ root: absRoot });
  await server.listen(port);
  server.printUrls();
});
cli.command("build").argument("[root]", "build root dir", process.cwd()).description("build").action(async (root) => {
  try {
    const absRoot = path4.resolve(root);
    await buildRuntime({ root: absRoot });
  } catch (e) {
    console.log(e);
  }
});
cli.parse();
export {
  cli
};
