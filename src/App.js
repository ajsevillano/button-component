import { useState } from 'react';

import './App.css';
import Button from './components/Button/Index';

function App() {
  const [button, setbutton] = useState({ variant: 'default', boxShadow: true });

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

  return (
    <div className="App">
      <div className="custom-button-container">
        <h1>Custom button</h1>
        <Button variant={button.variant} boxShadow={button.boxShadow} />
        <select name="variant" onChange={HandleVariantSelect}>
          <option value="default">Default</option>
          <option value="outline">OutLine</option>
          <option value="text">Text</option>
        </select>
        <div className="checkbox-input-container">
          <input type="checkbox" name="boxShadow" /> <span>Box Shadow?</span>
        </div>
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
