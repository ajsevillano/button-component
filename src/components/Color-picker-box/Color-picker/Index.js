const ColorPicker = ({ title, variant, handleColorPicker }) => {
  return (
    <button
      name="color"
      value={title}
      onClick={handleColorPicker}
      className={`color-selector ${variant}`}
    >
      {title}
    </button>
  );
};

export default ColorPicker;
