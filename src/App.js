import './App.css';
import projectImage from './assets/images/project-placeholder.jpg';

function App() {
  const showResume = false;
  return (
    <>
      <nav className='navbar'>
        <div>
          <span className='logo'>*S/A*</span>
        </div>
        <ul className='nav-links'>
          <li className='nav-link'>Projects</li>
          <li className='nav-link'>About</li>
          <li className='nav-link'>Contact</li>
        </ul>
      </nav>
      <div className='container'>
        <section className='row hero'>
          <h1 className='hero-title'>Scott Alton</h1>
          <p className='hero-subtext'>
            I'm a full-stack developer from the Greater Toronto Area specializing in interactive, data-driven UIs that
            provide an engaging user experience.
          </p>
        </section>
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
        <section className='row about'>
          <h2>About Me</h2>
          <div>
            <p>
              <span className='separator'>*</span>
              <span className='sub'>Overview</span>
              I'm a web developer, musician, and teacher from Whitby, Ontario CA. I've been coding for about 3 years and
              3 months and currently work as a full-stack developer at Trellis.
            </p>
            <p>
              <span className='separator'>*</span>
              <span className='sub'>Work</span>I mainly focus on building UIs these days and write a ton JavaScript,
              HTML, CSS, and React. I also regularly work with Python, Django, Node and Express and am increasingly
              interested in UI/UX design.
            </p>
            <p>
              <span className='separator'>*</span>
              <span className='sub'>Miscellaneous</span>
              When I'm not writing code, I enjoy playing guitar, cooking, reading and spending time with my family.
              Before I became a developer I worked as a musician, private music instructor and cook, and I continue to
              cultivate these passions in my spare time.
            </p>
          </div>
        </section>
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
        <section className='row contact'>
          <h2>Contact</h2>
          <div>
            <span className='separator'>*</span>
            <span className='sub'>Feel free to reach out using the form below.</span>
            <form>
              <ul>
                <li>
                  <label for='name'>Name:</label>
                  <input type='text' id='name' name='name' />
                </li>
                <li>
                  <label for='email'>Email:</label>
                  <input type='email' id='email' name='email' />
                </li>
                <li>
                  <label for='messgae'>Message:</label>
                  <textarea id='message' name='message' />
                </li>
              </ul>
              <button>Send</button>
            </form>
          </div>
        </section>
      </div>
      <footer>
        <p>&copy; 2022 Scott Alton Technology</p>
      </footer>
    </>
  );
}

export default App;
