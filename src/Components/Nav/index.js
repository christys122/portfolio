import React from 'react';

function Nav() {

    return (
    <header>
        <h2>
            <a href="/">
                <span role="img" aria-label="icon"> 📸</span> Welcome
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