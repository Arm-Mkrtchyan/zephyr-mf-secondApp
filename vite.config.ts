import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
import { withZephyr } from 'vite-plugin-zephyr';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    withZephyr(),
    federation({
      name: 'second_app',
      remotes: {
        first_app: 'https://arm-mkrtchyan07-gmail-com-84-first-app-zephyr-mf--f9392d761-ze.zephyrcloud.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5174,
  },
})