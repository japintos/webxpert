import { cpSync, existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-pages-to-dist",
      closeBundle() {
        if (!existsSync("pages")) return;
        cpSync("pages", "dist/pages", { recursive: true });
      },
    },
  ],
});
