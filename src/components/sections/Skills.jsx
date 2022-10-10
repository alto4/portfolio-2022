import React from 'react';

const Skills = () => {
  // TODO: Add digital resume section below
  let showResume = false;

  return (
    <>
      <section className='row skills'>
        <h2>Skills</h2>
        <div>
          <span className='separator'>*</span>
          <span className='sub'>Front End</span>
          <div className='skills-container'>
            <div className='skill'>
              <i class='devicon-javascript-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-css3-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-html5-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-react-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-redux-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-bootstrap-plain' />
            </div>
          </div>
          <span className='separator'>*</span>
          <span className='sub'>Back End & Database</span>
          <div className='skills-container'>
            <div className='skill'>
              <i class='devicon-python-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-django-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-nodejs-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-express-original' />
            </div>
            <div className='skill'>
              <i class='devicon-postgresql-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-mongodb-plain' />
            </div>
          </div>
          {/* <span className='separator'>*</span>
            <span className='sub'>Database</span>
            <div className='skills-container'>
              <div className='skill'>
                <i class='devicon-postgresql-plain' />
              </div>
              <div className='skill'>
                <i class='devicon-mongodb-plain' />
              </div>
              <div className='skill'>
                <i class='devicon-redis-plain' />
              </div>
            </div> */}
          <span className='separator'>*</span>
          <span className='sub'>Tools</span>
          <div className='skills-container'>
            <div className='skill'>
              <i class='devicon-figma-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-vscode-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-amazonwebservices-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-git-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-gitlab-plain' />
            </div>
            <div className='skill'>
              <i class='devicon-github-plain' />
            </div>
          </div>
        </div>
      </section>
      {showResume && (
        <>
          <section className='row'>
            <h2>Work</h2>
            <ul>
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Programming Education</li>
            </ul>
          </section>

          <section className='row'>
            <h2>Education</h2>
            <ul>
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Programming Education</li>
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default Skills;
