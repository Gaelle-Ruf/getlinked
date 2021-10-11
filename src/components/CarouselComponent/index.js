/* eslint-disable react/jsx-boolean-value */

import './styles.scss';

import { Carousel } from 'react-carousel-minimal';

import first from './images/first.jpg';
import second from './images/second.jpg';
import third from './images/third.jpg';
import fourth from './images/fourth.jpg';

const CarouselComponent = () => {
  const data = [
    {
      image: first,
      caption: `<div>
                  <h1 class='carousel__title'>GetLinked</h1>
                  <p class='carousel__description'>Recréez le lien</p>
                  <p class='carousel__description'>et bien plus encore</p>
                </div>`,
    },
    {
      image: second,
      caption: 'autre titre ?',
    },
    {
      image: third,
      caption: 'encore un autre ?',
    },
    {
      image: fourth,
      caption: 'raph on t\'aime',
    },
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  return (
    <Carousel
      data={data}
      time={4000}
      width="100vw"
      height="500px"
      captionStyle={captionStyle}
      radius="0"
      z-index="1"
      captionPosition="center"
      automatic={true}
      dots={true}
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      style={{
        textAlign: 'center',
        margin: '0 auto',
        padding: '0 0rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
};

export default CarouselComponent;
