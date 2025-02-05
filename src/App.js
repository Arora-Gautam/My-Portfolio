import React from 'react';
import About from './components/about/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import './style.css'; // Importing your global styles

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
