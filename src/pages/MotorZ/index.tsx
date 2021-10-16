import Hero from "../../components/Hero";
import Button from "../../components/Button";

const MotorZ = () => {
  return (
    <div>
      <Hero img="/image/hero.jpg">
        <Button title="MotorZ" />
        <Button title="click me" />
      </Hero>
      <Hero img="/image/hero.jpg">
        <Button title="clckckck" />
        <Button title="click me" />
      </Hero>
    </div>
  );
};

export default MotorZ;
