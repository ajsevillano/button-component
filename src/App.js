import { useState } from 'react';

import './App.css';
import { selectStyle, selectSize } from './Data';
import Button from './components/Button/Index';
import IconPickerGroup from './components/Icon-picker-group/Index';
import Select from './components/Select/Index';
import Input from './components/Input/Index';
import ColorPickerBox from './components/Color-picker-box/Index';
import ButtonsShowcase from './components/Buttons-showcase/Index';

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
          <p>Size</p>
          <Select
            name="size"
            onChange={HandleSizeSelect}
            selectOptions={selectSize}
          />
        </div>
        <div className="checkbox-input-container">
          <Input
            label="Box shadow?"
            name="boxShadow"
            checked={button.boxShadow}
            handleInput={handleBoxShadowCheckBox}
          />
          <Input
            name="disabled"
            label="Disabled?"
            checked={button.disabled}
            handleInput={handleDisabledCheckBox}
          />
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
          <ColorPickerBox button={button} setbutton={setbutton} />
        )}
      </div>
      <ButtonsShowcase />
    </div>
  );
}

export default App;
