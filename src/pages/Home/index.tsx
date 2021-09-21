import React from "react";
import Navbar from "../../components/Navbar";
import hero from "../asset/hero.jpg";
import Hero from "../../components/Hero";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero img="/image/hero.jpg">
        <Button title="clckckck" />
        <Button title="click me" />
      </Hero>
      <Hero img="/image/hero.jpg">
        <Button title="clckckck" />
        <Button title="click me" />
      </Hero>
    </div>
  );
};

export default Home;
