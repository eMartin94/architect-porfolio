import React from 'react';
import {} from 'react-icons';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineCopyright,
} from 'react-icons/ai';
import { footerText } from '../utils/constants';

const Footer = ({ lang }) => {
  let date = new Date();
  let year = date.getFullYear();

  const { textSocial, textCopyright } = footerText[lang];

  return (
    <div className='flex flex-col-reverse gap-4 w-full sm:flex-row justify-between items-center max-w-7xl p-5 transition-all duration-300 ease-in-out'>
      <div className='flex flex-col xs:flex-row gap-2 transition-all duration-800 ease-in-out justify-center items-center'>
        <p className='flex items-center gap-1 text-sm'>
          <span>
            <AiOutlineCopyright className='' />
          </span>
          Martin Pizango {year}
        </p>
        <span className=''>{textCopyright}</span>
      </div>
      <div className='flex flex-col md:flex-row gap-4 items-center'>
        <span className='text-sm'>{textSocial}: </span>
        <ul className='flex gap-4'>
          <li className='list-none'>
            <a href='#' className='text-primary text-xl hover:text-blue-700'>
              <AiFillFacebook />{' '}
            </a>
          </li>
          <li className='list-none'>
            <a href='#' className='text-primary text-xl hover:text-pink-700'>
              <AiFillInstagram />{' '}
            </a>
          </li>
          <li className='list-none'>
            <a href='#' className='text-primary text-xl hover:text-blue-400'>
              <AiFillTwitterCircle />{' '}
            </a>
          </li>
          <li className='list-none'>
            <a href='#' className='text-primary text-xl hover:text-blue-900'>
              <AiFillLinkedin />{' '}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
