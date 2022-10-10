import React from 'react';
import projectImage from '../../assets/images/project-placeholder.jpg';

const Projects = () => {
  return (
    <section className='row projects'>
      <div className='project-card'>
        <img className='project-img' src={projectImage} alt='project' />
        <h3>Music Recorder</h3>
        <div className='project-attributes'>
          <span>Web Design</span>
          <span className='separator'>&#10033;</span>
          <span>Development</span>
        </div>
      </div>
      <div className='project-card'>
        <img className='project-img' src={projectImage} alt='project' />
        <h3>Music Recorder</h3>
        <div className='project-attributes'>
          <span>Web Design</span>
          <span className='separator'>&#10033;</span>
          <span>Development</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
