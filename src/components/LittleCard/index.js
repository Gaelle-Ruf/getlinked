/* eslint-disable prefer-template */
/* eslint-disable react/require-default-props */
// == Import
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import banner4 from './images/banner4.jpeg';
import banner3 from './images/banner3.jpeg';
import banner2 from './images/banner2.jpeg';
// import guillaume from './images/guillaume.jpg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
import pin from './images/pin2.png';
import profil from './images/profil.jpeg';

import './styles.scss';

// == Composant
const LittleCard = ({
  name,
  picture,
  address,
  slug,
  type,
}) => (
  <Link to={`${type + 's'}/${slug}`}>
    <div className="little-card">
      {type === 'artiste' && <img src={banner4} alt="" className="little-card__banner" />}
      {type === 'organisateur' && <img src={banner2} alt="" className="little-card__banner" />}
      {type === 'event' && <img src={banner3} alt="" className="little-card__banner" />}
      <div className="little-card__main">
        {picture !== undefined && <img src={picture} alt="" className="little-card__main__profile" />}
        {picture === undefined && <img src={profil} alt="" className="little-card__main__profile" />}
        <h1 className="little-card__main__title">{name}</h1>
        <div className="little-card__main__note">
          <img src={etoile} alt="" className="little-card__main__note__stars" />
          <img src={etoile} alt="" className="little-card__main__note__stars" />
          <img src={etoile} alt="" className="little-card__main__note__stars" />
          <img src={etoile} alt="" className="little-card__main__note__stars" />
          <img src={etoileTwo} alt="" className="little-card__main__note__stars" />
        </div>
        <p className="little-card__main__number">12 avis</p>
        <div className="little-card__main__location">
          <img src={pin} alt="" className="little-card__main__location__pin" />
          {address}
        </div>
        <div className="little-card__main__more">Voir plus</div>
      </div>
    </div>
  </Link>
);

LittleCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

// == Export
export default LittleCard;
