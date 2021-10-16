import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import StyledHero from "../StyledHero";
import Title from "../Title";
import defaultImg from "../../asset/image/Default_Hero.jpg";
import motorZ from "../../asset/image/motorZ.jpg";
import motorY from "../../asset/image/motorY.jpg";
import "./featuredMotor.css";

interface ImageProps {
  img: string;
}

const StyledSection = styled.section<ImageProps>`
  min-height: 400px;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
`;

const FeaturedMotor = ({ title, img }: { title: string; img: string }) => {
  const [featuredMotors, setFeatureMotors] = useState([
    {
      img: motorZ,
      title: "MotorX",
    },
    {
      img: motorY,
      title: "MotorY",
    },
  ]);
  return (
    <div className="featured-motor-container">
      {featuredMotors.map((featuredMotor) => {
        return (
          <StyledSection className="featured-motor" img={featuredMotor.img}>
            <div className="overlay">
              <h2 className="featured-motor-title">{featuredMotor.title}</h2>
              <Button title="Learn More" className="motor-link" />
            </div>
          </StyledSection>
        );
      })}
    </div>
  );
};

export default FeaturedMotor;
