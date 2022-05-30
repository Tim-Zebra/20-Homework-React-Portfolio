// Displays each individual project

// Effects:
// When mouse hovers over:
// Fade image, show Name (link to deployed page), Github Icon (link to git hub), name of programs used (eg. MERN stack )
// Need 6 apps
import React from 'react';

const projectObj = {
  project1: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
    image:
  },
  project2: {
    title: 'Regex Tutorial',  
    link: 'https://gist.github.com/Tim-Zebra/3670f5235b2fcdd5dbf85251d1f9db89',
    prgms: 'Gist, Regex',
    image:
  },
  project3: {
    title: 'e-Commerce Data Server',  
    link: 'https://github.com/Tim-Zebra/eCommerce-Data-Server',
    prgms: 'SQL, Sequelize'
  },
  project4: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
    image:
  },
  project5: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
    image:
  },
  project6: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
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