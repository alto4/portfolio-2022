import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import ProjectsList from './components/sections/projects/ProjectsList'
import Skills from './components/sections/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
       <ProjectsList />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
