import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const username = 'Magikdidi24';
const repoName = 'portfolio';

export default defineConfig({
  site: `https://${username}.github.io${repoName ? `/${repoName}` : ''}`,
  base: repoName ? `/${repoName}` : undefined,
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
