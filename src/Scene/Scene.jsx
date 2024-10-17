import React, { useEffect, useRef } from "react";
import "./Scene.scss"; // Import SCSS
import Tree from "../Tree/Tree";
// Import images
/* import bg from '~@assets/images/bg.jpg';
import hill from '~@assets/images/hill.png';
import tree from '~@assets/images/tree.png'; */
import divider from "@assets/images/divider-drawing.png";
import cart from "@assets/images/cart.png";

function Scene() {
  return (
    <div className="scene">
      <div className="title text">
        <div className="main-experience">
          <span className="choose"> choose </span>
          <h1 className="your "> your </h1>
          <h1 className="experience "> experience </h1>
        </div>

        <div className="divider">
          {" "}
          <img src={divider} />
        </div>
        <div className="sub-produce">
          <h1 className="buy sub-text"> Buy </h1>

          <img className="cart" src={cart} />
          <h1 className="produce sub-text"> our produce </h1>
        </div>
      </div>
      <div className="hill backHill"></div>
      <div className="hill middleHill"></div>
      <div className="hill frontHill">
        <Tree />
      </div>
      {/*     <div className='title-shop text'> 
        <h1 className='main'> Shop </h1>
        <span className='sun'> our fruits </span>
        </div> */}
    </div>
  );
}

export default Scene;
