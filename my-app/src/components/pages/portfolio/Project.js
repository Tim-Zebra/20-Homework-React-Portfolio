// Displays each individual project

// Effects:
// When mouse hovers over:
// Fade image, show Name (link to deployed page), Github Icon (link to git hub), name of programs used (eg. MERN stack )
// Need 6 apps
import React, {useState} from 'react';
import IconCreator from '../../../utils/IconCreator'

export default function Project({currentProject}) {
// Translates currentProject object to IconCreator expectations
const iconLinkObj= {
  link: currentProject.github,
  image: 'images/iconImages/githubIcon.png'
}

// Mouse enter effects
  const [isShown, setIsShown] = useState(false);
  return (
    <div className='col-lg-6 col-md-9 col-sm-9 col-9 my-3 projectDiv'
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
      {isShown &&
        <div className="projectGithubLink">
          <IconCreator activeIconObj={iconLinkObj}/>
        </div>
      }
    </div>
  );
}