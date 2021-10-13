import './styles.scss';
import guillaume from './images/guillaume.png';
import nathan from './images/nathan.png';
import raph from './images/raph.png';
import brigitte from './images/brigitte.png';
// import Amaury from './images/Amaury.png';
import amaury from './images/amaury.png';

const Faq = () => (
  <div className="faq">
    <h1 className="faq__title">Foire aux questions</h1>
    <div className="faq__who">
      <p className="faq__who__p">KISS sommes-nous ?</p>
      <div className="faq__who__container">
        <div className="faq__who__container__card">
          <img src={guillaume} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Product Owner</p>
          <p className="faq__who__container__card__p">Guillaume</p>
        </div>
        <div className="faq__who__container__card">
          <img src={nathan} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Lead Dev Front</p>
          <p className="faq__who__container__card__p">Nathan</p>
        </div>
        <div className="faq__who__container__card">
          <img src={brigitte} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Lead Dev Back</p>
          <p className="faq__who__container__card__p">Gaelle</p>
        </div>
        <div className="faq__who__container__card">
          <img src={raph} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Scrum Master</p>
          <p className="faq__who__container__card__p">Raphael</p>
        </div>
        <div className="faq__who__container__card">
          <img src={amaury} alt="" className="faq__who__container__card__img" />
          <p className="faq__who__container__card__p">Git Master</p>
          <p className="faq__who__container__card__p">Amaury</p>
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
