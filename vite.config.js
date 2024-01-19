import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-node-builtins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),nodePolyfills()],
  server: {
    host: '0.0.0.0',
  }
})
