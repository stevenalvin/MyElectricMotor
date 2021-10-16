import React from "react";
import hero from "../asset/hero.jpg";
import Button from "../../components/Button";
import heroImage from "../../asset/image/motorX.jpg";
import motorYImage from "../../asset/image/motorY.jpg";
import solarPanelImg from "../../asset/image/solar_panel.jpg";
import StyledHero from "../../components/StyledHero";
import "./home.css";
import FeaturedMotor from "../../components/FeaturedMotor";
import UpcomingProduct from "../../components/UpcomingProduct";

const Home = () => {
  return (
    <>
      <StyledHero img={heroImage}>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Embrace the future</h1>
          <div className="home-hero-btn">
            <Button title="Learn More" />
            <Button title="Pre-Order" />
          </div>
        </div>
      </StyledHero>
      <FeaturedMotor title="MotorX" img={motorYImage} />
      <UpcomingProduct />
      <StyledHero img={solarPanelImg}>
        <div className="home-hero-content">
          <h1 className="home-hero-title">Embrace the future</h1>
          <Button title="Learn More" />
          <Button title="Pre-Order" />
        </div>
      </StyledHero>
    </>
  );
};

export default Home;
