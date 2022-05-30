// Header "Resume"
// Download Resume option
// List of proficiences
// Front End
// Back End
import React from 'react';
import pdf from '../../assets/resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div>Download my Resume <a href={pdf} target="_blank" rel="noreferrer">Here</a></div>
      <div>
        <h4>
          Front-End Proficiences
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Boostrap</li>
          </ul>
        </h4>
      </div>
      <div>
        <h4>
          Back-End Proficiences
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>mySQL, Sequelize</li>
            <li>noSQL, MongoDB,Mongoose</li>
            <li>REST</li>
          </ul>
        </h4>
      </div>
    </div>
  );
}