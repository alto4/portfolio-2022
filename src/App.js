import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

import axios from 'axios';

function App() {
  const getInquiries = async () => {
    const res = await axios.get('http://portfolio-api-ss1a.onrender.com/contact');

    // const res = await axios.get('https://portfolio-api-ss1a.onrender.com/contact');
    console.log('res => ', res);
  };

  getInquiries();

  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
