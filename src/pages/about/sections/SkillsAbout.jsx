import React from 'react';
import { aboutText } from '../../../utils/constants';
import { SectionWrapper } from '../../../hoc';
import { styles } from '../../../styles/styles';

const SkillsAbout = ({ lang }) => {
  const { subTitle1, skills } = aboutText[lang];
  return (
    <>
      <h2 className={`${styles.subtitle} mb-10`}>{subTitle1}</h2>
      <div className='flex flex-wrap gap-5 justify-center'>
        {skills.map((item, i) => (
          <div
            key={i}
            className='grid grid-cols-3 xs:grid-cols-4 justify-center items-center gap-4 bg-alternative bg-opacity-20 w-full max-w-[450px] px-4 py-2 capitalize font-bold shadow-[4px_4px_0px_rgba(21,20,27,0.25)]'
          >
            <span className=''>{item.name}:</span>
            <progress
              className='col-span-2 xs:col-span-3 w-full rounded-lg'
              value={item.value}
              aria-valuenow={item.value}
              max='100'
            ></progress>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillsAbout, '');
