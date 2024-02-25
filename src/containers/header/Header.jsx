import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI.
        </h1>
        <p>
          Explore boundless creativity with GPT-3 OpenAI on our website. Unleash
          the power of advanced AI for innovative solutions and personalized
          experiences. Join us in shaping the future, one brilliant idea at a
          time.
        </p>
        <div className="header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt="people" />
          <p>1600+ people have requested access in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
