import logoFooter from './assets/logo2.png';
import './Footer.css';

const navLinks = ['Início', 'Sobre', 'Kits', 'Contato'];
const supportLinks = [
  'casabotanica@gmail.com',
  '(47) 99999-9999',
  'Ajuda & Suporte',
  'Termos de Compromisso',
];

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-logo">
        <img src={logoFooter} alt="Casa Botânica - Plantas & Bem-Estar Natural" />
      </div>

      <nav className="footer-links" aria-label="Navegação">
        <h2>Navegação</h2>
        {navLinks.map((link) => (
          <a href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} key={link}>
            {link}
          </a>
        ))}
      </nav>

      <nav className="footer-links footer-support" aria-label="Suporte">
        <h2>Suporte</h2>
        {supportLinks.map((link) => (
          <a href={link.includes('@') ? `mailto:${link}` : '#suporte'} key={link}>
            {link}
          </a>
        ))}
      </nav>

      <div className="footer-social">
        <h2>Redes Sociais</h2>
        <div className="footer-social-list" aria-label="Redes sociais">
          <a href="https://wa.me/5547999999999" aria-label="WhatsApp" target="_blank" rel="noreferrer">
            W
          </a>
          <a href="https://www.instagram.com/casa_botanica" aria-label="Instagram" target="_blank" rel="noreferrer">
            I
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
            F
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
