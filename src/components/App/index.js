// == Import

import {
  Switch,
  Route,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from 'src/components/Header';
import CarouselComponent from 'src/components/CarouselComponent';
import HomepageEvents from 'src/components/HomepageEvents';
import HomepageArtists from 'src/components/HomepageArtists';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import ArtistesPage from 'src/components/ArtistesPage';
import EventsPage from 'src/components/EventsPage';
import PromotersPage from 'src/components/PromotersPage';
import ErrorPage from 'src/components/ErrorPage';
import Profile from 'src/components/Profile';
import Register from 'src/components/Register';
import EditProfile from 'src/components/EditProfile';
import Faq from 'src/components/Faq';
import CreateEvent from 'src/components/CreateEvent';

import UserDetail from 'src/components/UserDetail';
import EventDetail from 'src/components/EventDetail';

import Loading from 'src/components/Loading';

import './styles.scss';

// == Composant
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_HOME',
    });

    if (localStorage.getItem('token') !== null) {
      // console.log('connexté');
      dispatch({
        type: 'SAVE_USER',
      });
    }
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch({
      type: 'CLOSE_MENU',
    });
  }, [pathname]);

  const loading = useSelector((state) => state.loading);
  const logged = useSelector((state) => state.logged);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      {/* ----------- Header -------------- */}
      <Switch>
        <Route exact path="/">
          <Header />
          <CarouselComponent />
          <HomepageEvents />
          <HomepageArtists />
          <Footer />
        </Route>
        {logged && (
          <Route exact path="/artistes">
            <Header />
            <ArtistesPage />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/artistes" to="/connexion" />
        )}
        {logged && (
          <Route exact path="/artistes/:slug">
            <Header />
            <UserDetail />
            <Footer />
          </Route>
        )}
        {logged && (
          <Route exact path="/evenements">
            <Header />
            <EventsPage />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/evenements" to="/connexion" />
        )}
        {logged && (
          <Route exact path="/events/:slug">
            <Header />
            <EventDetail />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/events" to="/connexion" />
        )}
        {logged && (
          <Route exact path="/evenement/nouveau">
            <Header />
            <CreateEvent />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/evenement/nouveau" to="/connexion" />
        )}
        {logged && (
          <Route exact path="/organisateurs">
            <Header />
            <PromotersPage />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/organisateurs" to="/connexion" />
        )}
        {logged && (
          <Route exact path="/organisateurs/:slug">
            <Header />
            <UserDetail />
            <Footer />
          </Route>
        )}
        {logged && (
          <Route exact path="/profil">
            <Header />
            <Profile />
            <Footer />
          </Route>
        )}
        {!logged && (
          <Redirect from="/profil" to="/connexion" />
        )}
        <Route exact path="/connexion">
          <Header />
          <LoginForm />
        </Route>
        <Route exact path="/nouveau-compte">
          <Header />
          <Register />
          <Footer />
        </Route>
        {logged && (
          <Route exact path="/modifier-le-compte">
            <Header />
            <EditProfile />
          </Route>
        )}
        {!logged && (
          <Redirect from="/modifier-le-compte" to="/connexion" />
        )}
        <Route exact path="/faq">
          <Header />
          <Faq />
        </Route>
        <Route exact path="/deconnexion">
          <Redirect from="/deconnexion" to="/" />
        </Route>
        <Route>
          <Header />
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
