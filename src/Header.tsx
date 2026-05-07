function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 48px',
      borderBottom: '1px solid #eee'
    }}>

      {}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>🌿</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>CASA BOTÂNICA</span>
          <span style={{ fontSize: '11px', color: '#1b1b1b' }}>Plantas & Bem-Estar Natural</span>
        </div>
      </div>

      {}
      <nav style={{ display: 'flex', gap: '32px' }}>
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
        cursor: 'pointer'
      }}>
        Explorar Catálogo
      </button>

    </header>
  );
}

export default Header;