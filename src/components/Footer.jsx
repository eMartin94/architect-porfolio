import React from 'react';
import {} from 'react-icons';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
      <p>® Martin Pizango</p>
      <ul>
        <li>
          <a href='#'>
            <AiFillFacebook />{' '}
          </a>
        </li>
        <li>
          <a href='#'>
            <AiFillInstagram />{' '}
          </a>
        </li>
        <li>
          <a href='#'>
            <AiFillTwitterCircle />{' '}
          </a>
        </li>
        <li>
          <a href='#'>
            <AiFillLinkedin />{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
