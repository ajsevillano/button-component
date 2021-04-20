import IconPicker from '../Icon-picker-group/Icon-picker/Index';

const IconPickerGroup = ({
  header,
  button,
  setbutton,
  side,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => {
  return (
    <div className="icon-picker-container">
      <p className="left-icon">{header}</p>
      <div className="icons">
        <IconPicker
          side={side}
          icon={icon1}
          button={button}
          setbutton={setbutton}
        />
        <IconPicker
          side={side}
          icon={icon2}
          button={button}
          setbutton={setbutton}
        />
        <IconPicker
          side={side}
          icon={icon3}
          button={button}
          setbutton={setbutton}
        />
        <IconPicker
          side={side}
          icon={icon4}
          button={button}
          setbutton={setbutton}
        />
        <IconPicker
          side={side}
          icon={icon5}
          button={button}
          setbutton={setbutton}
        />
        <IconPicker
          side={side}
          icon="block"
          button={button}
          setbutton={setbutton}
        />
      </div>
    </div>
  );
};

export default IconPickerGroup;
