/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export default Button;
