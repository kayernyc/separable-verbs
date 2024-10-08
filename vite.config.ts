import { fileURLToPath, URL } from "node:url";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      exclude: ["**/internal/*"],
    }),
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
    },
  },
});
