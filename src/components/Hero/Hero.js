import React from "react";
import "./Hero.css";
import sitev1 from "../../images/sitev-1.jpg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text-wrapper">
        <h1 className="hero-h1"> Grow your business faster</h1>
        <p className="hero-p">
          Lain web design helps small business owners expand their services ...
        </p>
        <div className="hero-btn-wrapper">
          <button className="hero-btn" type="submit">
            Let's Connect
          </button>
        </div>
      </div>

      <div className="hero-img-wrapper">
        <img className="hero-img" alt="downtown oklahoma" src={sitev1} />
        <a
          className="a-link"
          href="https://www.freepik.com/free-vector/couple-professionals-analyzing-graphs_6974868.htm#query=business&position=3&from_view=search&track=sph"
        >
          Image by pch.vector
        </a>
        <p className="a-link">on Freepik</p>
      </div>
    </div>
  );
};

export default Hero;
