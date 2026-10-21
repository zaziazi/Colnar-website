import type { Config } from '@netlify/functions';
import { json, mailHtml, rpc, sendMail, siteUrl } from '../lib/klub';

/*
 * POST /api/klub/join — name, email, phone?, terms, marketing?, website (honeypot).
 *  - new member      → { status: 'created', token, mailed }
 *  - e-mail on file  → the card link is mailed to that address only, never shown:
 *                      { status: 'mailed' } or { status: 'exists' } if mail is not set up
 */
export default async (req: Request) => {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  let f: Record<string, string>;
  try {
    const data = await req.formData();
    f = Object.fromEntries([...data.entries()].map(([k, v]) => [k, String(v)]));
  } catch {
    return json({ error: 'Napačen zahtevek.' }, 400);
  }

  if (f.website) return json({ status: 'created', token: null, mailed: false }); // a bot: say nothing useful
  const name = (f.name ?? '').trim();
  const email = (f.email ?? '').trim().toLowerCase();
  const phone = (f.phone ?? '').trim().slice(0, 40);
  if (name.length < 2 || name.length > 120) return json({ error: 'Vpišite ime in priimek.' }, 400);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200) return json({ error: 'E-naslov ni pravilen.' }, 400);
  if (f.terms !== 'on') return json({ error: 'Za kartico potrebujemo vaše soglasje.' }, 400);

  const res = await rpc<{ token: string; existed: boolean; name: string }>('club_join', {
    p_name: name,
    p_email: email,
    p_phone: phone || null,
    p_consent: f.marketing === 'on',
  });
  if (!res) return json({ error: 'Prijava ni uspela. Poskusite znova ali vprašajte osebje.' }, 502);

  const settings = (await rpc<{ stamps_needed: number; reward: string; club_name: string }>('club_public_settings')) ?? {
    stamps_needed: 10,
    reward: 'kozarec vina po izbiri',
    club_name: 'Klub Vinoteke Colnar',
  };
  const cardUrl = `${siteUrl(req)}/klub/k/${res.token}/`;
  const first = res.name.split(' ')[0];

  if (res.existed) {
    const ok = await sendMail(
      email,
      `Vaša kartica · ${settings.club_name}`,
      `Pozdravljeni, ${first}!\n\nTa e-naslov je že včlanjen v ${settings.club_name}. Vaša kartica: ${cardUrl}`,
      mailHtml(
        settings.club_name,
        `Pozdravljeni, ${first}!\n\nTa e-naslov je že včlanjen v klub. Spodaj je vaša kartica – odprite jo in jo shranite na začetni zaslon telefona.`,
        cardUrl,
        'Odpri mojo kartico',
      ),
    );
    return json({ status: ok ? 'mailed' : 'exists' });
  }

  const mailed = await sendMail(
    email,
    `Dobrodošli v klubu · ${settings.club_name}`,
    `Pozdravljeni, ${first}!\n\nVaša kartica zvestobe: ${cardUrl}\n\nOb vsakem obisku Vinoteke pokažite QR kodo in dobili boste žig. Pri ${settings.stamps_needed} žigih vas čaka ${settings.reward}.`,
    mailHtml(
      settings.club_name,
      `Pozdravljeni, ${first}!\n\nHvala, ker ste se včlanili. Ob vsakem obisku Vinoteke pokažite QR kodo na kartici in dobili boste žig. Pri ${settings.stamps_needed} žigih vas čaka ${settings.reward}.\n\nKartico shranite na začetni zaslon telefona, da jo boste imeli vedno pri roki.`,
      cardUrl,
      'Odpri mojo kartico',
    ),
  );
  return json({ status: 'created', token: res.token, mailed });
};

export const config: Config = { path: '/api/klub/join' };
