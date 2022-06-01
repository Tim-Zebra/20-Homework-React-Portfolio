// Displays each individual project

// Effects:
// When mouse hovers over:
// Fade image, show Name (link to deployed page), Github Icon (link to git hub), name of programs used (eg. MERN stack )
// Need 6 apps
import React from 'react';

export default function Project({currentProject}) {
  console.log('This happened', currentProject.image);
  return (
    <div className='col-6 my-3 projectDiv'>
      <img src={currentProject.image} alt="project screen shot" className="projectBackground"></img>
      <a href={currentProject.link} className="linkProjectProgramsUsed hide"><div className="projectProgramsUsed">{currentProject.prgms}</div></a>
    </div>
  );
}