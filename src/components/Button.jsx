import React from 'react';
import PropTypes from 'prop-types';

function Button({
  onClick,
  label,
  variant = 'default',
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className = '', // Aggiunta del supporto per una classe personalizzata
}) {
  const buttonClass = `button ${
    variant === 'outline'
      ? 'button-outline'
      : variant === 'ghost'
      ? 'button-ghost'
      : ''
  } ${disabled ? 'button-disabled' : ''} ${className}`; // Includi la classe personalizzata

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {leftIcon && <span className='icon-left'>{leftIcon}</span>}
      <span className='button-label'>{label}</span>
      {rightIcon && <span className='icon-right'>{rightIcon}</span>}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
  disabled: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  className: PropTypes.string, // Validazione per la classe personalizzata
};

export default Button;
