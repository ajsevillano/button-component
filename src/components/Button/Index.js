import React from 'react';

const Button = ({ variant, disabled }) => {
  return (
    <div>
      <button className={`btn ${variant}`} disabled={disabled}>
        Default
      </button>
    </div>
  );
};

export default Button;
