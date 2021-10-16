import React, { ReactNode } from "react";
import CSS from "csstype";
import Navbar from "../Navbar";
import "./hero.css";

type propType = {
  children: ReactNode;
  img: string;
};
const Hero = ({ children, img }: propType) => {
  return (
    <div className="hero">
      <img src={img} className="hero-background"></img>
      {children}
    </div>
  );
};

export default Hero;
