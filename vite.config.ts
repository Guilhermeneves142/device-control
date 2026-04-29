/// <reference types="vitest/config" />
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    environment: "happy-dom",
    include: ["src/components/global/**/*.spec.ts"],
  },
});
