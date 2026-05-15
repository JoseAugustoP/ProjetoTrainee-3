import logo from './assets/logo.png';
import './Header.css';

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Kits', href: '#kits' },
  { label: 'Contato', href: '#contato' },
];

function Header() {
  return (
    <header className="site-header" id="inicio">
      <a className="site-header__brand" href="#inicio" aria-label="Casa Botânica">
        <img src={logo} alt="Logo Casa Botânica" />
      </a>

      <nav className="site-header__nav" aria-label="Navegação principal">
        {navLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="site-header__button" href="#kits">
        Explorar Catálogo
      </a>
    </header>
  );
}

export default Header;
