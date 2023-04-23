import React from 'react';
import { aboutText } from '../../../utils/constants';
import { styles } from '../../../styles/styles';
import { SectionWrapper } from '../../../hoc';

const CoursesAbout = ({ lang }) => {
  const { subTitle2, courses } = aboutText[lang];
  return (
    <>
      <h2 className={`${styles.subtitle} mb-10`}>{subTitle2}</h2>
      <div className='grid grid-cols-1 w-full gap-4 place-items-center'>
        {courses.map((item, i) => (
          <div
            key={i}
            className='grid grid-cols-2 gap-5 border-b-2 w-full py-2'
          >
            <span className='text-end pr-5'>
              <b>{item.name}</b>
            </span>
            <span className='pl-5'>{item.date}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CoursesAbout, '');
