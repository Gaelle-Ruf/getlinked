// == Import

import { NavLink } from 'react-router-dom';

import itunes from './images/itunes.png';
import shazam from './images/shazam.png';
import soundcloud from './images/soundcloud.png';
import spotify from './images/spotify.png';

import './styles.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <div className="footer__sponsors">
      <img src={itunes} alt="" />
      <img src={shazam} alt="" />
    </div>
    <ul className="footer__ul">
      <NavLink exact to="/" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">Accueil</li>
      </NavLink>
      <NavLink exact to="/artistes" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">Artistes</li>
      </NavLink>
      <NavLink exact to="/evenements" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">Evenements</li>
      </NavLink>
      <NavLink exact to="/organisateurs" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">Organisateurs</li>
      </NavLink>
      <NavLink exact to="/faq" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">FAQ</li>
      </NavLink>
      <NavLink exact to="/connexion" activeClassName="footer__ul__li__active">
        <li className="footer__ul__li">Connexion</li>
      </NavLink>
    </ul>
    <div className="footer__sponsors">
      <img src={soundcloud} alt="" />
      <img src={spotify} alt="" />
    </div>
  </footer>
);

// == Export
export default Footer;
