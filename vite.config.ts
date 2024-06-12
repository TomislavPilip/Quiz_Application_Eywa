import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import checker from "vite-plugin-checker";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// import nodePolyfills from "vite-plugin-node-stdlib-browser";
import { splitVendorChunkPlugin } from "vite";
import path from "path";

const pwaPlugin = VitePWA({
  includeAssets: ["favicon.ico"],
  workbox: {
    maximumFileSizeToCacheInBytes: 5000000,
  },
  manifest: {
    short_name: "init-react-project",
    name: "Initial React App",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    start_url: ".",
    scope: ".",
  },
});

const basePlugins = [
  NodeGlobalsPolyfillPlugin({
    process: true,
    buffer: true,
  }),
  // nodePolyfills(),
  react(),
  checker({ typescript: true }),
  pwaPlugin,
  splitVendorChunkPlugin(),
];
export default defineConfig({
  esbuild: {
    pure: ["console.log"],
  },
  base: "/app/init/",
  plugins: basePlugins,
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
