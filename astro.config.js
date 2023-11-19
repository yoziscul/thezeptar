import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import serviceWorker from 'astrojs-service-worker';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
    site: 'https://zeptar.js.cool',
    output: 'server',
    integrations: [serviceWorker(), sitemap(), compress()],
    adapter: vercel(),
    compressHTML: true,
});
