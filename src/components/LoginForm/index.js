/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import { useDispatch } from 'react-redux';

import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
const LoginForm = () => {
  const dispatch = useDispatch();
  // const name = useSelector((state) => state.createEvent.name);
  const changeField = (value, key) => {
    dispatch({
      type: 'SAVE_USER_INFO',
      value: value,
      key: key,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGIN',
    });
  };

  const handleEmailChange = (evt) => {
    changeField(evt.target.value, 'email');
  };
  const handlePasswordChange = (evt) => {
    changeField(evt.target.value, 'password');
  };
  return (
    <div className="form__container">
      <form action="" method="post" className="form__container__info" onSubmit={handleSubmit}>

        <label htmlFor="email" className="form__container__info__labelEmail">Email</label>
        <input type="email" name="email" id="email" className="form__container__info__email" onChange={handleEmailChange} />

        <label htmlFor="password" className="form__container__info__labelPassword">Mot de passe</label>
        <input type="password" name="password" id="password" className="form__container__info__password" onChange={handlePasswordChange} />

        <button type="submit" className="form__container__info__login">Connexion</button>

        <Link to="/nouveau-compte">
          <p className="form__container__info__p">Vous n'avez pas encore de compte ? Cliquez ici</p>
        </Link>
      </form>
    </div>
  );
};

// == Export
export default LoginForm;
