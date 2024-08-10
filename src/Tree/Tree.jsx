import React, { useEffect, useRef } from 'react';
import './Tree.css'; // Import CSS

import kiwi from '../assets/images/kiwi.jpg';
import teambuilding from '../assets/images/teambuilding.jpg';
import beach from '../assets/images/beach.jpg';


function Tree() {
  return (
    <div className="tree">
      <div className='trunk' />
      <div className='leaves'>
        <div class="leaf leaf1 ver1"></div>
        <div class="leaf leaf2 ver2"></div>
        <div class="leaf leaf3 ver1 "></div>
        <div class="leaf leaf4 ver2"></div>
        <div class="leaf leaf5 ver1 large">
          <div className='text'>  <span style={{whiteSpace:"pre-line"}}>Team Building </span></div>
          <img src={teambuilding} alt="Teambuilding Image"  />
        </div>
        <div class="leaf leaf6 ver2"></div>
        <div class="leaf leaf7 ver1"></div>
        <div class="leaf leaf8 ver2 large">
         <div className='text'>  <span>Beach</span></div>
          <img src={beach} alt="Beach Image"  />
        </div>
        <div class="leaf leaf9 ver1 large">
          <div className='text'> <span style={{whiteSpace:"pre-line"}}>Kiwi SHOP</span></div>
         <img src={kiwi} alt="Kiwi Image" />
        </div>
      </div>
    </div>
  );
}

export default Tree;