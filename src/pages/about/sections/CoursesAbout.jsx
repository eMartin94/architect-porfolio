import React from 'react';
import { aboutText } from '../../../utils/constants';

const CoursesAbout = ({ lang }) => {
  const { subTitle2, courses } = aboutText[lang];
  return (
    <div>
      <h2>{subTitle2}</h2>
      <div>
        {courses.map((item, i) => (
          <div key={i}>
            <p>
              <b>{item.name}</b>
            </p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesAbout;
