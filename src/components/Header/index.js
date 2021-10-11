import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import logo from './images/logo.png';
import menuClosed from './images/menu_closed.png';
import menuOpenedIcon from './images/menu_opened.png';

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
    });
  };

  const menuOpened = useSelector((state) => state.menuOpened);
  const logged = useSelector((state) => state.logged);

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <div className="header">
      <div className="header__menu">
        <Link to="/"><img src={logo} alt="logo" className="header__menu__logo" /></Link>
        {!menuOpened && (<img src={menuClosed} alt="menu_logo" className="header__menu__burger" onClick={handleMenu} />)}
        {menuOpened && (<img src={menuOpenedIcon} alt="menu_logo" className="header__menu__burger header__menu__burger__cross" onClick={handleMenu} />)}
      </div>
      {menuOpened && (
        <div className="header__menu-opened">
          <ul className="header__menu-opened__ul">
            <NavLink exact to="/" activeClassName="header__menu-opened__ul__li__active">
              <li className="header__menu-opened__ul__li">Accueil</li>
            </NavLink>
            <NavLink exact to="/artistes" activeClassName="header__menu-opened__ul__li__active">
              <li className="header__menu-opened__ul__li">Artistes</li>
            </NavLink>
            <NavLink exact to="/evenements" activeClassName="header__menu-opened__ul__li__active">
              <li className="header__menu-opened__ul__li">Evenements</li>
            </NavLink>
            <NavLink exact to="/organisateurs" activeClassName="header__menu-opened__ul__li__active">
              <li className="header__menu-opened__ul__li">Organisateurs</li>
            </NavLink>
            <NavLink exact to="/profil" activeClassName="header__menu-opened__ul__li__active">
              <li className="header__menu-opened__ul__li">Profil</li>
            </NavLink>
            {logged && (
            <NavLink exact to="/deconnexion" onClick={handleLogout}>
              <li className="header__menu-opened__ul__li">Deconnexion</li>
            </NavLink>
            )}
            {!logged && (
              <NavLink exact to="/connexion" activeClassName="header__menu-opened__ul__li__active">
                <li className="header__menu-opened__ul__li">Connexion</li>
              </NavLink>
            )}
          </ul>
        </div>
      )}

      <div className="header__menu--laptop">
        <div className="header__menu--laptop__left">
          <NavLink exact to="/" activeClassName="header__menu-opened__ul__li__active">
            Accueil
          </NavLink>
          <NavLink exact to="/artistes" activeClassName="header__menu-opened__ul__li__active">
            Artistes
          </NavLink>
          <NavLink exact to="/evenements" activeClassName="header__menu-opened__ul__li__active">
            Evenements
          </NavLink>
        </div>
        <Link to="/"><img src={logo} alt="logo" className="header__menu__logo" /></Link>
        <div className="header__menu--laptop__right">
          <NavLink exact to="/organisateurs" activeClassName="header__menu-opened__ul__li__active">
            Organisateurs
          </NavLink>
          <NavLink exact to="/profil" activeClassName="header__menu-opened__ul__li__active">
            Profil
          </NavLink>
          {logged && (
            <NavLink exact to="/deconnexion" onClick={handleLogout}>
              Déconnexion
            </NavLink>
          )}
          {!logged && (
            <NavLink exact to="/connexion" activeClassName="header__menu-opened__ul__li__active">
              Connexion
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
