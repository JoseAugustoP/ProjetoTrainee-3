import plantaImg from './assets/planta.png';
import vasoImg from './assets/vasoplanta.png';

function Hero() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 48px',
      minHeight: '80vh',
      width: '100%',
      boxSizing: 'border-box'
    }}>

      {/* Lado esquerdo */}
      <div style={{ maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '24px', marginLeft: '120px', marginBottom: '40px' }}>
        <span style={{
          backgroundColor: '#8c9a61',
          color: 'white',
          padding: '6px 14px',
          borderRadius: '5px',
          fontSize: '15px',
          width: 'fit-content',
        }}>
          Cultivo natural • Bem-estar • Sustentabilidade
        </span>

        <h1 style={{ fontSize: '52px', lineHeight: '1.3', margin: 0, color: '#1a1a1a' }}>
          Transforme seu espaço<br/>
          com o {' '}<span style={{ color: '#8fba3f' }}>poder das plantas</span>
        </h1>

        <p style={{ fontSize: '20px', color: '#000000', margin: 0, lineHeight: '1.2' }}>
          Selecionamos plantas ideais para sua rotina e seu ambiente,
          com orientação completa para você cuidar sem complicação.
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: '#93589a',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '20px',
            cursor: 'pointer',
          }}>
            Explorar Plantas
          </button>
          <button style={{
            backgroundColor: '#bb87ae',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '20px',
            cursor: 'pointer',
          }}>
            Montar Meu Kit
          </button>
        </div>
      </div>

      {/* Lado direito - imagens empilhadas */}
      <div style={{
        position: 'relative',
        width: '700px',
        height: '700px',
        flexShrink: 0,
        marginRight: '150px',
      }}>
        {/* Fundo com planta */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at center, #d4f0a0 0%, transparent 70%), url(${plantaImg}) center/contain no-repeat`,
        }}>
        </div>

        <img
          src={vasoImg}
          alt="Vaso"
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '110%',
            objectFit: 'contain',
            marginRight: '80px',
          }}
        />
      </div>

    </section>
  );
}

export default Hero;