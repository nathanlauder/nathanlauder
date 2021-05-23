import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Tools from './Components/Tools';
import Education from './Components/Education';
import Footer from './Components/Footer';

function App() {
  return (
    <div id="app">
      <Navigation />
      <Landing />
      <Projects />
      <Tools />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
