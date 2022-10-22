import React from 'react';

const About = () => {
  return (
    <section className='row about' id='about'>
      <h2>About Me</h2>
      <div>
        <p>
          <span className='separator'>*</span>
          <span className='sub'>Overview</span>
          I'm a web developer, musician, and teacher from Whitby, Ontario CA. I've been coding for about 3 years and 3
          months and currently work as a full-stack developer at Trellis.
        </p>
        <p>
          <span className='separator'>*</span>
          <span className='sub'>Work</span>I mainly focus on building UIs these days and write a ton JavaScript, HTML,
          CSS, and React. I also regularly work with Python, Django, Node and Express and am increasingly interested in
          UI/UX design.
        </p>
        <p>
          <span className='separator'>*</span>
          <span className='sub'>Miscellaneous</span>
          When I'm not writing code, I enjoy playing guitar, cooking, reading and spending time with my family. Before I
          became a developer I worked as a musician, private music instructor and cook, and I continue to cultivate
          these passions in my spare time.
        </p>
      </div>
    </section>
  );
};

export default About;
