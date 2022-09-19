import React from 'react';
import ResumeShot from '../../assets/Resume/ResumeShot.png';

const Resume = ()=> {
    return (
    <section className="my-5">
        <h1 id="about">Skills and Resume</h1>
        
        <ul className="mg-4-bottom-all mg-4-bottom">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Git</li>
                <li>JQuery</li>
                <li>React</li>
                <li>GraphQL</li>
                <li>Sequelize</li>
                <li>Handlebars</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                
            </ul>
        <img src={ResumeShot} className="my-2" style={{ width: "40%" }} alt="resume" />
        <p>
        
    </p>
    </section>
    )  
}

    export default Resume;