import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ohhakchul.github.io',
  base: '/marrit-kim-site', // This leading slash is important
  integrations: [react()],
});