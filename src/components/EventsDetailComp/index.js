/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import './styles.scss';

import { Carousel } from 'react-carousel-minimal';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import PropTypes from 'prop-types';

// import banner from './images/banner.jpg';
import banner4 from './images/banner4.jpeg';
import etoile from './images/etoile.png';
import etoileTwo from './images/etoile2.png';
// import guillaume from './images/guillaume.jpg';
import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';

const EventsDetailComp = ({ userDetail }) => {
  const dispatch = useDispatch();
  const successPopup = useSelector((state) => state.successPopup);
  const errorPopup = useSelector((state) => state.errorPopup);

  const data = [
    {
      image: first,
    },
    {
      image: second,
    },
    {
      image: third,
    },
    {
      image: fourth,
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_6kkxt0a', 'template_t5j8cbo', event.target, 'user_b9zjRs2ebKBBWwU22hWMN')
      .then(() => {
        dispatch({
          type: 'TOGGLE_SUCCESS_POPUP',
        });
      })
      .catch(() => {
        dispatch({
          type: 'TOGGLE_ERROR_POPUP',
        });
      });
  };

  const handleCloseSuccessPopup = () => {
    dispatch({
      type: 'TOGGLE_SUCCESS_POPUP',
    });
  };

  const handleCloseErrorPopup = () => {
    dispatch({
      type: 'TOGGLE_ERROR_POPUP',
    });
  };

  return (
    <div className="detail-container">
      {successPopup && (
        <div className="detail-container__popup">
          <h1 className="detail-container__popup__title">Message envoyé avec succès !</h1>
          <button type="button" className="detail-container__popup__button" onClick={handleCloseSuccessPopup}>Fermer</button>
        </div>
      )}
      {errorPopup && (
        <div className="detail-container__popup__error">
          <h1 className="detail-container__popup__error__title">Erreur, message non envoyé</h1>
          <button type="button" className="detail-container__popup__error__button" onClick={handleCloseErrorPopup}>Fermer</button>
        </div>
      )}
      <img src={banner4} alt="" className="detail-container__top" />
      <div className="detail-container__main">
        <img src={userDetail.picture} alt="" className="detail-container__main__profile" />
        <h1 className="detail-container__main__title">{userDetail.name}</h1>
        <div className="detail-container__main__note">
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoile} alt="" className="detail-container__main__note__stars" />
          <img src={etoileTwo} alt="" className="detail-container__main__note__stars" />
          <p className="detail-container__main__note__number">12 avis</p>
        </div>
        <div className="detail-container__main__description">
          {userDetail.description}
        </div>
        <ul className="detail-container__main__infos">
          <li className="detail-container__main__infos__element">Nom de l'organisateur : {userDetail.user.name}</li>
          <li className="detail-container__main__infos__element">Style de musique : rock</li>
          <li className="detail-container__main__infos__element">Localisation : {userDetail.location}</li>
          <li className="detail-container__main__infos__element">Email : {userDetail.email}</li>
        </ul>
        <form className="detail-container__main__form" onSubmit={sendEmail}>
          <input type="hidden" name="name" value={userDetail.email} />
          <div className="detail-container__main__form__container">
            <div className="detail-container__main__form__container__name">
              <label htmlFor="email">Email :</label>
              <input type="email" name="user_email" />
            </div>
            <div className="detail-container__main__form__container__name">
              <label htmlFor="message">Message :</label>
              <textarea name="message" rows="4" />
            </div>
          </div>
          <input type="submit" value="Contacter" className="detail-container__main__form__button" />
        </form>
        <div className="detail-container__main__medias">
          <h1 className="detail-container__main__medias__title">Photos de l'artiste :</h1>
          <Carousel
            data={data}
            time={4000}
            width="560px"
            height="315px"
            captionStyle={captionStyle}
            radius="0"
            z-index="1"
            captionPosition="center"
            automatic
            dots
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </div>
      </div>
    </div>
  );
};

EventsDetailComp.propTypes = {
  userDetail: PropTypes.object.isRequired,
};

export default EventsDetailComp;
