/*
 * Klub zvestobe — the guest-facing half, served from colnar.si/klub.
 *
 * The browser only ever talks to colnar.si (/api/klub/*); these functions talk
 * to the Colnix database through its public, token-guarded RPCs. Stamping,
 * the overview and the member e-mails stay in Colnix, for staff only.
 */
import nodemailer from 'nodemailer';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from './supabase-public';

export async function rpc<T>(name: string, args: Record<string, unknown> = {}): Promise<T | null> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  });
  if (!res.ok) return null;
  return (await res.json()) as T;
}

export const TOKEN = /^[a-f0-9]{32}$/;

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

/** https://colnar.si — Netlify's URL in production, the request's own origin otherwise. */
export function siteUrl(req: Request): string {
  return (process.env.URL || new URL(req.url).origin).replace(/\/$/, '');
}

// ------------------------------------------------------------------ mail

/*
 * SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / MAIL_FROM, set in the Netlify
 * dashboard (Site configuration → Environment variables, scope: Functions).
 * Without them joining still works; only the welcome e-mail is skipped.
 */
export function mailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.MAIL_FROM);
}

export async function sendMail(to: string, subject: string, text: string, html: string): Promise<boolean> {
  if (!mailConfigured()) return false;
  try {
    const port = Number(process.env.SMTP_PORT ?? 465);
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transport.sendMail({ from: process.env.MAIL_FROM, replyTo: process.env.MAIL_REPLY_TO || undefined, to, subject, text, html });
    return true;
  } catch {
    return false;
  }
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/** Same look as the club mails Colnix sends: the site's warm ground, dark button, gold rule. */
export function mailHtml(clubName: string, body: string, buttonUrl: string, buttonLabel: string): string {
  const paras = esc(body)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px;line-height:1.6">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
  return `<!doctype html><html><body style="margin:0;background:#f3f2f2;font-family:Georgia,'Times New Roman',serif;color:#201f1d">
<div style="max-width:520px;margin:0 auto;padding:30px 18px">
<div style="font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#7d5411;margin-bottom:6px">Vinoteka Colnar</div>
<div style="font-size:24px;margin-bottom:18px">${esc(clubName)}</div>
<div style="border-top:1px solid #b68235;padding-top:18px;font-size:16px">${paras}
<a href="${buttonUrl}" style="display:inline-block;margin-top:6px;background:#2d2b2b;color:#f8f4f4;text-decoration:none;padding:12px 20px;border-radius:4px;font-size:15px">${esc(buttonLabel)}</a>
</div></div></body></html>`;
}
