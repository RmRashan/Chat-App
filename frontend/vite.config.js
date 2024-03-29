import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const newLocal = "http://localhost:9000"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:newLocal,
      }
    }
  }
})
