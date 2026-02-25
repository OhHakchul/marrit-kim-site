import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://marritkim.com',
  base: '/', // This leading slash is important
  integrations: [react()],
});