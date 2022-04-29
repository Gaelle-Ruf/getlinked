/* eslint-disable spaced-comment */
/* eslint-disable no-plusplus */
// == Import

import Cards from 'src/components/Cards';
import { useSelector } from 'react-redux';

import './styles.scss';

// == Composant
const HomepageArtists = () => {
  const users = useSelector((state) => state.users);
  const artists = [];
  users.forEach((user) => {
    if (user.type === 'artiste') {
      artists.push(user);
    }
  });

  //TODO le random peut être deux fois le même
  // const bestArtists = [];
  // for (let index = 0; index < 4; index++) {
  //   const random = Math.floor(Math.random() * 4);
  //   bestArtists.push(artists[random])
  // }
  // console.log(bestArtists)
  const bestArtists = [];
  for (let index = 0; index < 4; index++) {
    bestArtists.push(artists[index]);
  }
  return (
    <div className="upcomming-events">
      <h1 className="upcomming-events__title">artistes du moment</h1>
      <div className="upcomming-events__content">
        {bestArtists.map((bestArtist) => (
          <Cards key={bestArtist.id} {...bestArtist} type="artiste" />
        ))}
      </div>
    </div>
  );
};

// == Export
export default HomepageArtists;
