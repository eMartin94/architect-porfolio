import React from 'react';
import { aboutText } from '../../../utils/constants';

const SkillsAbout = ({ lang }) => {
  const { subTitle1, skills } = aboutText[lang];
  return (
    <div>
      <h2>{subTitle1}</h2>
      <div>
        {skills.map((item, i) => (
          <div key={i}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAbout;
