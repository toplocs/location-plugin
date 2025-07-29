import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'location-plugin',
        filename: 'plugin.js',
        exposes: {
          './Main': './src/views/MainWrapper.vue',
          './Settings': './src/views/SettingsWrapper.vue',
        },
        shared: ['vue', 'tailwindcss']
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    //port: 3000,
  },
  build: {
    outDir: './dist',
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        landing: path.resolve(__dirname, 'landing.html')
      },
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
