import React from "react";
import "./title.css";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  );
};

export default Title;
