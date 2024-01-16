import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sassGlobImports from "vite-plugin-sass-glob-import";
import { fileURLToPath, URL } from 'node:url';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() , sassGlobImports()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@cp": fileURLToPath(new URL("./src/components/", import.meta.url)),
      "@media": fileURLToPath(new URL("./src/assets/media", import.meta.url)),
      "@style": fileURLToPath(new URL("./src/assets/style", import.meta.url)),
    },
  },
})
