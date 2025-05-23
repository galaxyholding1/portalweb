import React from "react";
import "./Button.css";

const Button = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${
        fullWidth ? "full-width" : ""
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
