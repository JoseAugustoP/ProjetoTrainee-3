import plantaImg from './assets/planta.png';
import vasoImg from './assets/vasoplanta.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__content">
        <span className="hero-section__eyebrow">
          Cultivo natural • Bem-estar • Sustentabilidade
        </span>

        <h1 className="hero-section__title" id="hero-title">
          Transforme seu espaço com o <span>poder das plantas</span>
        </h1>

        <p className="hero-section__description">
          Selecionamos plantas ideais para sua rotina e seu ambiente, com
          orientação completa para você cuidar sem complicação.
        </p>

        <div className="hero-section__actions">
          <a className="hero-section__button hero-section__button--primary" href="#kits">
            Explorar Plantas
          </a>
          <a className="hero-section__button hero-section__button--secondary" href="#kits">
            Montar Meu Kit
          </a>
        </div>
      </div>

      <div className="hero-section__media" aria-hidden="true">
        <div
          className="hero-section__plant"
          style={{ backgroundImage: `url(${plantaImg})` }}
        />
        <img className="hero-section__vase" src={vasoImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
