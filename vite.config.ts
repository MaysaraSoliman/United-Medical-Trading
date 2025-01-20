import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: Group all node_modules into a single chunk
          if (id.includes("node_modules")) {
            return "vendor"; // All dependencies will be in a 'vendor' chunk
          }
          // Further customizations can be added here
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
