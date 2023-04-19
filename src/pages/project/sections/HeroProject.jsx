import React from 'react';
import { projectText } from '../../../utils/constants';

const HeroProject = ({ lang }) => {
  const { title, description } = projectText[lang];
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <span>-</span>
      </div>
    </div>
  );
};

export default HeroProject;
