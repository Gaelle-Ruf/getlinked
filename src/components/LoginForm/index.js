// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
const LoginForm = () => (
  <div className="form__container">
    <form action="" method="post" className="form__container__info">

      <label htmlFor="email" className="form__container__info__labelEmail">Email</label>
      <input type="email" name="email" id="email" className="form__container__info__email" />

      <label htmlFor="password" className="form__container__info__labelPassword">Mot de passe</label>
      <input type="password" name="password" id="password" className="form__container__info__password"/>

      <button type="submit" className="form__container__info__login">Connexion</button>

      <Link to="/nouveau-compte">
        <p className="form__container__info__p">Vous n'avez pas encore de compte ? Cliquez ici</p>
      </Link>
    </form>
  </div>
);

// == Export
export default LoginForm;
