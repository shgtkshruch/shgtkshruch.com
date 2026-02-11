import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shgtkshruch.com",
  output: "static",

  integrations: [
    react(), // React Islands用
    sitemap(), // SEO向上
  ],

  vite: {
    ssr: {
      // microCMS APIアクセスのためのexternal設定
      noExternal: ["react-intersection-observer", "react-typist-component"],
    },
  },

  // ビルド設定
  build: {
    inlineStylesheets: "auto", // パフォーマンス最適化
  },
});
