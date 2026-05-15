import Ivaso from './assets/iconevaso.png';
import Icaixa from './assets/iconecaixa.png';
import Ilivro from './assets/iconelivro.png';
import layout from './assets/Grid.png';
import './Sobre.css';

type FeatureCard = {
  icon: string;
  text: string;
};

const featureCards: FeatureCard[] = [
  { icon: Ivaso, text: 'Curadoria de plantas para iniciantes' },
  { icon: Ilivro, text: 'Guia completo de manutenção' },
  { icon: Icaixa, text: 'Kits prontos e fáceis de cuidar' },
];

function Sobre() {
  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="about-section__content">
        <span className="about-section__eyebrow">Sobre nós</span>

        <h2 className="about-section__title" id="about-title">
          Criamos experiências naturais para sua casa
        </h2>

        <div className="about-section__copy">
          <p>
            Na <strong>Casa Botânica</strong>, acreditamos que o contato com a
            natureza transforma não só os ambientes, mas também a forma como
            vivemos e nos sentimos no dia a dia.
          </p>
          <p>
            Por isso, selecionamos cuidadosamente plantas e criamos soluções
            práticas para que qualquer pessoa, mesmo sem experiência, consiga
            cultivar um espaço mais leve, saudável e cheio de vida.
          </p>
        </div>

        <div className="about-section__cards" aria-label="Diferenciais da Casa Botânica">
          {featureCards.map((item) => (
            <article className="about-card" key={item.text}>
              <span className="about-card__icon">
                <img src={item.icon} alt="" aria-hidden="true" />
              </span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-section__media">
        <img src={layout} alt="Composição de plantas e ambientes naturais" />
      </div>
    </section>
  );
}

export default Sobre;
