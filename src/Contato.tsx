import { FormEvent, useState } from 'react';
import mapImage from './assets/map.png';
import plantaContato from './assets/planta-contato.png';
import './Contato.css';

function Contato() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    setIsSending(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.get('nome'),
          email: formData.get('email'),
          comentario: formData.get('comentario'),
        }),
      });

      if (!response.ok) {
        throw new Error('Nao foi possivel enviar a mensagem.');
      }

      event.currentTarget.reset();
      setStatusMessage('Mensagem enviada com sucesso.');
    } catch {
      setStatusMessage('Nao foi possivel enviar agora. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact-section" id="contato">
      <img className="contact-leaf" src={plantaContato} alt="" aria-hidden="true" />

      <div className="contact-container">
        <p className="contact-eyebrow">Entre em Contato</p>

        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Fale com a gente e transforme seu espaço</h2>
            <p>
              Tem dúvidas ou quer ajuda para escolher suas plantas? Envie uma mensagem
              e nossa equipe responde rapidamente.
            </p>
          </div>

          <form className={`contact-form ${isSending ? 'is-sending' : ''}`} onSubmit={handleSubmit}>
            <label>
              Nome Completo
              <input
                type="text"
                name="nome"
                placeholder="Seu nome completo"
                disabled={isSending}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                inputMode="email"
                name="email"
                placeholder="seuemail@email.com"
                disabled={isSending}
                required
              />
            </label>

            <label>
              Comentário
              <textarea
                name="comentario"
                placeholder="Escreva sua mensagem ou dúvida..."
                disabled={isSending}
                required
              />
            </label>

            <button type="submit" disabled={isSending}>
              Enviar Mensagem
              {isSending && <span className="contact-spinner" aria-hidden="true" />}
            </button>
            {statusMessage && <p className="contact-status">{statusMessage}</p>}
          </form>

          <aside className="contact-info" aria-label="Informações de contato">
            <img className="contact-map" src={mapImage} alt="Mapa da Rua das Palmeiras em Blumenau" />

            <div className="contact-address">
              <span className="contact-icon">P</span>
              <div>
                <strong>Rua das Palmeiras, 123</strong>
                <p>Centro - Blumenau, SC - CEP: 89015-901</p>
              </div>
            </div>

            <ul className="contact-socials">
              <li>
                <span className="contact-icon">W</span>
                <a href="tel:+5547999999999">(47) 99999-9999</a>
              </li>
              <li>
                <span className="contact-icon">I</span>
                <a href="https://www.instagram.com/casa_botanica" target="_blank" rel="noreferrer">
                  @casa_botanica
                </a>
              </li>
              <li>
                <span className="contact-icon">F</span>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                  Casa Botânica
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Contato;
