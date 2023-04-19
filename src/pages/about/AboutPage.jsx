import React from 'react';
import HeroAbout from './sections/HeroAbout';
import SkillsAbout from './sections/SkillsAbout';
import CoursesAbout from './sections/CoursesAbout';
// import { SectionWrapper } from '../../hoc';

const AboutPage = ({ lang }) => {
  return (
    <div>
      <HeroAbout lang={lang} />
      <SkillsAbout lang={lang} />
      <CoursesAbout lang={lang} />
    </div>
  );
};

export default AboutPage;
// export default SectionWrapper(AboutPage, '');
