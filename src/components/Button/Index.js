import React from 'react';

const Button = ({ variant }) => {
  return (
    <>
      <button className={`btn ${variant}`}>Default</button>
    </>
  );
};

export default Button;
