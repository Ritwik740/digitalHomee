import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path
  server: {
    historyApiFallback: true, // Redirect all routes to index.html
  },
  build: {
    outDir: 'build', // Ensure correct output directory
  },
});
