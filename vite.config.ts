import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Remove /pet-store/ since we're deploying to root
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Expose to all network interfaces
  },
});
