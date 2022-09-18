import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = ()=> {
    return (
    <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={coverImage} className="my-2" style={{ width: "80%" }} alt="sunset" />
        <p>I am a Full Stack Web Developer</p>
    </section>
    )  
}



export default About;

