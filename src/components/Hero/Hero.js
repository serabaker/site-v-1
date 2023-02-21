import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-h1"> Grow your business faster</h1>
        <p className="hero-p">
          Lain web design helps small business owners expand their services ...
        </p>
      </div>
      <div className="hero-btn">
        <button type="submit">Let's Connect</button>
      </div>
      <div className="hero-img">
        <img alt="downtown oklahoma" src="" />
      </div>
    </div>
  );
};

export default Hero;
