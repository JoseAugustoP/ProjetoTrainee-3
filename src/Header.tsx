import logo from './assets/logo.png';
function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 48px',
      borderBottom: '1px solid #eee',
    }}>

      {}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img 
          src={logo} 
          alt="Logo Casa Botânica" 
          style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
        />
      </div>

      {}
      <nav style={{ display: 'flex', gap: '32px', fontFamily: 'Font/Family/Primary' }}>
        <a href="#">Início</a>
        <a href="#">Sobre</a> 
        <a href="#">Kits</a>
        <a href="#">Contato</a>
      </nav>

      {}
      <button style={{
        backgroundColor: '#56642b',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontFamily: 'Font/Family/Secondary'
      }}>
        Explorar Catálogo
      </button>

    </header>
  );
}

export default Header;