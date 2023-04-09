import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",

      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    assetsDir: "app",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
