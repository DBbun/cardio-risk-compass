import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  root: "pages",
  base: "/cardio-risk-compass/",
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  publicDir: "../public",
  build: { outDir: "../dist-pages", emptyOutDir: true },
});
