import { buttonHeaders } from '../../Data';
import Button from '../Button/Index';

const ButtonsShowcase = () => {
  return (
    <div className="buttons-display-container">
      <div className="button-container" id="default-button">
        <p className="headline">{buttonHeaders.default}</p>
        <Button variant="default" color="Default" boxShadow={true} size="sm" />
      </div>
      <div className="button-container" id="outline-button">
        <p className="headline">{buttonHeaders.outline}</p>
        <Button variant="outline" size="sm" />
      </div>
      <div className="button-container" id="text-button">
        <p className="headline">{buttonHeaders.text}</p>
        <Button variant="text" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.disableshadow}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disabled-button">
        <p className="headline">{buttonHeaders.disabled}</p>
        <Button variant="default" disabled={true} size="sm" />
      </div>
      <div className="button-container" id="disabled-button">
        <p className="headline">{buttonHeaders.textDisabled}</p>
        <Button variant="text" disabled={true} size="sm" />
      </div>
      <div className="button-container" id="default-button">
        <p className="headline">{buttonHeaders.startIcon}</p>
        <Button
          variant="default"
          color="Primary"
          leftIcon="local_grocery_store"
          size="sm"
        />
      </div>
      <div className="button-container" id="default-button">
        <p className="headline">{buttonHeaders.endIcon}</p>
        <Button
          variant="default"
          color="Primary"
          rightIcon="local_grocery_store"
          size="sm"
        />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.sm}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.md}</p>
        <Button variant="default" color="Primary" size="md" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.lg}</p>
        <Button variant="default" color="Primary" size="lg" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.colorDefault}</p>
        <Button variant="default" color="Default" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.colorPrimary}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.colorSecundary}</p>
        <Button variant="default" color="Secundary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p className="headline">{buttonHeaders.colorDanger}</p>
        <Button variant="default" color="Danger" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>Created by AJ Sevillano - devchallenges.io</p>
      </div>
    </div>
  );
};

export default ButtonsShowcase;
