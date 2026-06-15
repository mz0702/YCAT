import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://mz0702.github.io',
  base: process.env.GITHUB_ACTIONS ? '/YCAT' : '/',
  build: { format: 'directory' },
});
