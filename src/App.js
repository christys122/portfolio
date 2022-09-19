
import React, { useState } from 'react';
import NavTabs from './Components/Nav/NavTabs';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Projects from './Components/Projects';
import ContactForm from './Components/Contact';
import Resume from './Components/Resume';
import Home from './Components/Home';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [contactSelected, setContactSelected] = useState(false);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <ContactForm />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>



  );
}





      {/* <Nav
      
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>   
        {!contactSelected ? (
          <>
          <About></About>
               
          </>
        ) : (
          <ContactForm></ContactForm>
        )}

        {!contactSelected && !AboutSelected ? (
         <>
          <Projects></Projects>
          </>
        ) : (
        <About></About>
        )}

    </main>
    </div>
  );
} */}

export default App;
