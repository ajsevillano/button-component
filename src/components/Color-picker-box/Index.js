import ColorPicker from './Color-picker/Index';

const ColorPickerBox = ({ button, setbutton }) => {
  return (
    <div className="color-selector-container">
      <ColorPicker
        title="Default"
        variant="default-color"
        setbutton={setbutton}
        button={button}
      />
      <ColorPicker
        title="Primary"
        variant="primary-color"
        setbutton={setbutton}
        button={button}
      />
      <ColorPicker
        title="Secundary"
        variant="secundary-color"
        setbutton={setbutton}
        button={button}
      />
      <ColorPicker
        title="Danger"
        variant="danger-color"
        setbutton={setbutton}
        button={button}
      />
    </div>
  );
};

export default ColorPickerBox;
