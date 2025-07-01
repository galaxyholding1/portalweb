import React from "react";
import "./Button.css";

/**
 * Button Component
 *
 * @component
 * @description Renders a customizable button component with various styling and behavior options.
 *
 * @param {object} props - The component props.
 * @param {function} [props.onClick] - The click event handler for the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.className=""] - Additional CSS classes to apply to the button.
 * @param {"primary" | "secondary" | "tertiary"} [props.variant="primary"] - The visual style variant of the button.
 * @param {boolean} [props.fullWidth=false] - If true, the button will take up the full width of its container.
 * @param {boolean} [props.disabled=false] - If true, the button will be disabled and unclickable.
 * @returns {JSX.Element} A button HTML element.
 */
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