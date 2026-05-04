import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  site: "https://shgtkshruch.com",
  output: "static",

  integrations: [
    react(), // React Islands用
    sitemap(), // SEO向上
  ],

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
