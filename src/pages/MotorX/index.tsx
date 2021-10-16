import Hero from "../../components/Hero";
import Button from "../../components/Button";

const MotorX = () => {
  return (
    <div>
      <Hero img="/image/hero.jpg">
        <Button title="Motorx" />
        <Button title="click me" />
      </Hero>
      <Hero img="/image/hero.jpg">
        <Button title="clckckck" />
        <Button title="click me" />
      </Hero>
    </div>
  );
};

export default MotorX;
