// Header "Portfolio"
// Images for each project wanting to display

const projectObj = {
  project1: {
    title: 'Regex Tutorial',  
    link: 'https://gist.github.com/Tim-Zebra/3670f5235b2fcdd5dbf85251d1f9db89',
    prgms: 'Gist, Regex',
    image: './portfolio/projectImages/regex.png',
  },  
  project2: {
    title: 'Tech Blog',  
    link: 'https://github.com/Tim-Zebra/Tech-Blog',
    prgms: 'MVC, express, JawsDB',
    image: './portfolio/projectImages/techBlog.png',
  },
  project3: {
    title: 'Social Network',  
    link: 'https://github.com/Tim-Zebra/Social-Network',
    prgms: 'NoSQL: MongoDB, Mongoose',
    image: './portfolio/projectImages/socialNetwork.png',
  },
  project4: {
    title: 'e-Commerce Data Server',  
    link: 'https://github.com/Tim-Zebra/eCommerce-Data-Server',
    prgms: 'SQL, Sequelize',
    image: './portfolio/projectImages/eCommerece.png',
  },
  project5: {
    title: 'Team Builder',  
    link: 'https://github.com/Tim-Zebra/Team-Builder',
    prgms: 'Node, Jest',
    image: './portfolio/projectImages/teamBuilder.gif',
  },
    project6: {
    title: 'Love/Compatability Finder',  
    link: 'https://tim-zebra.github.io/Compatible-or-Not_Find-true-love-here./',
    prgms: 'APIs, HTML, CSS, JS, Collaboration',
    image: './portfolio/projectImages/compatibility.gif',
  },
}

import React from 'react';
import Project from './portfolio/Project'
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Project currentProject={projectObj.project1}/>
      <Project currentProject={projectObj.project2}/>
      <Project currentProject={projectObj.project3}/>
      <Project currentProject={projectObj.project4}/>
      <Project currentProject={projectObj.project5}/>
      <Project currentProject={projectObj.project6}/>
    </div>
  );
}