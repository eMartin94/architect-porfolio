import React from 'react';
import { aboutText } from '../../../utils/constants';
import { AiOutlineDownload } from 'react-icons/ai';

const HeroAbout = ({ lang }) => {
  const { title, description, textButton } = aboutText[lang];
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>
          {textButton} <AiOutlineDownload />{' '}
        </button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HeroAbout;
