
import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactForm from './Components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>   
    <ContactForm></ContactForm>    
    <Projects></Projects>       
    <About></About>
    </main>
    </div>
  );
}

export default App;
