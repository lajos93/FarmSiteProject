import React, { useEffect, useRef } from "react";
import "./Tree.scss"; // Import SCSS
import "./Grass.scss"; // Import SCSS

import kiwi from "../assets/images/kiwi.jpg";
import fruits from "../assets/images/fruits.jpg";
import teambuilding from "../assets/images/teambuilding.jpg";
import beach from "../assets/images/beach.jpg";
import grass from "../assets/images/grass/2.png";
import leaf1 from "../assets/images/leaf1.png";


function Tree() {
  const Grass = () => (
    <div className="grass">
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
      <img src={grass} alt="grass" />
    </div>
  );

  return (
    <div className="tree">
         <Grass/> 
      <div className="trunk" />
      <div className="leaves">
        <div class="leaf leaf1 ver1"></div>
        <div class="leaf leaf2 ver2"></div>
        <div class="leaf leaf3 ver1 "></div>
        <div class="leaf leaf4 ver2"></div>
        <div class="leaf leaf5 ver1 large">
          <div className="text">
            <span style={{ whiteSpace: "pre-line" }}>Team Building </span>
          </div>
          <img src={teambuilding} alt="Teambuilding Image" />
        </div>
        <div class="leaf leaf6 ver2"></div>
        <div class="leaf leaf7 ver1"></div>
        <div class="leaf leaf8 ver2 large">
          <div className="text">
            <span>Beach</span>
          </div>
          <img src={beach} alt="Beach Image" />
        </div>
        <div class="leaf leaf9 ver1 large">
          <div className="text">
            <span style={{ whiteSpace: "pre-line" }}>
              Fruit
              <br />
              SHOP
            </span>
          </div>
          {/* <img src={kiwi} alt="Kiwi Image" /> */}
          <img src={fruits} alt="Kiwi Image" />
        </div>
        <div class="leaf leaf10 ver2"></div>
        <div class="leaf leaf11 ver2"></div>
      </div>
      <div className="fruits">
        <div className="fruit fruit1  fruit-ver1 "></div> 
        <div className="fruit fruit2  fruit-ver2 "></div>
        <div className="fruit animation  butterly "></div>
      </div>
    </div>
  );
}

export default Tree;
