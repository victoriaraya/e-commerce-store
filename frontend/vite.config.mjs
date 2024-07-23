import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").pop();
          if (/png|jpe?g|gif|svg|webp|avif/i.test(extType)) {
            return "assets/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
