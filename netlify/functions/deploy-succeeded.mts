/*
 * Runs after every successful deploy (Netlify calls a function with this exact
 * name). For production deploys it sends every address in the sitemap to
 * IndexNow, which passes them on to Bing, Yandex, Seznam and Naver at once.
 * Bing's index is what ChatGPT search reads, so new copy shows up there in
 * days instead of weeks.
 *
 * The key is public by design: IndexNow checks it against /<key>.txt on the
 * site to prove the request comes from the owner.
 */
const KEY = 'f44aaaafa966749f1b04c08e360435d9';
const SITE = 'https://www.colnar.si';

/** Every <loc> in the sitemap index and the sitemaps it lists. */
async function sitemapUrls(): Promise<string[]> {
  const locs = (xml: string) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
  const pages = await Promise.all(locs(index).map(async (u) => locs(await (await fetch(u)).text())));
  return pages.flat();
}

export const handler = async (event: { body: string | null }) => {
  try {
    const { payload } = JSON.parse(event.body ?? '{}');
    if (payload?.context !== 'production') return { statusCode: 200, body: 'skipped' };
    const urlList = await sitemapUrls();
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: 'www.colnar.si', key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
    });
    console.log('indexnow', res.status, urlList.length);
  } catch (error) {
    console.error('indexnow error', error);
  }
  return { statusCode: 200, body: 'ok' };
};
