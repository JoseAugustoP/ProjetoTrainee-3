import logo from './assets/logo.png';

function Header() {
  return (
    <header
      id="inicio"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 48px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src={logo}
          alt="Logo Casa Botânica"
          style={{ width: '300px', height: '100px', objectFit: 'contain' }}
        />
      </div>

      <nav style={{ display: 'flex', gap: '64px', fontFamily: "'Playfair Display', serif", fontSize: '24px' }}>
        <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Início</a>
        <a href="#sobre" style={{ textDecoration: 'none', color: 'inherit' }}>Sobre</a>
        <a href="#kits" style={{ textDecoration: 'none', color: 'inherit' }}>Kits</a>
        <a href="#contato" style={{ textDecoration: 'none', color: 'inherit' }}>Contato</a>
      </nav>

      <button
        type="button"
        style={{
          backgroundColor: '#56642b',
          color: 'white',
          padding: '20px 30px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
        }}
      >
        Explorar Catálogo
      </button>
    </header>
  );
}

export default Header;
