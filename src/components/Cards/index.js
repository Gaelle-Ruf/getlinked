/* eslint-disable prefer-template */
// == Import

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import banner from './images/banner.jpg';
import banner3 from './images/banner3.jpeg';
import banner4 from './images/banner4.jpeg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import pin from './images/pin2.png';
import profil from './images/profil.jpeg';

import './styles.scss';

// == Composant
const Cards = ({
  name,
  picture,
  description,
  address,
  slug,
  type,
}) => (
  <Link to={`${type + 's'}/${slug}`}>
    <div className="card">
      {type === 'artiste' && <img src={banner4} alt="" className="card__banner" />}
      {type === 'organisateur' && <img src={banner} alt="" className="card__banner" />}
      {type === 'event' && <img src={banner3} alt="" className="card__banner" />}
      <div className="card__main">
        {picture !== undefined && <img src={picture} alt="" className="card__main__profile" />}
        {picture === undefined && <img src={profil} alt="" className="card__main__profile" />}
        <h1 className="card__main__title">{name}</h1>
        <div className="card__main__note">
          <img src={etoile} alt="" className="card__main__note__stars" />
          <img src={etoile} alt="" className="card__main__note__stars" />
          <img src={etoile} alt="" className="card__main__note__stars" />
          <img src={etoile} alt="" className="card__main__note__stars" />
          <img src={etoileTwo} alt="" className="card__main__note__stars" />
        </div>
        <p className="card__main__number">12 avis</p>
        <div className="card__main__location">
          <img src={pin} alt="" className="card__main__location__pin" />
          {address}
        </div>
        <div className="card__main__description">
          <p>{description}</p>
        </div>
        <div className="card__main__more">Voir plus</div>
      </div>
    </div>
  </Link>
);

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default Cards;
