import React, { useState } from 'react';
import photo from "../../assets/small/0.png";

function Projects() {
    const [photos] = useState([
        {
            name: "Pet Portal",
            description: "A functional application designed for pet care providers to log in and track various actions utilizing and SQL database.  This dual function app also allows pet owners to view log in and view appointment, pet information, and communicate with pet care staff.",
            url: "https://vet-pet-portal.herokuapp.com/",
            gitRepo: "https://github.com/Sam-Antics/pet-zone",
        },
        { name: "Event Radar", 
          description: "An interactive application that returns the event and weather information base on user request",
          url: "https://wumbo-dot.github.io/EventRadar/",
          gitRepo: "https://github.com/Wumbo-dot/EventRadar",
        },
        {name: "Note Taker", 
        description: "Personal app designed to allow users to take and save quick notes",
        url: "https://salty-refuge-08073.herokuapp.com/",
        gitRepo:"https://github.com/christys122/note-taker-1",
        },
        {name: "Work Day Scheduler", 
        description: "Daily planning App designed for daily use",
        url: "https://christys122.github.io/task-scheduler/",
        gitRepo:"https://github.com/christys122/task-scheduler",
        },
        {name: "Weather", 
        description: "App to retrive weather forcast based on requested city",
        url: "https://christys122.github.io/Weather-Dashboard/",
        gitRepo:"https://github.com/christys122/Weather-Dashboard",
        },
        {name: "Password Generator", 
        description: "Random Password generator based on user criteria",
        url: "https://christys122.github.io/Password-generator/",
        gitRepo:"https://github.com/christys122/Password-generator",
        },
        
    ]);
    return (
        <div className="flex-row">
            {photos.map((image, i) => (
              <img
            src={require(`../../assets/small/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1 width: 10px"
            key={image.name}
            />
            ))}
        </div>
    )
}



export default Projects;