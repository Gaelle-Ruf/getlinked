import axios from 'axios';

const APIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'FETCH_ARTISTS') {
    axios.get('http://ec2-107-23-250-100.compute-1.amazonaws.com/api/v1/users/')
      .then((response) => {
        const users = response.data;
        store.dispatch({
          type: 'LOAD_USERS',
          users: users,
        });
      });
  }
  else if (action.type === 'FETCH_HOME') {
    const artistsList = axios.get('http://ec2-107-23-250-100.compute-1.amazonaws.com/api/v1/users/');
    const eventsList = axios.get('http://ec2-107-23-250-100.compute-1.amazonaws.com/api/v1/events/');
    Promise.all([artistsList, eventsList])
      .then((responses) => {
        const artistList = responses[0].data;
        const eventList = responses[1].data;

        store.dispatch({
          type: 'LOAD_HOME_DATA',
          events: eventList,
          users: artistList,
        });
      });
  }
  else if (action.type === 'FETCH_EVENTS') {
    axios.get('http://ec2-107-23-250-100.compute-1.amazonaws.com/api/v1/events/')
      .then((response) => {
        store.dispatch({
          type: 'LOAD_EVENTS',
          events: response.data,
        });
      });
  }
  else if (action.type === 'LOGIN') {
    const state = store.getState();
    console.log(state.createEvent);
    axios.post('http://ec2-107-23-250-100.compute-1.amazonaws.com/api/v1/events/', {
      address: state.createEvent.address,
      date: state.createEvent.date,
      description: state.createEvent.description,
      duration: state.createEvent.duration,
      email: state.createEvent.email,
      name: state.createEvent.name,
      picture: state.createEvent.picture,
      price: state.createEvent.price,
      slug: state.createEvent.slug,
      user: 1,
    });
  }
  else if (action.type === 'INCREASE_ARTIST_PAGE_NUMBER') {
    store.dispatch({
      type: 'INCREASE_ARTIST_PAGE',
    });
  }
  else if (action.type === 'DECREASE_ARTIST_PAGE_NUMBER') {
    store.dispatch({
      type: 'DECREASE_ARTIST_PAGE',
    });
  }
  else if (action.type === 'INCREASE_EVENTS_PAGE_NUMBER') {
    store.dispatch({
      type: 'INCREASE_EVENTS_PAGE',
    });
  }
  else if (action.type === 'DECREASE_EVENTS_PAGE_NUMBER') {
    store.dispatch({
      type: 'DECREASE_EVENTS_PAGE',
    });
  }
  else if (action.type === 'INCREASE_PROMOTERS_PAGE_NUMBER') {
    store.dispatch({
      type: 'INCREASE_PROMOTERS_PAGE',
    });
  }
  else if (action.type === 'DECREASE_PROMOTERS_PAGE_NUMBER') {
    store.dispatch({
      type: 'DECREASE_PROMOTERS_PAGE',
    });
  }
  next(action);
};

export default APIMiddleware;
