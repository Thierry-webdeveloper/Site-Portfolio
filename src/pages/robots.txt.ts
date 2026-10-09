import type { APIRoute } from "astro";

// robots.txt généré au build : l'adresse du sitemap suit `site` (astro.config.mjs)
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`);
};