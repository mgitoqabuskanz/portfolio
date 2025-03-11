import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio',
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        intro: 'window.eval = function() {};',
        manualChunks: {
          react: ['react', 'react-dom'],
          pdfjs: ['pdfjs-dist'],
        }
      }
    }
  },
})
