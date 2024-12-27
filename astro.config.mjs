import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs18.x', // ここでランタイムを指定
  }),
});
