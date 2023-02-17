import React from "react";
import "./hero.scss";
import { slide03 } from "../../assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={slide03} alt="Store banner" className="gallery__photo" />
      </div>
    </div>
  );
};

export default Hero;
