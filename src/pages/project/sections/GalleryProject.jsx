import React from 'react';
import { projectText } from '../../../utils/constants';

const GalleryProject = ({ lang }) => {
  const { projects } = projectText[lang];
  return (
    <div>
      {projects.map((item, i) => (
        <div key={i}>
          <figure>
            <img
              src={item.img}
              alt={item.description}
              width={300}
              height={300}
            />
            <figcaption>
              <div>
                <p>
                  <b>{item.description}</b>
                </p>
                <div>
                  <p>{item.type}</p>
                  <p>{item.location}</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default GalleryProject;
