type ContactPayload = {
  nome?: unknown;
  email?: unknown;
  comentario?: unknown;
};

function isFilled(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
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

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL || 'Casa Botanica <onboarding@resend.dev>';
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return res.status(500).json({ error: 'Resend nao configurado.' });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Novo contato de ${nome.trim()}`,
      reply_to: email.trim(),
      text: [
        `Nome: ${nome.trim()}`,
        `Email: ${email.trim()}`,
        '',
        comentario.trim(),
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    return res.status(502).json({ error: 'Falha ao enviar email.' });
  }

  return res.status(200).json({ ok: true });
}
