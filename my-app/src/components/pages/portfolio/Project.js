// Displays each individual project

// Effects:
// When mouse hovers over:
// Fade image, show Name (link to deployed page), Github Icon (link to git hub), name of programs used (eg. MERN stack )
// Need 6 apps
import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'

export default function Project({currentProject}) {
// Mouse enter effects
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='col-6 my-3 projectDiv'
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)}>
      <img src={currentProject.image} alt="project screen shot" className="projectBackground">
      </img>
      {isShown &&
        <div className="projectProgramsUsed text-center">{currentProject.prgms}</div>
      }
      {isShown && currentProject.deployed !== false &&
        <a href={currentProject.deployed} target="_blank" rel="noreferrer" className="projectDeployedAt text-center">Deployed @</a>
      }
    </div>
  );
}