import React from 'react';
import { lastProjects } from '../../../utils/constants';
import { SectionWrapper } from '../../../hoc';
import { styles } from '../../../styles/styles';

const LastWorks = ({ lang }) => {
  const { title, projects, textButton } = lastProjects[lang];
  return (
    <>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className={`${styles.subtitle}`}>{title}</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full h-full'>
          {projects.map((project, i) => (
            <div className='card' key={i}>
              <div className='wrapper bg-amber-300'>
                <img src={project.img} alt='Descripción de la imagen' />
                <div className='data'>
                  <div className='content'>
                    <h3 className='card-title'>{project.titleProject}</h3>
                    <p className='card-text'>{project.description}</p>
                    {/* <a href='#' className='card-btn'>
                      Read more
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button className={`${styles.button}`}>{textButton}</button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(LastWorks, '');
