import React from 'react';
import HeroHome from './sections/HeroHome';
import LastWorks from './sections/LastWorks';

const HomePage = ({ lang }) => {
  return (
    <div className=''>
      <HeroHome lang={lang} />
      <LastWorks lang={lang} />
    </div>
  );
};

export default HomePage;
