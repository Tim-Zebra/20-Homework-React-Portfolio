// Displays each individual project

// Effects:
// When mouse hovers over:
// Fade image, show Name (link to deployed page), Github Icon (link to git hub), name of programs used (eg. MERN stack )
// Need 6 apps
import React from 'react';

const projectObj = {
  project1: {
    title: 'Regex Tutorial',  
    link: 'https://gist.github.com/Tim-Zebra/3670f5235b2fcdd5dbf85251d1f9db89',
    prgms: 'Gist, Regex',
    image:
  },  
  project2: {
    title: 'Tech Blog',  
    link: 'https://github.com/Tim-Zebra/Tech-Blog',
    prgms: 'MVC, express, JawsDB',
    image:
  },
  project3: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
    image:
  },
  project4: {
    title: 'e-Commerce Data Server',  
    link: 'https://github.com/Tim-Zebra/eCommerce-Data-Server',
    prgms: 'SQL, Sequelize'
  },
  project5: {
    title: 'Team Builder',  
    link: 'https://github.com/Tim-Zebra/Team-Builder',
    prgms: 'Node, Jest',
    image:
  },
    project6: {
    title: 'Love/Compatability Finder',  
    link: 'https://tim-zebra.github.io/Compatible-or-Not_Find-true-love-here./',
    prgms: 'APIs, HTML, CSS, JS, Collaboration',
    image:
  },

}

export default function Project() {
  
  
  
  return (
    <div className='projectDiv'>
      <Project />
    </div>
  );
}