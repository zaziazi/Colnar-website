import type { Config } from '@netlify/functions';
import { json, rpc } from '../lib/klub';

/** GET /api/klub/settings — club name, stamps needed and reward for the join page. */
export default async () => {
  const s = await rpc<{ stamps_needed: number; reward: string; club_name: string }>('club_public_settings');
  return s ? json(s) : json({ error: 'unavailable' }, 502);
};

export const config: Config = { path: '/api/klub/settings' };
