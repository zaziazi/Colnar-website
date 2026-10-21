import type { Config } from '@netlify/functions';
import QRCode from 'qrcode';
import { json, rpc, TOKEN } from '../lib/klub';

/** What the guest's QR carries; Colnix's scanner reads this prefix. */
const QR_PREFIX = 'COLNAR:';

/** GET /api/klub/card?t=<token> — the card, plus its QR as SVG. */
export default async (req: Request) => {
  const token = new URL(req.url).searchParams.get('t') ?? '';
  if (!TOKEN.test(token)) return json({ error: 'not found' }, 404);

  const card = await rpc<Record<string, unknown> | null>('club_card', { p_token: token });
  if (!card) return json({ error: 'not found' }, 404);

  const qr = await QRCode.toString(QR_PREFIX + String(card.card_code), {
    type: 'svg',
    margin: 1,
    errorCorrectionLevel: 'M',
    color: { dark: '#201f1d', light: '#ffffff' },
  });
  return json({ ...card, qr });
};

export const config: Config = { path: '/api/klub/card' };
