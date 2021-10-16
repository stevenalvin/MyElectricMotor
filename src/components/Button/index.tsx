import React from "react";
import styled from "styled-components";
import { Link as button, Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  title,
  style,
  className,
}: {
  children?: any;
  title: string;
  style?: any;
  className?: string;
}) => {
  return (
    <Link to="test">
      <button style={style} className={className}>
        {title}
      </button>
    </Link>
  );
};

export default Button;
