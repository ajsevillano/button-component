import React from 'react';

const Button = ({ variant, disabled, boxShadow, color }) => {
  return (
    <div>
      <button
        className={`btn ${color}-color ${
          boxShadow ? 'box-shadow' : ''
        } ${variant}`}
        disabled={disabled}
      >
        Default
      </button>
    </div>
  );
};

export default Button;
