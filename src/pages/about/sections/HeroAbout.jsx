import React from 'react';
import { aboutText } from '../../../utils/constants';
import { AiOutlineDownload } from 'react-icons/ai';
import { styles } from '../../../styles/styles';

const HeroAbout = ({ lang }) => {
  const { title, description, textButton, img } = aboutText[lang];
  return (
    <section
      className={`${styles.padding} bg-gradient-hero h-screen flex justify-center`}
    >
      <div
        className={`${styles.paddingX} flex md:flex-row flex-col gap-4 items-center h-full justify-center`}
      >
        <h1 className={`${styles.title} mb-5`}>{title}</h1>
        <div className='flex lg:flex-row gap-4 flex-col-reverse items-center'>
          <div className='flex flex-col w-full lg:w-[60%] gap-4 justify-center items-start px-4'>
            <p className='mb-5'>{description}</p>
            <button className={`${styles.button}`}>
              {textButton} <AiOutlineDownload />{' '}
            </button>
          </div>
          <div className='hidden md:flex justify-center w-[40%] mt-10'>
            <img src={img} alt='photo' width={300} className='blocks-shadow' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
