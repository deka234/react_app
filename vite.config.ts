
import path  from "path"
import tailwindcss from "@tailwindcss/vite"
import { fileURLToPath } from "url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      // : path.resolve(__dirname, "./src"),
    },
  },
})

