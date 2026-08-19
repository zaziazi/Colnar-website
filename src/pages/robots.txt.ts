import type { APIRoute } from 'astro';

/*
 * Generated rather than a static file, so the sitemap line follows `site` —
 * which on Netlify follows the deploy URL. A hardcoded robots.txt would have
 * pointed at a colnar.si sitemap that is not being served yet.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;

  const llms = new URL('llms.txt', site).href;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n\n# The estate in plain text, for assistants: ${llms}\n`,
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    },
  );
};
