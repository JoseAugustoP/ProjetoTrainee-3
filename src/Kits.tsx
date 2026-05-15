import { useSnapCarousel } from 'react-snap-carousel';

const plantas = [
  { id: 0, src: 'https://placehold.co/220x660/e0e0e0/999?text=Planta+1' },
  { id: 1, src: 'https://placehold.co/220x660/e0e0e0/999?text=Planta+2' },
  { id: 2, src: 'https://placehold.co/220x660/e0e0e0/999?text=Planta+3' },
  { id: 3, src: 'https://placehold.co/220x660/e0e0e0/999?text=Planta+4' },
];

function Kits() {
  const { scrollRef, next, prev, activePageIndex } = useSnapCarousel();

  return (
    <section style={{ padding: '80px 48px' }}>

      {/* Título */}
      <span style={{ fontSize: '20px', color: '#000000' }}>Kits</span>

      {/* Carrossel */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '24px',
          marginTop: '40px',
          justifyContent: 'center',
        }}
      >
        {plantas.map((planta, i) => {
          const isActive = i === activePageIndex;
          return (
            <div
              key={planta.id}
              style={{
                minWidth: '220px',
                height: '660px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#f0f0f0',
                flexShrink: 0,
                scrollSnapAlign: 'center',
                transition: '0.3s',
                transform: isActive ? 'scale(1.05)' : 'scale(0.95)',
                opacity: isActive ? 1 : 0.6,
              }}
            >
              <img
                src={planta.src}
                alt={`Planta ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>

      {/* Botões de navegação */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
        <button onClick={() => prev()} style={{
          backgroundColor: '#7c5c8a',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '18px',
          cursor: 'pointer',
        }}>←</button>
        <button onClick={() => next()} style={{
          backgroundColor: '#7c5c8a',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '18px',
          cursor: 'pointer',
        }}>→</button>
      </div>

      {/* Botão montar espaço */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <button style={{
          backgroundColor: '#7c5c8a',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          padding: '16px 32px',
          fontSize: '16px',
          cursor: 'pointer',
        }}>
          Montar meu espaço
        </button>
      </div>

    </section>
  );
}

export default Kits;