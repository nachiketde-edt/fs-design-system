import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Tell Vite / React not to try to parse custom element tags as React components
  // (any tag with a hyphen is a custom element)
  optimizeDeps: {
    include: ['@fs-ds/tokens', '@fs-ds/react'],
  },
});
