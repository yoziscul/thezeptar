import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import serviceWorker from 'astrojs-service-worker';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

export default defineConfig({
    site: 'https://zeptar.js.cool',
    output: 'server',
    integrations: [serviceWorker(), react(), tailwind(), sitemap(), compress()],
    adapter: vercel(),
    compressHTML: true,
});
