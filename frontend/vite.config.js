import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      babel: {
        // plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  server: {
    port: 7777,
    strictPort: true,
  },
});
