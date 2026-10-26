/*
 * Outgoing mail for the website's own forms, through the colnar.si mailbox.
 *
 * SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / MAIL_FROM are set in the
 * Netlify dashboard (Site configuration → Environment variables, scope:
 * Functions) — the same ones the loyalty club's mail uses. Without them
 * nothing is sent and the form itself still works.
 */
import nodemailer from 'nodemailer';

export interface Mail {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

export function mailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.MAIL_FROM);
}

export async function send(mails: Mail[]): Promise<boolean[]> {
  if (!mailConfigured()) return mails.map(() => false);
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return Promise.all(
    mails.map(async (mail) => {
      try {
        await transport.sendMail({ from: process.env.MAIL_FROM, ...mail });
        return true;
      } catch (error) {
        console.error('mail failed', mail.to, error);
        return false;
      }
    }),
  );
}

export function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

/** The site's look in a mail: warm ground, serif, a gold kicker over the heading. */
export function page(kicker: string, heading: string, inner: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f3f2f2;font-family:Georgia,'Times New Roman',serif;color:#201f1d">
<div style="max-width:560px;margin:0 auto;padding:30px 18px">
<div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#7d5411;margin-bottom:8px">${esc(kicker)}</div>
<div style="font-size:24px;margin-bottom:20px">${esc(heading)}</div>
${inner}
</div></body></html>`;
}

export function paragraphs(text: string): string {
  return esc(text)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px;line-height:1.6">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
}

export function table(rows: [string, string][]): string {
  const cells = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:7px 14px 7px 0;color:#7d5411;font-size:13px;letter-spacing:.06em;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:7px 0;vertical-align:top">${esc(v).replace(/\n/g, '<br>')}</td></tr>`,
    )
    .join('');
  return `<table style="border-collapse:collapse;border-top:1px solid #d9d6d2;border-bottom:1px solid #d9d6d2;margin:6px 0 20px;width:100%">${cells}</table>`;
}
