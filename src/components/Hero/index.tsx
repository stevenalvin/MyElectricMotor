import React, { ReactNode } from "react";
import CSS from "csstype";
import Navbar from "../Navbar";
import "./hero.css";

type propType = {
  children: ReactNode;
  img: string;
};
const Hero = ({ children, img }: propType) => {
  const bg: CSS.Properties = {
    background: `url(${img}) center/cover no-repeat`,
    minHeight: "calc(100vh - 66px)",
  };
  return (
    <div className="hero" style={bg}>
      {children}
    </div>
  );
};

export default Hero;
