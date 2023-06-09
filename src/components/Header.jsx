import React, { useState } from 'react';
import {} from 'react-icons';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import { useScrolled } from '../hooks/useScrolled';

const Header = ({ lang, setLanguage }) => {
  const { links } = navLinks[lang];
  const [toggle, setToggle] = useState(false);
  const scrolled = useScrolled();

  const handleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header
        className={`${
          scrolled ? 'bg-white bg-opacity-95 shadow-md' : 'bg-transparent'
        } flex fixed top-0 w-full px-4 md:px-12 py-4 justify-center transition-all duration-500 items-center`}
      >
        <div className='flex w-full max-w-7xl justify-between'>
          <h1 className='z-10 pt-1'>
            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
              <b>carlaMe_</b>
            </Link>
          </h1>
          <div className='flex w-full justify-end gap-3'>
            <nav className='sm:flex hidden gap-4'>
              <ul className='flex gap-4'>
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'nav-list_item isActive opacity-100'
                          : 'nav-list_item opacity-70 hover:opacity-100'
                      }
                      onClick={() => window.scrollTo(0, 0)}
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
              <div className='btn-menu' onClick={handleChange}>
                <div
                  className={`${
                    toggle ? 'menu-icon isActive' : 'menu-icon'
                  } menu-icon flex sm:hidden`}
                >
                  <span className='menu-icon__line menu-icon__line-left'></span>
                  <span className='menu-icon__line'></span>
                  <span className='menu-icon__line menu-icon__line-right'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${toggle ? 'backg isActive' : 'backg'} sm:hidden`}
        ></div>
        <nav
          className={`${
            toggle
              ? 'translate-x-0 scale-100'
              : 'translate-x-full -translate-y-full -scale-50'
          } nav absolute w-full h-screen top-0 flex sm:hidden gap-4 transition-all duration-500 ease-in-out`}
        >
          <ul className='flex flex-col w-full gap-3 justify-center items-center'>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-list_item isActive opacity-100 text-2xl'
                      : 'nav-list_item opacity-70 hover:opacity-100 text-2xl'
                  }
                  onClick={() => {
                    setToggle(false), window.scrollTo(0, 0);
                  }}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
