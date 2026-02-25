import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr';

export default defineConfig({
  plugins: [
    react(),
    withZephyr(),
    federation({
      name: 'second_app',
      remotes: {
        first_app: 'https://arm-mkrtchyan07-gmail-com-17-first-app-zephyr-mf--bc72c0c9d-ze.zephyrcloud.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  base: '/zephyr-mf-secondApp/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
})