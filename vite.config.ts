import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3500, host: true },
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 추가: src 경로를 ~로 대체
    },
  },
  plugins: [svelte()],
});
