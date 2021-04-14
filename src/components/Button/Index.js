import React from 'react';

const Button = ({ variant, disabled, boxShadow, isChecked }) => {
  return (
    <div>
      <button
        className={`btn ${boxShadow && 'box-shadow'} ${variant}`}
        disabled={disabled}
      >
        Default
      </button>
    </div>
  );
};

export default Button;
