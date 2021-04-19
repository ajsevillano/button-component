import ColorPicker from './Color-picker/Index';

const ColorPickerBox = ({ button, setbutton, handleColorPicker }) => {
  return (
    <div className="color-selector-container">
      <ColorPicker
        title="Default"
        variant="default-color"
        setbutton={setbutton}
        button={button}
        handleColorPicker={handleColorPicker}
      />
      <ColorPicker
        title="Primary"
        variant="primary-color"
        setbutton={setbutton}
        button={button}
        handleColorPicker={handleColorPicker}
      />
      <ColorPicker
        title="Secundary"
        variant="secundary-color"
        setbutton={setbutton}
        button={button}
        handleColorPicker={handleColorPicker}
      />
      <ColorPicker
        title="Danger"
        variant="danger-color"
        setbutton={setbutton}
        button={button}
        handleColorPicker={handleColorPicker}
      />
    </div>
  );
};

export default ColorPickerBox;
