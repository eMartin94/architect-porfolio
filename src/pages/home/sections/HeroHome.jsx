import React, { useEffect, useRef } from 'react';
import { homeText } from '../../../utils/constants';
import { styles } from '../../../styles/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroHome = ({ lang }) => {
  const { description, quote, author, img, textButton } = homeText[lang];
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: false,
          start: 'top top',
          end: '+=300%',
          scrub: true,
        },
        defaults: {
          ease: 'none',
        },
      })
      .to(
        '.section-hero',
        {
          delay: 0.3,
          // backgroundColor: '#ffffff',
        },
        'start'
      )
      .to(
        '.upper-container .box-description',
        {
          scale: 3,
        },
        'start'
      )
      .to(
        '.upper-container .box-description',
        {
          opacity: 0,
        },
        'start'
      )
      .to(
        '.upper-container h1',
        {
          scale: 3,
        },
        'start'
      )
      .to(
        '.upper-container h1',
        {
          opacity: 0,
        },
        'start'
      )
      .to(
        '.lower-container',
        {
          delay: 0.1,
          scale: 3,
        },
        'start'
      )
      .to(
        '.lower-container',
        {
          delay: 0,
          opacity: 1,
        },
        'start'
      );
  }, []);

  return (
    <section className='section-hero'>
      <header>
        <div className='upper-container'>
          <h1 className=' text-[100px] xs:text-[150px] sm:text-[200px] md:text-[250px] lg:text-[320px] xl:text-[450px] drop-shadow-[4px_4px_0_#b0edcc]  md:drop-shadow-[8px_8px_0_#b0edcc]'>
            carla
          </h1>
          <p className='box-description text-[14px] xs:text-[18px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px] mt-5'>
            {description}
          </p>
        </div>
        <div className='transition' ref={triggerRef}>
          <div className='lower-container'>
            <div className='box-quote flex justify-center '>
              <p className='flex flex-wrap w-1/3 text-[8px] xs:text[10px] text-center px-4'>
                {quote}
              </p>
            </div>
            <div className='box-author p-10 sm:p-4'>
              {' '}
              <span className='text-[8px] text-center'>{author}</span>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeroHome;
