import React from 'react';

const ColorPicker = () => {
  return (
    <div className="color-selector-container">
      <div className="color-selector default-color">Default</div>
      <div className="color-selector primary-color">Primary</div>
      <div className="color-selector secundary-color">Secundary</div>
      <div className="color-selector danger-color">Danger</div>
    </div>
  );
};

export default ColorPicker;
