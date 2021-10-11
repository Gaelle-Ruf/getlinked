import './styles.scss';
import guillaume from './images/guillaume.jpg';

const Faq = () => (
  <div className="faq">
    <h1 className="faq__title">Foire aux questions</h1>
    <div className="faq__who">
      <p className="faq__who__p">Qui sommes nous ?</p>
      <div className="faq__who__container">
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Product Owner</p>
        </div>
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Lead Dev Front</p>
        </div>
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Lead Dev Back</p>
        </div>
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Scrum Master</p>
        </div>
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Git Master</p>
        </div>
      </div>
    </div>
    <div className="faq__questions">
      <h2 className="faq__questions__question">Qui est le plus BG ?</h2>
      <p className="faq__questions__response">Par élimination : pas nathan, pas amaury, pas gaelle, pas raph donc je vous laisse deviner qui c'est :)</p>
      <h2 className="faq__questions__question">Question 2</h2>
      <p className="faq__questions__response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur eligendi eos vero ad sit? Odit maiores modi facere, tenetur aut alias! Sed adipisci perferendis autem iure inventore debitis numquam?</p>
      <h2 className="faq__questions__question">Question 3</h2>
      <p className="faq__questions__response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur eligendi eos vero ad sit? Odit maiores modi facere, tenetur aut alias! Sed adipisci perferendis autem iure inventore debitis numquam?</p>
    </div>
  </div>
);

export default Faq;
