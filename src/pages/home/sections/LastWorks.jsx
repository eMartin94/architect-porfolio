import React from 'react';
import {} from '../../../assets';
import { lastProjects } from '../../../utils/constants';

const LastWorks = ({ lang }) => {
  const { title, projects, textButton } = lastProjects[lang];
  // console.log(projects);
  return (
    <div>
      <h2>{title}</h2>
      {projects.map((project, i) => (
        <div key={i}>
          <h3>{project.titleProject}</h3>
          <p>{project.description}</p>
          <img
            src={project.img}
            alt={project.titleProject}
            width={200}
            height={200}
          />
        </div>
      ))}
      <button>{textButton}</button>
    </div>
  );
};

export default LastWorks;
