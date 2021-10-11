/* eslint-disable no-plusplus */
// == Import

import LittleCard from 'src/components/LittleCard';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

// == Composant
const PromotersPage = () => {
  const dispatch = useDispatch();
  const styles = useSelector((state) => state.styles);
  const users = useSelector((state) => state.users);

  const promoters = [];
  users.forEach((user) => {
    if (user.type === 'organisateur') {
      promoters.push(user);
    }
  });

  const betterRatedPromoter = [];
  for (let index = 0; index < 3; index++) {
    betterRatedPromoter.push(promoters[index]);
  }

  // Change Field Function
  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_FILTER_PROMOTERS',
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
  const searchBarValue = useSelector((state) => state.promotersPageFilters.search);
  const searchLocationValue = useSelector((state) => state.promotersPageFilters.location);
  const newValue = [];
  promoters.forEach((user) => {
    if (user.name.toLowerCase().includes(searchBarValue)) {
      newValue.push(user);
    }
  });

  // Location :
  const promotersAfterLocation = [];
  newValue.forEach((user) => {
    if (user.address.toLowerCase().includes(searchLocationValue)) {
      promotersAfterLocation.push(user);
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
  const promotersPage = useSelector((state) => state.promotersPage);
  const handleNextPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'INCREASE_PROMOTERS_PAGE_NUMBER',
    });
  };
  const handlePrevPage = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DECREASE_PROMOTERS_PAGE_NUMBER',
    });
  };
  const pagination = paginator(promotersAfterLocation, promotersPage, 6);
  const numberOfPages = pagination.totalPages;
  const promotersToDisplay = pagination.data;

  return (
    <div className="promoters-page">
      <div className="promoters-page__best">
        <h1 className="promoters-page__best__title">Les mieux notés</h1>
        <div className="promoters-page__best__container">
          {betterRatedPromoter.map((promoter) => (
            <LittleCard key={promoter.id} {...promoter} />
          ))}
        </div>
      </div>
      <form method="get" className="promoters-page__from">
        <h1 className="promoters-page__from__title">Affiner votre recherche</h1>
        <input type="text" name="promotersPageSearch" id="promotersPageSearch" placeholder="Rechercher" className="promoters-page__from__input--search" onChange={handleSearchBar} />
        <div className="promoters-page__from__bottom">
          <select name="promotersPageSelectStyle" id="promotersPageSelectStyle" className="promoters-page__from__input" onChange={handleStyle}>
            <option value="">-- Choisir un style --</option>
            {styles.map((style) => (
              <option value={style.name} key={style.name}>{style.name}</option>
            ))}
          </select>
          <input type="text" name="promotersPageLocation" id="promotersPageLocation" placeholder="Localisation (ville)" className="promoters-page__from__input" onChange={handleLocation} />
        </div>
      </form>
      <div className="promoters-page__list">
        <div className="promoters-page__list__container">
          {promotersToDisplay.map((promoter) => (
            <LittleCard key={promoter.id} {...promoter} />
          ))}
        </div>
        <div className="promoters-page__list__nav">
          {promotersPage > 1 && <a href="#" onClick={handlePrevPage}>prev</a>}
          <p>{promotersPage}/{numberOfPages}</p>
          {numberOfPages > promotersPage && <a href="#" onClick={handleNextPage}>next</a>}
        </div>
      </div>
    </div>
  );
};

// == Export
export default PromotersPage;
