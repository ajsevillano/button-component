import { buttonHeaders } from '../../Data';
import Button from '../Button/Index';

const ButtonsShowcase = () => {
  return (
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
  );
};

export default ButtonsShowcase;
