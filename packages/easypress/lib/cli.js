// ../../node_modules/.pnpm/tsup@8.0.1_typescript@5.3.3/node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/node/consts.ts
import path2 from "path";
var ROOT_PATH = path2.join(__dirname, "..");
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
          if (!req.url?.endsWith(".html") && req.url !== "/") {
            return next();
          }
          try {
            const template = await fse.readFile(templatePath, "utf-8");
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
        const files = await fg.glob("**/*.{jsx,tsx}", {
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
          return `{ path: '/${fileBaseName.replace(/index$/, "")}', element: React.createElement(Element${index + 1}) },
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

// src/node/createPlugins.ts
import pluginReact from "@vitejs/plugin-react";
function createPlugins({
  root = process.cwd(),
  siteConfig,
  restartRuntimeDevServer
}) {
  return [
    pluginReact(),
    vitePluginServeHtml({
      templatePath: HTML_PATH,
      // /@fs/是针对root之外的，当作为npm包时在nodemodules中属于root内，不需要使用 https://cn.vitejs.dev/config/server-options.html#server-fs-allow
      entry: CLIENT_ENTRY_PATH
    }),
    vitePluginVirtualConfig({ siteConfig, restartRuntimeDevServer }),
    vitePluginVirtualRoutes({ root })
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
  await Promise.all([
    viteBuild({ root, siteConfig }),
    viteBuild({ root, siteConfig, isServer: true })
  ]);
  await renderHtmls({ root });
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
async function renderHtmls({ root = process.cwd() }) {
  const serverEntryPath = path4.join(root, "./server", "./server-entry.js");
  const clientEntryPath = "./client-entry.js";
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
  const loadResult = await loadConfigFromFile(
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
    // 避免dev服务访问路由时直接访问静态tsx资源
    server: {
      host: true
      // 开启局域网与公网ip,
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
    const absRoot = path6.resolve(root);
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
export {
  cli
};
