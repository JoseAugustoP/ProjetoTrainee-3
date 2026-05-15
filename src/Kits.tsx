import { useSnapCarousel } from 'react-snap-carousel';
import './Kits.css';

const plantas = [
  {
    id: 0,
    src: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&h=800&q=90',
    alt: 'Planta pendente em vaso suspenso',
    nome: 'Kit Iniciante',
    preco: 'R$ 79.90',
    descricao: 'Ideal para quem está começando no mundo das plantas.',
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&h=800&q=90',
    alt: 'Palmeira em vaso claro',
    nome: 'Kit Tropical',
    preco: 'R$ 129.90',
    descricao: 'Folhagens marcantes para ambientes iluminados.',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&h=800&q=90',
    alt: 'Planta pequena em vaso de concreto',
    nome: 'Kit Aromas',
    preco: 'R$ 99.90',
    descricao: 'Um conjunto delicado para perfumar a rotina.',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&h=800&q=90',
    alt: 'Folhagem em vaso branco',
    nome: 'Kit Folhagem',
    preco: 'R$ 149.90',
    descricao: 'Verde intenso para compor espaços de destaque.',
  },
];

function Kits() {
  const { scrollRef } = useSnapCarousel();

  return (
    <section className="kits-section" id="kits">
      <div className="kits-container">
        <h2 className="kits-title">Kits</h2>

        <div className="kits-slider" ref={scrollRef} aria-label="Galeria de kits de plantas">
          {plantas.map((planta) => (
            <article className="kits-slide" key={planta.id}>
              <img src={planta.src} alt={planta.alt} className="kits-slide-image" />
              <div className="kits-slide-content">
                <div className="kits-slide-heading">
                  <h3>{planta.nome}</h3>
                  <strong>{planta.preco}</strong>
                </div>
                <p>{planta.descricao}</p>
              </div>
            </article>
          ))}
        </div>

        <button className="kits-button" type="button">
          Montar meu espaço
        </button>
      </div>
    </section>
  );
}

export default Kits;