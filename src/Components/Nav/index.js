import React, { useState } from 'react';

function Nav(props) {
    const {
        
        contactSelected,
        setContactSelected
      } = props;

  
    return (
    <header className="flex-row px-1">
        <h2>
            <a href="/">
                <span role="img" aria-label="icon">  </span> Welcome to my Page! 
            </a>
        </h2>
        <nav> 
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false)}>
                         About Me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}>Contact Me </span>
                       
                </li>
                <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(false)}> My Projects </span>
                </li>
                <li>
                    <span onClick={() => setContactSelected(false)}> Resume </span>
                </li>
            </ul>
        </nav>
    </header>
    );

}


export default Nav;