/* eslint-disable no-plusplus */
// == Import

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import LittleCard from 'src/components/LittleCard';

import './styles.scss';

// == Composant
const EventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const styles = useSelector((state) => state.styles);
  const userType = localStorage.getItem('type');

  const betterRatedEvents = [];
  for (let index = 0; index < 3; index++) {
    betterRatedEvents.push(events[index]);
  }

  // Change Field Function
  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_FILTER_EVENTS',
      value: value,
      key: key,
    });
  };

  // Filter Handler :
  const handleSearchBar = (evt) => {
    changeField(evt.target.value.toLowerCase(), 'search');
  };
  const handleLocation = (evt) => {
    changeField(evt.target.value.toLowerCase(), 'location');
  };
  const handleStyle = (evt) => {
    changeField(evt.target.value, 'style');
  };

  // Search Bar :
  const searchBarValue = useSelector((state) => state.eventsPageFilters.search);
  const searchLocationValue = useSelector((state) => state.eventsPageFilters.location);
  const newValue = [];
  events.forEach((user) => {
    if (user.name.toLowerCase().includes(searchBarValue)) {
      newValue.push(user);
    }
  });

  // Location :
  const eventsAfterLocation = [];
  newValue.forEach((user) => {
    if (user.address.toLowerCase().includes(searchLocationValue)) {
      eventsAfterLocation.push(user);
    }
  });

  function paginator(items, currentPage, perPageItems) {
    const page = currentPage || 1;
    const perPage = perPageItems || 10;
    const offset = (page - 1) * perPage;
    const paginatedItems = items.slice(offset).slice(0, perPageItems);
    const totalPages = Math.ceil(items.length / perPage);
    return {
      page: page,
      perPage: perPage,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (totalPages > page) ? page + 1 : null,
      total: items.length,
      totalPages: totalPages,
      data: paginatedItems,
    };
  }
  const eventsPage = useSelector((state) => state.eventsPage);
  const handleNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'INCREASE_EVENTS_PAGE_NUMBER',
    });
  };
  const handlePrevPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DECREASE_EVENTS_PAGE_NUMBER',
    });
  };
  const pagination = paginator(eventsAfterLocation, eventsPage, 6);
  const numberOfPages = pagination.totalPages;
  const eventsToDisplay = pagination.data;

  return (
    <div className="events-page">
      <div className="events-page__best">
        <h1 className="events-page__best__title">événements du moment</h1>
        <div className="events-page__best__container">
          {betterRatedEvents.map((event) => (
            <LittleCard key={event.id} {...event} type="event" />
          ))}
        </div>
      </div>
      {userType === 'organisateur' && (
        <div className="events-page__button-container">
          <Link to="/evenement/nouveau">
            <button type="button" className="events-page__button-container__submit">Créer un événement</button>
          </Link>
        </div>
      )}
      <form method="get" className="events-page__from">
        <h1 className="events-page__from__title">Affiner votre recherche</h1>
        <input type="text" name="eventsPageSearch" id="eventsPageSearch" placeholder="Rechercher" className="events-page__from__input--search" onChange={handleSearchBar} />
        <div className="events-page__from__bottom">
          <select name="eventsPageSelectStyle" id="eventsPageSelectStyle" className="events-page__from__input" onChange={handleStyle}>
            <option value="">-- Choisir un style --</option>
            {styles.map((style) => (
              <option value={style.name} key={style.name}>{style.name}</option>
            ))}
          </select>
          <input type="text" name="eventsPageLocation" id="eventsPageLocation" placeholder="Localisation (ville)" className="events-page__from__input" onChange={handleLocation} />
        </div>
      </form>
      <div className="events-page__list">
        <div className="events-page__list__container">
          {eventsToDisplay.map((artist) => (
            <LittleCard key={artist.id} {...artist} type="event" />
          ))}
        </div>
        <div className="events-page__list__nav">
          {eventsPage > 1 && <a href="#" onClick={handlePrevPage}>prev</a>}
          <p>{eventsPage}/{numberOfPages}</p>
          {numberOfPages > eventsPage && <a href="#" onClick={handleNextPage}>next</a>}
        </div>
      </div>
    </div>
  );
};

// == Export
export default EventsPage;
