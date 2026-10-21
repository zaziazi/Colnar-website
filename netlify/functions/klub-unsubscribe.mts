import type { Config } from '@netlify/functions';
import { json, rpc, TOKEN } from '../lib/klub';

/*
 * POST /api/klub/unsubscribe { token } — stops the club newsletter; the card keeps
 * working. A POST behind a button, so mail scanners that open links cannot do it.
 */
export default async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const { token } = (await req.json().catch(() => ({}))) as { token?: string };
  if (!token || !TOKEN.test(token)) return json({ error: 'not found' }, 404);
  const ok = await rpc<boolean>('club_unsubscribe', { p_token: token });
  return ok ? json({ ok: true }) : json({ error: 'not found' }, 404);
};

export const config: Config = { path: '/api/klub/unsubscribe' };
