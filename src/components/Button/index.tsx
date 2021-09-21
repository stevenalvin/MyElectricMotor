import React from "react";
import styled from "styled-components";
import "./Button.css";

const Button = ({
  children,
  title,
  style,
}: {
  children?: any;
  title: string;
  style?: any;
}) => {
  return <button style={style}>{title}</button>;
};

export default Button;
