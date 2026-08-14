// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ... your existing config (markdown, vite, integrations, etc.)

  site: 'https://angad-kochhar.github.io',   // ← change this
  base: '/portfolio',                   // ← only if repo is NOT username.github.io
});