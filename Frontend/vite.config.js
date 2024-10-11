import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.VITE_PORT,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
  rollupOptions: {
    external: ['react-i18next', 'i18next'],
  },
})
