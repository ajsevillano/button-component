import React from 'react';

const ColorPicker = ({ title, variant, setbutton, button }) => {
  const handleColorPicker = (e) => {
    const changeButtonColor = {
      ...button,
      [e.target.name]: e.target.id,
    };
    setbutton(changeButtonColor);
  };

  return (
    <button
      name="color"
      id={title}
      onClick={handleColorPicker}
      className={`color-selector ${variant}`}
    >
      {title}
    </button>
  );
};

export default ColorPicker;
