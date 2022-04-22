import React from 'react';
import './App.css';
import Navigation from './Sections/Navigation';
import Landing from './Sections/Landing';
// import Experience from './Sections/Experience';
// import Projects from './Sections/Projects';
// import Tools from './Sections/Tools';
// import Education from './Sections/Education';
// import Footer from './Sections/Footer';

function App() {
  return (
    <div id="app">
      <Navigation />
      <Landing />
      {/* <Experience />
      <Projects />
      <Tools />
      <Education />
      <Footer /> */}
    </div>
  );
}

export default App;