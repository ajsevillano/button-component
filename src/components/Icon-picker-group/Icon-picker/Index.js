const IconPicker = ({ icon, button, setbutton, side }) => {
  const resetButton = 'block';
  const handleIconPicker = () => {
    const changeButtonIcon =
      icon !== resetButton
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

  const handleResetButton = icon === resetButton ? 'reset-button' : '';

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
