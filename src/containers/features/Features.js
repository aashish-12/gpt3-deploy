import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto dolore quaerat, aliquid in voluptates!",
  },
  {
    title: "Becomes the tended active",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto dolore quaerat, aliquid in voluptates!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto dolore quaerat, aliquid in voluptates!",
  },
  {
    title: "Really boy law county",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos architecto dolore quaerat, aliquid in voluptates!",
  },
];
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Requested Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => 
          <Feature
            key={feature.title + index}
            title={feature.title}
            text={feature.text}
          />
        )}
      </div>
    </div>
  );
};

export default Features;
