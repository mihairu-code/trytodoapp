// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
  },
  plugins: [react()],
});
