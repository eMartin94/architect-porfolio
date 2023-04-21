import React from 'react';
import { styles } from '../styles/styles';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <section className={`${styles.padding} max-w-7xl mx-auto`}>
        <span className='block' id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </section>
    );
  };

export default SectionWrapper;
