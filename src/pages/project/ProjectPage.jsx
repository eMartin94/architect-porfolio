import React from 'react';
import HeroProject from './sections/HeroProject';
import GalleryProject from './sections/GalleryProject';

const ProjectPage = ({ lang }) => {
  return (
    <div id='project'>
      <HeroProject lang={lang} />
      <GalleryProject lang={lang} />
    </div>
  );
};

export default ProjectPage;
