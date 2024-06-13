import React, { useEffect, useRef } from 'react';
import './Scene.css'; // Import CSS
// Import images
import bg from '../assets/images/bg.jpg';
import hill from '../assets/images/hill.png';
import tree from '../assets/images/tree.png';

function Scene() {
    return (
      <div className="scene">
        <div className="hill backHill"></div>
        <div className="hill middleHill"></div>
        <div className="hill frontHill">
          <img src={tree} alt="Tree" className="tree" />
        </div>
      </div>
    );
  }
  
  export default Scene;