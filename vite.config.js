import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".vue", ".js", ".less"],
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  server: {
    host:'localhost',
    port: 3000,
    open: false,
    cors: true,
    hmr: false,
    public: 'localhost:3000'
  },
})
