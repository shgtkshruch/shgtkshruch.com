import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import { readFile, writeFile } from "fs/promises";
import path from "path";

function fontPreloadIntegration(): AstroIntegration {
  return {
    name: "font-preload",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const htmlPath = new URL("index.html", dir);
        const html = await readFile(htmlPath, "utf-8");
        const match = html.match(/url\((\/[^)]*inconsolata[^)]*\.woff2)\)/);
        if (!match) return;
        const preload = `<link rel="preload" href="${match[1]}" as="font" type="font/woff2" crossorigin="">`;
        await writeFile(htmlPath, html.replace("</head>", `${preload}\n</head>`));
      },
    },
  };
}

export default defineConfig({
  site: "https://shgtkshruch.com",
  output: "static",

  integrations: [react(), sitemap(), fontPreloadIntegration()],

  vite: {
    resolve: {
      alias: {
        // react-typist-component は `exports`/`main` フィールドを持たず `module` フィールドのみのため、
        // Astro v6 の prerender 時に Node.js がエントリポイントを解決できない。
        // alias で dist/index.js を直接指定して回避する。
        "react-typist-component": path.resolve(
          "./node_modules/react-typist-component/dist/index.js",
        ),
      },
    },
  },

  // ビルド設定
  build: {
    inlineStylesheets: "always",
  },
});
