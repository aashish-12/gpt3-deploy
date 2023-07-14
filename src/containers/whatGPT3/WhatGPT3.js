import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eius, optio pariatur velit amet molestiae id rerum, atque provident consequatur sequi! Minus ullam amet impedit, sunt cumque cupiditate nam nostrum quos iste quisquam tempore."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo eos explicabo veniam. Necessitatibus, maiores."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellat mollitia aliquid fuga rerum pariatur praesentium officiis quaerat unde cupiditate."
        />
        <Feature
          title="Education"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ad iure quia!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
