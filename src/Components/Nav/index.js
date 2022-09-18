import React, { useState } from 'react';

function Nav() {
const [categories] = useState([
    {
        name: 'Projects',
        description: 'Samples of Projects ~made by cs',
    },
    { name: 'Contact', description: 'form to email a message to cs'},
    { name: 'Resume', description: 'skills and resume ~cs'},
]);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
        
    return (
    <header className="flex-row px-1">
        <h2>
            <a href="/">
                <span role="img" aria-label="icon"> 📸</span> Welcome to my Page! 
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li>
                    <span>Contact Me</span>
                </li>
                <li>
                    <span>My Projects</span>
                </li>
                <li>
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    </header>
    );

}


export default Nav;