import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Acces to Get Started</h4>
        <h1 className="gradient__text">The possivilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas quaerat voluptatibus accusantium nam suscipit ipsa, sit in atque fuga dolore, neque aliquam veniam velit quibusdam explicabo pariatur non repudiandae cupiditate rem mollitia tempora magnam.</p>
        <h4>Request Early Acces to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
