import React from 'react';

const Button = ({ variant, disabled, boxShadow, color }) => {
  return (
    <button
      className={`btn ${color} ${boxShadow ? 'box-shadow' : ''} ${variant}`}
      disabled={disabled}
    >
      <span class="material-icons">face</span>
      <p>Default</p>
      <span class="material-icons">face</span>
    </button>
  );
};

export default Button;
