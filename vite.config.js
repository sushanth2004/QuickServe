import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Requests to /api will be forwarded to the Swiggy server
      "/api": {
        // The URL of the Swiggy API you're trying to access
        target: "https://www.swiggy.com",
        changeOrigin: true,
        // The rewrite rule removes the /api prefix before sending the request to the target
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
