// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thunder426.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  security: {
    // Astro adds hashes for its own scripts and styles to script-src and style-src.
    // Everything else is served from this site, and nothing is embedded or posted anywhere.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self'",
        "font-src 'self'",
        "connect-src 'none'",
        "object-src 'none'",
        "frame-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        "require-trusted-types-for 'script'",
      ],
    },
  },
});
