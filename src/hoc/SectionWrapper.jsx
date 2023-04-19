import React from 'react';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <section className='max-w-7xl mx-auto relative z-0'>
        <span className='mt-[100px] pb-14 block' id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </section>
    );
  };

export default SectionWrapper;
