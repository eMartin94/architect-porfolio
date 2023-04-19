import React, { useState } from 'react';
import {} from 'react-icons';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import { styles } from '../styles/styles';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = ({ lang, setLanguage }) => {
  const { links } = navLinks[lang];
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header
        className={`${styles.paddingX} flex relative w-full shadow-md py-4 justify-center`}
      >
        <div className='flex w-full max-w-7xl justify-between'>
          <h1 className='z-10'>milogo</h1>
          <div className='flex w-full justify-end gap-3'>
            <nav className='sm:flex hidden gap-4'>
              <ul className='flex gap-4'>
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'nav-item isActive opacity-100'
                          : 'nav-item opacity-50 hover:opacity-100'
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='flex justify-center items-center gap-3 z-10'>
              <button onClick={() => setLanguage(lang === 'en' ? 'es' : 'en')}>
                | {lang === 'en' ? 'Es' : 'En'}
              </button>
              <button className='flex sm:hidden' onClick={handleChange}>
                <AiOutlineMenu />
              </button>
            </div>
          </div>
        </div>
        <nav
          className={`${
            toggle ? 'translate-x-0' : '-translate-x-full'
          } absolute w-full h-screen top-0 flex sm:hidden gap-4 bg-alternative transition-all duration-800`}
        >
          <ul className='flex flex-col w-full gap-3 justify-center items-center'>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
