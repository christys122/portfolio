
import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects'


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>   
    <Projects></Projects>       
    <About></About>
    </main>
    </div>
  );
}

export default App;
