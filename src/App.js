import { useState } from 'react';

import './App.css';
import Button from './components/Button/Index';
import ColorPicker from './components/Color-picker/Index';
import IconPickerGroup from './components/Icon-picker-group/Index';
import Select from './components/Select/Index';

function App() {
  const [button, setbutton] = useState({
    variant: 'default',
    boxShadow: false,
    disabled: false,
    color: 'Default',
    leftIcon: false,
    rightIcon: false,
    size: 'sm',
  });

  const buttonHeaders = {
    default: 'Default',
    outline: 'Variant outline',
    text: 'Variant text',
    disableshadow: 'Disable shadow',
    disabled: 'Default(disabled)',
    textDisabled: 'Variant text(disabled)',
  };

  const selectStyle = [
    {
      label: 'Default',
      value: 'default',
    },
    {
      label: 'Outline',
      value: 'outline',
    },
    {
      label: 'Text',
      value: 'text',
    },
  ];

  const selectSize = [
    {
      label: 'Small',
      value: 'sm',
    },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ];

  const HandleVariantSelect = (e) => {
    const Variant = {
      ...button,
      [e.target.name]: e.target.value,
      color: '',
    };
    setbutton(Variant);
  };

  const HandleSizeSelect = (e) => {
    const Size = {
      ...button,
      [e.target.name]: e.target.value,
    };
    setbutton(Size);
  };

  const handleBoxShadowCheckBox = (e) => {
    const isShadowBoxActive = {
      ...button,
      [e.target.name]: e.target.checked,
    };
    setbutton(isShadowBoxActive);
  };

  const handleDisabledCheckBox = (e) => {
    const isButtonDisabled = {
      ...button,
      [e.target.name]: e.target.checked,
    };
    setbutton(isButtonDisabled);
  };

  return (
    <div className="App">
      <div className="custom-button-container">
        <h1>Custom button</h1>
        <Button
          variant={button.variant}
          boxShadow={button.boxShadow}
          disabled={button.disabled}
          color={button.color}
          leftIcon={button.leftIcon}
          rightIcon={button.rightIcon}
          size={button.size}
        />
        <div className="select-input-container">
          <p>Style</p>
          <Select
            name="variant"
            onChange={HandleVariantSelect}
            selectOptions={selectStyle}
          />
          <Select
            name="size"
            onChange={HandleSizeSelect}
            selectOptions={selectSize}
          />
        </div>

        <div className="checkbox-input-container">
          <input
            type="checkbox"
            name="boxShadow"
            checked={button.boxShadow}
            onChange={handleBoxShadowCheckBox}
          />
          <label htmlFor="boxShadow">Box shadow?</label>
          <input
            type="checkbox"
            name="disabled"
            checked={button.disabled}
            onChange={handleDisabledCheckBox}
          />
          <label htmlFor="disabled">Disabled?</label>
        </div>
        <IconPickerGroup
          header="Left icon"
          button={button}
          setbutton={setbutton}
          side="leftIcon"
          icon1="home"
          icon2="favorite"
          icon3="thumb_up"
          icon4="store"
          icon5="star"
        />
        <IconPickerGroup
          header="Right icon"
          button={button}
          setbutton={setbutton}
          side="rightIcon"
          icon1="light_mode"
          icon2="dark_mode"
          icon3="phone_missed"
          icon4="spa"
          icon5="party_mode"
        />

        {button.variant === 'default' && (
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
        )}
      </div>
      <div className="buttons-display-container">
        <div className="button-container" id="default-button">
          <p>{buttonHeaders.default}</p>
          <Button variant="default" />
        </div>
        <div className="button-container" id="outline-button">
          <p>{buttonHeaders.outline}</p>
          <Button variant="outline" />
        </div>
        <div className="button-container" id="text-button">
          <p>{buttonHeaders.text}</p>
          <Button variant="text" />
        </div>
        <div className="button-container" id="disableShadow-button">
          <p>{buttonHeaders.disableshadow}</p>
          <Button variant="disableShadow" />
        </div>
        <div className="button-container" id="disabled-button">
          <p>{buttonHeaders.disabled}</p>
          <Button variant="default" disabled={true} />
        </div>
        <div className="button-container" id="disabled-button">
          <p>{buttonHeaders.textDisabled}</p>
          <Button variant="text" disabled={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
