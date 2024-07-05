import React, { useEffect, useRef } from 'react';
import './Tree.css'; // Import CSS


function Tree() {
  return (
    <div className="tree">
      <div className='trunk' />
      <div className='leaves'>
        <div class="leaf leaf1 ver1"></div>
        <div class="leaf leaf2 ver2"></div>
        <div class="leaf leaf3 ver1 "></div>
        <div class="leaf leaf4 ver2"></div>
        <div class="leaf leaf5 ver1"></div>
        <div class="leaf leaf6 ver2"></div>
        <div class="leaf leaf7 ver1"></div>
        <div class="leaf leaf8 ver2"></div>
      </div>
    </div>
  );
}

export default Tree;