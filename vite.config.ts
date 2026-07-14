import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/JMV_LPS_LTD/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Yeh block aapki missing assets ki wajah se white screen crash ko rokega
  resolve: {
    alias: {
      '/asset': '/public/asset',
      '/assets': '/public/asset'
    }
  }
});
