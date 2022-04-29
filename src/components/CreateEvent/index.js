/* eslint-disable no-use-before-define */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

const CreateEvent = () => {
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.createEvent.name);
  const pictureTest = useSelector((state) => state.createEvent.picture);
  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'NEW_EVENTS',
    });
  };

  const handleNameChange = (evt) => {
    changeField(evt.target.value, 'name');
    changeField((evt.target.value).replace(/\s+/g, '-').toLowerCase(), 'slug');
  };
  const handleEmailChange = (evt) => {
    changeField(evt.target.value, 'email');
  };
  const handleDescriptionChange = (evt) => {
    changeField(evt.target.value, 'description');
  };
  const handleDateChange = (evt) => {
    changeField(evt.target.value, 'date');
  };
  const handleAddressChange = (evt) => {
    changeField(evt.target.value, 'address');
  };
  const handlePriceChange = (evt) => {
    changeField(evt.target.value, 'price');
  };
  const handleDurationChange = (evt) => {
    changeField(evt.target.value, 'duration');
  };
  // const handlePictureChange = (evt) => {
  //   changeField(evt.target.value, 'picture');
  // };

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

  // console.log(pictureTest);

  return (
    <div className="eventCreation">
      <h1 className="eventCreation__title">Créer un événement :</h1>
      <form action="POST" className="eventCreation__form" onSubmit={handleSubmit}>
        <div className="eventCreation__form__element">
          <label htmlFor="name">Nom de l'événement :</label>
          <input type="text" name="name" id="name" className="eventCreation__form__element__input" onChange={handleNameChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="email">Email :</label>
          <input type="text" name="email" id="email" className="eventCreation__form__element__input" onChange={handleEmailChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="description">Description :</label>
          <textarea name="description" id="description" cols="30" rows="10" className="eventCreation__form__element__description eventCreation__form__element__input" onChange={handleDescriptionChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="date">Date :</label>
          <input type="date" name="date" id="date" className="eventCreation__form__element__input" onChange={handleDateChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="address">Ville :</label>
          <input type="text" name="address" id="address" className="eventCreation__form__element__input" onChange={handleAddressChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="price">Rémunération (si rémunération) :</label>
          <input type="number" min={0} name="price" id="price" className="eventCreation__form__element__input" onChange={handlePriceChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="duration">Durée :</label>
          <input type="time" name="duration" id="duration" className="eventCreation__form__element__input" onChange={handleDurationChange} />
        </div>
        <div className="eventCreation__form__element">
          <label htmlFor="picture">Photo de l'événement / lieu :</label>
          <input type="file" name="picture" id="picture" className="eventCreation__form__element__input eventCreation__form__element__input--picture" onChange={uploadImage} />
          <img src={pictureTest} alt="" />
        </div>
        <button type="submit" className="eventCreation__form__submit">Créer un événement</button>
      </form>
    </div>
  );
};

export default CreateEvent;
