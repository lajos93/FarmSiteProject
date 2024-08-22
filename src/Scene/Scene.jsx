import React, { useEffect, useRef } from 'react';
import './Scene.css'; // Import CSS
import Tree from '../Tree/Tree';
// Import images
/* import bg from '../assets/images/bg.jpg';
import hill from '../assets/images/hill.png';
import tree from '../assets/images/tree.png'; */


function Scene() {
  return (
    <div className="scene">
      <div className='title'> 
        <span className='choose text'>  choose </span>
        <h1 className='your text'> your </h1> 
        <h1 className='experience text'> experience </h1></div>
      <div className="hill backHill"></div>
      <div className="hill middleHill"></div>
      <div className="hill frontHill">
        <Tree />
      </div>
    </div>
  );
}

export default Scene;