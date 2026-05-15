import Ivaso from './assets/iconevaso.png';
import Icaixa from './assets/iconecaixa.png';
import Ilivro from './assets/iconelivro.png';
import layout from './assets/Grid.png';

function Sobre() {
  return (
    <section style={{
      display: 'flex',
      padding: '80px 48px',
      gap: '80px',
      alignItems: 'flex-start',
      marginLeft: '90px'
    }}>
      {/* Lado esquerdo */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <span style={{ fontSize: '20px', color: '#000000' }}>Sobre nós</span>
        <h2 style={{ fontSize: '40px', lineHeight: '1.7', margin: 0, color: '#1a1a1a', marginTop: '200px' }}>
          Criamos experiências naturais para sua casa
        </h2>
        <p style={{ fontSize: '20px', color: '#000000', margin: 0, lineHeight: '1.7' }}>
          Na <span style={{ color: '#8fba3f' }}>Casa Botânica</span>, acreditamos que o contato com a natureza transforma não só os ambientes, mas também a forma como vivemos e nos sentimos no dia a dia.
        </p>
        <p style={{ fontSize: '20px', color: '#000000', margin: 0, lineHeight: '1.7' }}>
          Por isso, selecionamos cuidadosamente plantas e criamos soluções práticas para que qualquer pessoa, mesmo sem experiência, consiga cultivar um espaço mais leve, saudável e cheio de vida.
        </p>

        {/* Cards */}
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
          {[
            { icone: Ivaso, texto: 'Curadoria de plantas para iniciantes' },
            { icone: Ilivro, texto: 'Guia completo de manutenção' },
            { icone: Icaixa, texto: 'Kits prontos e fáceis de cuidar' },
          ].map((item, i) => (
            <div key={i} style={{
              backgroundColor: '#e8f5b0',
              borderRadius: '16px',
              padding: '40px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)'
            }}>
              <img src={item.icone} alt="" style={{ width: '48px', height: '48px', objectFit: 'contain', background: 'green', borderRadius: '10px'  }} />
              <p style={{ margin: 0, fontSize: '20px', color: '#333',  }}>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lado direito */}
      <img src={layout} alt="Fotos" style={{ flex: 1, width: '50%', borderRadius: '16px', objectFit: 'cover' }} />

    </section>
  );
}

export default Sobre;