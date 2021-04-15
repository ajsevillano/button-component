import { useState } from 'react';

import './App.css';
import Button from './components/Button/Index';
import ColorPicker from './components/Color-picker/Index';

function App() {
  const [button, setbutton] = useState({
    variant: 'default',
    boxShadow: false,
    disabled: false,
  });

  const buttonHeaders = {
    default: 'Default',
    outline: 'Variant outline',
    text: 'Variant text',
    disableshadow: 'Disable shadow',
    disabled: 'Default(disabled)',
    textDisabled: 'Variant text(disabled)',
  };

  const HandleVariantSelect = (e) => {
    const Variant = {
      ...button,
      [e.target.name]: e.target.value,
    };
    setbutton(Variant);
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
    console.log(e.target.name);
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
        />
        <select name="variant" onChange={HandleVariantSelect}>
          <option value="default">Default</option>
          <option value="outline">OutLine</option>
          <option value="text">Text</option>
        </select>
        <div className="checkbox-input-container">
          <input
            type="checkbox"
            name="boxShadow"
            checked={button.boxShadow}
            onChange={handleBoxShadowCheckBox}
          />
          <label htmlFor="boxShadow">Box Shadow?</label>
          <input
            type="checkbox"
            name="disabled"
            checked={button.disabled}
            onChange={handleDisabledCheckBox}
          />
          <label htmlFor="disabled">Disabled?</label>
        </div>
        <ColorPicker />
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
