import React from 'react';
import avatar from '../../assets/cover/Avatar-Christy.jpg';

const About = ()=> {
    return (
    <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={avatar} className="my-2" style={{ width: "20%" }} alt="CS" />
        <p>My name is Christy Salazar ~  I am a Full Stack Web Developer with skills in multiple technologies. I am hardworking, not afraid to put in the time to get things done. I deliver on schedule with the right specs.
        I am extremely creative with design and application, very open to thinking outside the box.  Whether working with a team or alone I am dedicated to getting the best results while being mindful of client expectations.
        I enjoy learning new things and put them into practice while not letting go of the tried and true, if it works I strive to make it better without reinventing the wheel.
        I do my work right and with integrity.
    </p>
    </section>
    )  
}



export default About;

