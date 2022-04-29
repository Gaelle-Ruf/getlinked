/* eslint-disable no-plusplus */
// == Import

import { useSelector } from 'react-redux';
import Cards from 'src/components/Cards';

import './styles.scss';

// == Composant
const HomepageEvents = () => {
  const events = useSelector((state) => state.events);
  const bestEvents = [];
  for (let index = 0; index < 4; index++) {
    bestEvents.push(events[index]);
  }
  return (
    <div className="upcomming-events">
      <h1 className="upcomming-events__title">événements à venir</h1>
      <div className="upcomming-events__content">
        {bestEvents.map((bestEvent) => (
          <Cards key={bestEvent.id} {...bestEvent} type="event" />
        ))}
      </div>
    </div>
  );
};

// == Export
export default HomepageEvents;
