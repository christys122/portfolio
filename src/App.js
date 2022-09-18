
import React, { useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactForm from './Components/Contact';



function App() {
  
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>   
        {!contactSelected ? (
          <>
          <Projects></Projects>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

    </main>
    </div>
  );
}

export default App;
