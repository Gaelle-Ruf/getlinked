/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.scss';

const EditProfile = () => {
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

  //TODO : OnChange -> stocker en BDD

  return (
    <div className="register">
      <h1 className="register__title">Modifier le compte :</h1>
      <form method="POST" action="" className="register__form">
        <div className="register__form__element">
          <label htmlFor="type">Vous êtes :</label>
          {type === 'artiste' && (
            <select name="type" id="type" className="register__form__element__input">
              <option defaultValue value="artiste">Artiste</option>
              <option value="organisateur">Organisateur</option>
            </select>
          )}
          {type === 'organisateur' && (
            <select name="type" id="type" className="register__form__element__input">
              <option value="artiste">Artiste</option>
              <option defaultValue value="organisateur">Organisateur</option>
            </select>
          )}
        </div>
        <div className="register__form__element">
          <label htmlFor="name">Nom du groupe / organisateur :</label>
          <input type="text" name="name" id="name" value={name} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="firstname">Prenom :</label>
          <input type="text" name="firstname" id="firstname" value={firstname} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="lastname">Nom :</label>
          <input type="text" name="lastname" id="lastname" value={lastname} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" id="email" value={email} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="description">Description :</label>
          <textarea name="description" id="description" cols="30" rows="10" value={description} className="register__form__element__description register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="nb_members">Nombre de personne dans le groupe :</label>
          <input type="number" name="nb_members" id="nb_members" min="0" value={nbMembers} max="50" range="1" className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="address">Ville :</label>
          <input type="text" name="address" id="address" value={address} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="website">Site :</label>
          <input type="text" name="website" id="website" value={website} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="facebook">Facebook :</label>
          <input type="text" name="facebook" id="facebook" value={facebook} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="instagram">Instagram :</label>
          <input type="text" name="instagram" id="instagram" value={instagram} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="twitter">Twitter :</label>
          <input type="text" name="twitter" id="twitter" value={twitter} className="register__form__element__input" />
        </div>
        <div className="register__form__element">
          <label htmlFor="picture">Photo de profil :</label>
          <input type="file" name="picture" id="picture" className="register__form__element__input register__form__element__input--picture" />
          <img src={picture} alt="" />
        </div>
        <button type="submit" className="register__form__submit">Modifier le compte</button>
      </form>
    </div>
  );
};

export default EditProfile;
