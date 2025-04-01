import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pet-store/', // Replace with your GitHub repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 10000, // Render expects port 10000
    host: true, // Expose to all network interfaces
  },
});
