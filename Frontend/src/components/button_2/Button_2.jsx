import React from "react";
import "./Button_2.css";

const Button_2 = ({ varient, className, children }) => {
  return (
    <button
      type={varient}
      className={className ? `button-style-2 ${className}` : "button-style-2"}
    >
      {children}
    </button>
  );
};

export default Button_2;
