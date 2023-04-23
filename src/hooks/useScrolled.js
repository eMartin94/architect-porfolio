import { useState, useEffect } from 'react';

const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTopY = window.scrollY;
      scrollTopY > 100 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
};

export { useScrolled };
