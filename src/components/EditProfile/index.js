/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

const EditProfile = () => {
  const dispatch = useDispatch();
  // const type = localStorage.getItem('type');
  const name = localStorage.getItem('name');
  const firstname = localStorage.getItem('firstname');
  const lastname = localStorage.getItem('lastname');
  const email = localStorage.getItem('email');
  const description = localStorage.getItem('description');
  // const nbMembers = localStorage.getItem('nbMembers');
  const address = localStorage.getItem('address');
  const website = localStorage.getItem('website');
  const facebook = localStorage.getItem('facebook');
  const instagram = localStorage.getItem('instagram');
  const twitter = localStorage.getItem('twitter');
  const picture = useSelector((state) => state.editProfil.picture);

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE_EDIT_USER',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'EDIT_USER',
    });
  };

  const handleNameChange = (evt) => {
    changeField(evt.target.value, 'name');
    changeField((evt.target.value).replace(/\s+/g, '-').toLowerCase(), 'slug');
  };
  const handleFirstnameChange = (evt) => {
    changeField(evt.target.value, 'firstname');
  };
  const handleLastnameChange = (evt) => {
    changeField(evt.target.value, 'lastname');
  };
  const handleEmailChange = (evt) => {
    changeField(evt.target.value, 'email');
  };
  const handleDescriptionChange = (evt) => {
    changeField(evt.target.value, 'description');
  };
  // const handleNbmembersChange = (evt) => {
  //   changeField(evt.target.value, 'nb_members');
  // };
  const handleAddressChange = (evt) => {
    changeField(evt.target.value, 'address');
  };
  const handleWebsiteChange = (evt) => {
    changeField(evt.target.value, 'website');
  };
  const handleFacebookChange = (evt) => {
    changeField(evt.target.value, 'facebook');
  };
  const handleTwitterChange = (evt) => {
    changeField(evt.target.value, 'twitter');
  };
  const handleInstagramChange = (evt) => {
    changeField(evt.target.value, 'instagram');
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    changeField(base64, 'picture');
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="register">
      <h1 className="register__title">Modifier le compte :</h1>
      <form method="POST" action="" className="register__form" onSubmit={handleSubmit}>
        {/* <div className="register__form__element">
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
        </div> */}
        <div className="register__form__element">
          <label htmlFor="name">Nom du groupe / organisateur :</label>
          <input type="text" name="name" id="name" placeholder={name} className="register__form__element__input" onChange={handleNameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="firstname">Prenom :</label>
          <input type="text" name="firstname" id="firstname" placeholder={firstname} className="register__form__element__input" onChange={handleFirstnameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="lastname">Nom :</label>
          <input type="text" name="lastname" id="lastname" placeholder={lastname} className="register__form__element__input" onChange={handleLastnameChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" id="email" placeholder={email} className="register__form__element__input" onChange={handleEmailChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="description">Description :</label>
          <textarea name="description" id="description" cols="30" rows="10" placeholder={description} className="register__form__element__description register__form__element__input" onChange={handleDescriptionChange} />
        </div>
        {/* <div className="register__form__element">
          <label htmlFor="nb_members">Nombre de personne dans le groupe :</label>
          <input type="number" name="nb_members" id="nb_members" min="0" placeholder={nbMembers} max="50" range="1" className="register__form__element__input" onChange={handleNbmembersChange} />
        </div> */}
        <div className="register__form__element">
          <label htmlFor="address">Ville :</label>
          <input type="text" name="address" id="address" placeholder={address} className="register__form__element__input" onChange={handleAddressChange}/>
        </div>
        <div className="register__form__element">
          <label htmlFor="website">Site :</label>
          <input type="text" name="website" id="website" placeholder={website} className="register__form__element__input" onChange={handleWebsiteChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="facebook">Facebook :</label>
          <input type="text" name="facebook" id="facebook" placeholder={facebook} className="register__form__element__input" onChange={handleFacebookChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="instagram">Instagram :</label>
          <input type="text" name="instagram" id="instagram" placeholder={instagram} className="register__form__element__input" onChange={handleInstagramChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="twitter">Twitter :</label>
          <input type="text" name="twitter" id="twitter" placeholder={twitter} className="register__form__element__input" onChange={handleTwitterChange} />
        </div>
        <div className="register__form__element">
          <label htmlFor="picture">Photo de profil :</label>
          <input type="file" name="picture" id="picture" className="register__form__element__input register__form__element__input--picture" onChange={uploadImage} />
          <img src={picture} alt="" />
        </div>
        <button type="submit" className="register__form__submit">Modifier le compte</button>
      </form>
    </div>
  );
};

export default EditProfile;
