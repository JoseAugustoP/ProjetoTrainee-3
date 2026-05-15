import { Resend } from 'resend';

type ContactPayload = {
  nome?: unknown;
  email?: unknown;
  comentario?: unknown;
};

function isFilled(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { nome, email, comentario } = req.body as ContactPayload;

  if (!isFilled(nome) || !isFilled(email) || !isFilled(comentario)) {
    return res.status(400).json({ error: 'Preencha todos os campos.' });
  }

  const trimmedNome = nome.trim();
  const trimmedEmail = email.trim();
  const trimmedComentario = comentario.trim();

  if (!isEmail(trimmedEmail)) {
    return res.status(400).json({ error: 'Informe um email valido.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return res.status(500).json({ error: 'Resend nao configurado.' });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Novo contato de ${trimmedNome}`,
    replyTo: trimmedEmail,
    text: [
      `Nome: ${trimmedNome}`,
      `Email: ${trimmedEmail}`,
      '',
      trimmedComentario,
    ].join('\n'),
    html: `
      <h2>Novo contato pelo site</h2>
      <p><strong>Nome:</strong> ${escapeHtml(trimmedNome)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(trimmedComentario).replace(/\n/g, '<br>')}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return res.status(502).json({ error: 'Falha ao enviar email.' });
  }

  return res.status(200).json({ ok: true });
}
