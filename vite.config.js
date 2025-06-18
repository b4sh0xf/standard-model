import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './public',  // ← aponta para onde está o front-end agora
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './public'),
    },
  },
  server: {
    port: 5173
  }
});
