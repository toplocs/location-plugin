import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'link-plugin',
      filename: 'plugin.js',
      exposes: {
        './PluginConfig': './src/index.ts',
        './SidebarView': './src/views/SidebarView.vue',
        './SettingsView': './src/views/SettingsView.vue',
      },
      shared: ['vue'],
      remotes: {
        remoteName: '',
      },
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`
    })
  ],

  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@dev': path.resolve(__dirname, './dev'),
    },
  },

  optimizeDeps: {
    exclude: ["__federation__"],
  },

  build: {
    outDir: './dist',
    minify: false,
    terserOptions: {
      compress: false,
      mangle: false,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
