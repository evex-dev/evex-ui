import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  vite: {
    resolve: {
      alias: {
       "@evex-ui": "../src/exports.ts",
       "types/react": "../node_modules/@types/react/index.d.ts"
      }
    },
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});