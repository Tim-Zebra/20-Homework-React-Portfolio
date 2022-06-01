import React from 'react';

export default function activeIcon({activeIconObj}) {
  console.log('This happened', activeIconObj);
  return (
    <div className="activeIcon d-inline">
      <a href={activeIconObj.link}>
        <img src={activeIconObj.image}></img>
      </a>
    </div>
  );
}