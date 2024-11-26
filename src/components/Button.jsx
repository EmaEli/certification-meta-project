import React from "react";
import PropTypes from "prop-types";

function Button({
  onClick, // Optional, no default value here
  label,
  variant = "default",
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
}) {
  // Determine the class for the button based on props
  const buttonClass = `button ${
    variant === "outline"
      ? "button-outline"
      : variant === "ghost"
      ? "button-ghost"
      : ""
  } ${disabled ? "button-disabled" : ""} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled} // Native disabled handling
    >
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      <span className="button-label">{label}</span>
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func, // Non obbligatorio
  label: PropTypes.string.isRequired, // Necessario per identificare il bottone
  variant: PropTypes.oneOf(["default", "outline", "ghost"]), // Stile del bottone
  disabled: PropTypes.bool, // Se disabilitato o meno
  leftIcon: PropTypes.node, // Icona opzionale a sinistra
  rightIcon: PropTypes.node, // Icona opzionale a destra
  className: PropTypes.string, // Classe CSS aggiuntiva
};

export default Button;
