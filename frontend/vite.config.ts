// frontend/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🔹 Динамический base path: для GitHub Pages или корня
  base: process.env.VITE_BASE_PATH || "/",

  // 🔹 Настройки только для режима разработки (npm run dev)
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/uploads": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },

  // 🔹 Настройки продакшен-сборки
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@mantine/core", "@mantine/hooks", "@tabler/icons-react"],
          state: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },

  // 🔹 Для предпросмотра сборки (npm run preview)
  preview: {
    port: 4173,
  },
});
