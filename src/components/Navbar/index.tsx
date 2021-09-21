import React from "react";
import "./index.css";
const Navbar = () => {
  const product = [
    { title: "MotorX" },
    { title: "MotorY" },
    { title: "MotorZ" },
  ];
  const menus = [{ title: "Shop" }, { title: "About" }];
  const navigation = () => {
    return (
      <ul>
        {product.map((link) => {
          return <li className="nav-model">{link.title}</li>;
        })}
      </ul>
    );
  };
  const menu = () => {
    return (
      <ul className="menu-ul">
        {menus.map((link) => {
          return <li className="menu">{link.title}</li>;
        })}
      </ul>
    );
  };

  return (
    <nav className="nav-wrapper">
      <div className="logo">MyElectric</div>
      <div className="navigation">{navigation()}</div>
      <div className="menu-wrapper">{menu()}</div>
    </nav>
  );
};

export default Navbar;
