import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

export default function Home() {
  return (
    <div>
      <h1>Chisty Salazar ~ Web Developer</h1>
      <section className="my-5">
        <h2 id="about">Welcome to My Portfolio!</h2>
        
        <p>My name is Christy Salazar ~  I am a Full Stack Web Developer <span>Please click the links above to get to know me.  I am available for freelance opportunities across multiple platforms.  I look forward to hearing from you!</span>
    </p>
    <img src={coverImage} className="my-2" style={{ width: "40%", height: "20%" }} alt="sunset" />
    </section>
    </div>
    )  
};
  

