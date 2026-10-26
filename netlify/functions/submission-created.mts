/*
 * Runs on every verified Netlify Forms submission (Netlify calls a function
 * with this exact name; spam caught by the honeypot never reaches it).
 *
 * For a tasting booking it sends two mails through the colnar.si mailbox:
 *   – to the cellar (RESERVATION_TO, default info@colnar.si), with every field,
 *     and Reply-To set to the guest so answering goes straight back to them;
 *   – to the guest, at once, in the language they booked in: we have it, and
 *     we will be in touch to confirm the date.
 *
 * The submission is stored in Netlify Forms either way, so nothing is lost if
 * the mailbox settings are missing or a send fails.
 */
import { page, paragraphs, send, table, type Mail } from '../lib/mail';

type Lang = 'sl' | 'en';
type Data = Record<string, string | string[] | undefined>;

const PHONE = '+386 31 288 724';

const SIZES: Record<string, Record<Lang, string>> = {
  '3': { sl: '3 vina (16 € / osebo)', en: '3 wines (€16 / person)' },
  '4': { sl: '4 vina (20 € / osebo)', en: '4 wines (€20 / person)' },
  '5': { sl: '5 vin (24 € / osebo)', en: '5 wines (€24 / person)' },
  '6': { sl: '6 vin (28 € / osebo)', en: '6 wines (€28 / person)' },
};

const EXTRAS: Record<string, Record<Lang, string>> = {
  narezek: { sl: 'Narezek domačih dobrot (10 € / osebo)', en: 'Charcuterie board (€10 / person)' },
  ogled: { sl: 'Ogled kleti (10 € / osebo)', en: 'Cellar tour (€10 / person)' },
};

const LABELS: Record<Lang, Record<string, string>> = {
  sl: {
    name: 'Ime in priimek',
    email: 'E-pošta',
    phone: 'Telefon',
    date: 'Želeni datum',
    time: 'Ura prihoda',
    guests: 'Število gostov',
    size: 'Obseg degustacije',
    extras: 'Dodatno',
    note: 'Opomba',
    lang: 'Jezik',
  },
  en: {
    name: 'Name',
    email: 'E-mail',
    phone: 'Phone',
    date: 'Preferred date',
    time: 'Arrival time',
    guests: 'Guests',
    size: 'Tasting',
    extras: 'Extras',
    note: 'Note',
    lang: 'Language',
  },
};

/** Rows as plain text; a multi-line value reads as a list on one line. */
const plain = (rows: [string, string][]) => rows.map(([k, v]) => `${k}: ${v.replace(/\n/g, ', ')}`).join('\n');

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v.join(', ') : (v ?? '')).trim();
const many = (v: string | string[] | undefined) =>
  (Array.isArray(v) ? v : (v ?? '').split(','))
    .map((s) => s.trim())
    .filter(Boolean);

/** 2026-11-12 → 12. 11. 2026 / 12 November 2026; anything else as given. */
function formatDate(iso: string, lang: Lang): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const date = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return lang === 'sl'
    ? `${+m[3]}. ${+m[2]}. ${m[1]}`
    : date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** The booking as label/value rows, in the given language. */
function summary(data: Data, lang: Lang): [string, string][] {
  const L = LABELS[lang];
  const rows: [string, string][] = [
    [L.date, formatDate(one(data.datum), lang)],
    [L.time, one(data.ura)],
    [L.guests, one(data.gostje)],
    [L.size, SIZES[one(data.obseg)]?.[lang] ?? one(data.obseg)],
  ];
  const extras = many(data.dodatno).map((v) => EXTRAS[v]?.[lang] ?? v);
  if (extras.length) rows.push([L.extras, extras.join('\n')]);
  const note = one(data.opomba);
  if (note) rows.push([L.note, note]);
  return rows;
}

export function buildMails(data: Data, to: string): Mail[] {
  const lang: Lang = one(data.jezik) === 'en' ? 'en' : 'sl';
  const name = one(data.ime);
  const guestEmail = one(data.email);
  const mails: Mail[] = [];

  // To the cellar — always in Slovenian, with everything the guest gave.
  const S = LABELS.sl;
  const cellarRows: [string, string][] = [
    [S.name, name],
    [S.email, guestEmail],
    [S.phone, one(data.telefon)],
    ...summary(data, 'sl'),
    [S.lang, lang === 'en' ? 'angleščina' : 'slovenščina'],
  ];
  const when = [formatDate(one(data.datum), 'sl'), one(data.ura) && `ob ${one(data.ura)}`].filter(Boolean).join(' ');
  const cellarSubject = `Nova rezervacija degustacije: ${name}, ${when}, ${one(data.gostje)} os.`;
  mails.push({
    to,
    replyTo: guestEmail || undefined,
    subject: cellarSubject,
    text: `${cellarSubject}\n\n${plain(cellarRows)}\n\nZa odgovor gostu samo odgovorite na to sporočilo.`,
    html: page(
      'Rezervacija degustacije',
      name || 'Nova rezervacija',
      table(cellarRows) + paragraphs('Za odgovor gostu samo odgovorite na to sporočilo.'),
    ),
  });

  // To the guest — at once, in their language.
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guestEmail)) {
    const rows = summary(data, lang);
    const first = name.split(/\s+/)[0] || '';
    const copy =
      lang === 'sl'
        ? {
            subject: 'Prejeli smo vašo rezervacijo degustacije',
            kicker: 'Vinska klet Colnar',
            heading: 'Hvala za vašo rezervacijo',
            intro: `Pozdravljeni${first ? `, ${first}` : ''}!\n\nVašo rezervacijo degustacije smo prejeli. Oglasili se vam bomo v najkrajšem času in potrdili termin.`,
            outro: `Če se vam mudi, nas lahko pokličete na ${PHONE}.\n\nLep pozdrav,\nVinska klet Colnar\nLešnica 8, 8222 Otočec`,
          }
        : {
            subject: 'We have received your tasting booking',
            kicker: 'Vinska klet Colnar',
            heading: 'Thank you for your booking',
            intro: `Hello${first ? ` ${first}` : ''},\n\nWe have received your tasting booking. We will be in touch shortly to confirm the date.`,
            outro: `If it is urgent, you can call us on ${PHONE}.\n\nKind regards,\nVinska klet Colnar\nLešnica 8, 8222 Otočec, Slovenia`,
          };
    mails.push({
      to: guestEmail,
      replyTo: to,
      subject: copy.subject,
      text: `${copy.intro}\n\n${plain(rows)}\n\n${copy.outro}`,
      html: page(copy.kicker, copy.heading, paragraphs(copy.intro) + table(rows) + paragraphs(copy.outro)),
    });
  }

  return mails;
}

export const handler = async (event: { body: string | null }) => {
  try {
    const { payload } = JSON.parse(event.body ?? '{}');
    if (payload?.form_name !== 'rezervacija') return { statusCode: 200, body: 'ignored' };
    const to = process.env.RESERVATION_TO || 'info@colnar.si';
    const results = await send(buildMails(payload.data ?? {}, to));
    console.log('reservation mails', results);
  } catch (error) {
    console.error('reservation mail error', error);
  }
  // Never fail the submission itself: it is already stored in Netlify Forms.
  return { statusCode: 200, body: 'ok' };
};
