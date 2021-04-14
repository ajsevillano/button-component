import React from 'react';

const Button = ({ variant }) => {
  return (
    <div>
      <button className={`btn ${variant}`}>Default</button>
    </div>
  );
};

export default Button;
