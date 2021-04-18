import React from 'react';

const ColorPicker = ({ title, variant, setbutton, button }) => {
  const handleColorPicker = (e) => {
    const changeButtonColor = {
      ...button,
      color: e.target.id,
    };
    setbutton(changeButtonColor);
  };
  return (
    <div
      id={title}
      onClick={handleColorPicker}
      className={`color-selector ${variant}`}
    >
      {title}
    </div>
  );
};

export default ColorPicker;
