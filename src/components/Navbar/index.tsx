import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const product = [
    { title: "MotorX", path: "/MotorX" },
    { title: "MotorY", path: "/MotorY" },
    { title: "MotorZ", path: "/MotorZ" },
  ];
  const menus = [{ title: "Shop" }, { title: "About" }];
  const navigation = () => {
    return (
      <ul>
        {product.map((link) => {
          return (
            <li className="nav-model">
              <NavLink to={link.path} activeClassName="active-link">
                {link.title}
              </NavLink>
            </li>
          );
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
      <div className="logo">
        <Link to="/">MyElectric</Link>
      </div>
      <div className="navigation">{navigation()}</div>
      <div className="menu-wrapper">{menu()}</div>
    </nav>
  );
};

export default Navbar;
