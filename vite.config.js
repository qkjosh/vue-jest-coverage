import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [createVuePlugin()],
  server: {
    host: "127.0.0.1",
    port: 3030,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false
    }
  },
  build: {
    outDir: resolve("./dist"),
    assetsDir: "",
    manifest: true,
    emptyOutDir: true,
    target: "es2015",
    cssTarget: "safari11",
  }
});
