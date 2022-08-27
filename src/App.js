import React from 'react';
import About from './components/About';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import OffsetDiv from './components/OffsetDiv';


function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Carousel />
      <About />
      <Projects />
      <Footer />
      <Contact />
      < OffsetDiv/>
    </div>
  );
}

export default App;
