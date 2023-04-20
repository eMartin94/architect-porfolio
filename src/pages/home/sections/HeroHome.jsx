import React from 'react';
import { homeText } from '../../../utils/constants';
import { styles } from '../../../styles/styles';
// import { photo } from '../assets';

const HeroHome = ({ lang }) => {
  const { description, quote, author, img, textButton } = homeText[lang];
  return (
    <div className='flex flex-col justify-center bg-gradient-hero-dark bg-cover bg-fixed h-screen items-center'>
      <div className='flex flex-col md:flex-row gap-4 w-full max-w-7xl justify-center items-center px-10'>
        <div className='md:text-left text-center'>
          <h1
            className={`title text-[100px] md:-mt-16 font-bold uppercase leading-[100px]`}
          >
            carla melany
          </h1>
          <p className='text-3xl pl-2 mt-5 md:mt-2'>{description}</p>
          <p className='w-full md:w-[60%] mt-10 pl-2'>
            <span>{quote}</span> - {author}
          </p>
        </div>
        <div className='photo hidden sm:flex w-[200px] md:w-[450px] bg-secondary justify-center items-center overflow-hidden'>
          <img src={img} alt={description} className='w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
