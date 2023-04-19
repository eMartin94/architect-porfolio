import React from 'react';
import { homeText } from '../../../utils/constants';
// import { photo } from '../assets';

const HeroHome = ({ lang }) => {
  const { description, quote, author, img, textButton } = homeText[lang];
  return (
    <div>
      <h1>carla melany</h1>
      <img src={img} alt={description} width={200} height={200} />
      <p>{description}</p>
      <p>
        <span>{quote}</span> - {author}
      </p>
    </div>
  );
};

export default HeroHome;
