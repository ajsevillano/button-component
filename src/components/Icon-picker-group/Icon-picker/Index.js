import React from 'react';

const IconPicker = ({ icon, button, setbutton, side, reset }) => {
  const handleIconPicker = () => {
    const changeButtonIcon = !reset
      ? {
          ...button,
          [side]: icon,
        }
      : {
          ...button,
          [side]: false,
        };
    setbutton(changeButtonIcon);
  };

  const handleActiveIcon =
    icon === button.leftIcon || icon === button.rightIcon ? 'active' : '';

  const handleResetButton = reset ? 'reset-button' : '';

  return (
    <span
      onClick={handleIconPicker}
      className={`material-icons ${handleResetButton} ${handleActiveIcon}`}
    >
      {icon}
    </span>
  );
};

export default IconPicker;
