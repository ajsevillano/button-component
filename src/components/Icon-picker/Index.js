import React from 'react';

const IconPicker = ({ icon, button, setbutton, side }) => {
  const handleIconPicker = (e) => {
    const changeButtonIcon = {
      ...button,
      [side]: icon,
    };
    setbutton(changeButtonIcon);
  };
  return (
    <span onClick={handleIconPicker} className="material-icons">
      {icon}
    </span>
  );
};

export default IconPicker;
