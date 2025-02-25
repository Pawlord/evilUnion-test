import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import wyw from '@wyw-in-js/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [wyw({
      include: ['**/*.{ts,tsx,jsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    })],
  },
});