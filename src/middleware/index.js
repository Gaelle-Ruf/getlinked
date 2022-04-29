import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-95-157-245.compute-1.amazonaws.com/',
});

const APIMiddleware = (store) => (next) => (action) => {
  if (action.type === 'FETCH_ARTISTS') {
    api.get('/api/v1/users/')
      .then((response) => {
        const users = response.data;
        store.dispatch({
          type: 'LOAD_USERS',
          users: users,
        });
      });
  }
  else if (action.type === 'FETCH_HOME') {
    const artistsList = axios.get('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/users/');
    const eventsList = axios.get('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/events/');
    const stylesList = axios.get('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/styles/');
    const categoriesList = axios.get('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/categories/');
    Promise.all([artistsList, eventsList, stylesList, categoriesList])
      .then((responses) => {
        const artistList = responses[0].data;
        const eventList = responses[1].data;
        const styleList = responses[2].data;
        const categoryList = responses[3].data;

        store.dispatch({
          type: 'LOAD_HOME_DATA',
          events: eventList,
          users: artistList,
          styles: styleList,
          categories: categoryList,
        });
      });
  }
  else if (action.type === 'FETCH_EVENTS') {
    axios.get('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/events/')
      .then((response) => {
        store.dispatch({
          type: 'LOAD_EVENTS',
          events: response.data,
        });
      });
  }
  else if (action.type === 'NEW_EVENTS') {
    const state = store.getState();
    axios.post('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/events/', {
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
    })
      .then(() => {
        window.scroll(0, 0);
        window.location.reload();
      });
  }
  else if (action.type === 'NEW_USER') {
    const state = store.getState();
    axios.post('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/v1/users/', {
      type: state.createProfil.type,
      name: state.createProfil.name,
      firstname: state.createProfil.firstname,
      lastname: state.createProfil.lastname,
      email: state.createProfil.email,
      password: state.createProfil.password,
      description: state.createProfil.description,
      nb_members: state.createProfil.nb_members,
      address: state.createProfil.address,
      website: state.createProfil.website,
      facebook: state.createProfil.facebook,
      instagram: state.createProfil.instagram,
      twitter: state.createProfil.twitter,
      picture: state.createProfil.picture,
      user_style: state.createProfil.user_style,
      user_category: state.createProfil.user_category,
      slug: state.createProfil.slug,
    })
      .then(() => {
        window.scroll(0, 0);
        window.location = '/connexion';
      });
  }
  else if (action.type === 'LOGIN') {
    const state = store.getState();
    const token = null;
    axios.post('http://ec2-3-95-157-245.compute-1.amazonaws.com/api/login_check', {
      username: state.connectedUser.email,
      password: state.connectedUser.password,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // console.log(response);
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        store.dispatch({
          type: 'SAVE_USER',
        });
        // console.log(response);
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('style', response.data.style.name);
        localStorage.setItem('type', response.data.data.type);
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('firstname', response.data.data.firstname);
        localStorage.setItem('lastname', response.data.data.lastname);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('description', response.data.data.description);
        localStorage.setItem('nbMembers', response.data.data.nbMembers);
        localStorage.setItem('address', response.data.data.address);
        localStorage.setItem('website', response.data.data.website);
        localStorage.setItem('facebook', response.data.data.facebook);
        localStorage.setItem('instagram', response.data.data.instagram);
        localStorage.setItem('twitter', response.data.data.twitter);
        localStorage.setItem('picture', response.data.data.picture);
        localStorage.setItem('slug', response.data.data.slug);

        window.scroll(0, 0);
        window.location = '/';
      })
      .catch(() => {
        // console.error(error);
        alert('Authentification échouée');
      });
  }
  else if (action.type === 'LOGOUT') {
    localStorage.clear();
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
