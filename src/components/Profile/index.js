import './styles.scss';

import { Link } from 'react-router-dom';

// import nathan from './images/nathan.jpg';

const Profile = () => {
  const type = localStorage.getItem('type');
  const name = localStorage.getItem('name');
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  const email = localStorage.getItem('email');
  const description = localStorage.getItem('description');
  const nbMembers = localStorage.getItem('nbMembers');
  const address = localStorage.getItem('address');
  const website = localStorage.getItem('website');
  const facebook = localStorage.getItem('facebook');
  const instagram = localStorage.getItem('instagram');
  const twitter = localStorage.getItem('twitter');
  const picture = localStorage.getItem('picture');
  // const slug = localStorage.getItem('slug');

  return (
    <div className="profil">

      {picture && <img src={picture} alt="" className="profil__img" />}

      <p className="profil__info__firstName info">Nom :</p>
      <p className="infos">{lastname}</p>

      <p className="profil__info__lastName info">Prénom :</p>
      <p className="infos">{firstname}</p>

      <p className="profil__info__email info">Email :</p>
      <p className="infos">{email}</p>

      {type === 'artiste' && <p className="profil__info__nameArtiste info">Nom d'artiste :</p>}
      {type === 'organisateur' && <p className="profil__info__nameArtiste info">Nom de l'organisme :</p>}
      <p className="infos">{name}</p>

      <p className="profil__info__description info">Description : </p>
      <p className="infos">{description}</p>

      {type === 'artiste' && (
        <p className="profil__info__sizegroup info">Taille du groupe : </p>
      )}
      {type === 'artiste' && (
        <p className="infos">{nbMembers}</p>
      )}

      {type === 'artiste' && (
        <p className="profil__info__styleMusique info">Style de musique :</p>
      )}
      {type === 'artiste' && (
        <p className="infos">Inconnu</p>
      )}

      <p className="profil__info__Location info">Localisation :</p>
      <p className="infos">{address}</p>

      {website && <p className="profil__info__email info">Site :</p>}
      {website && <p className="infos">{website}</p>}

      {facebook && <p className="profil__info__email info">Facebook :</p>}
      {facebook && <p className="infos">{facebook}</p>}

      {instagram && <p className="profil__info__email info">Instagram :</p>}
      {instagram && <p className="infos">{instagram}</p>}

      {twitter && <p className="profil__info__email info">Twitter :</p>}
      {twitter && <p className="infos">{twitter}</p>}

      <Link to="/modifier-le-compte" className="profil__modif">
        <button type="button" className="profil__modif__button">Modifier le profil</button>
      </Link>

    </div>
  );
};

export default Profile;
