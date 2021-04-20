import { buttonHeaders } from '../../Data';
import Button from '../Button/Index';

const ButtonsShowcase = () => {
  return (
    <div className="buttons-display-container">
      <div className="button-container" id="default-button">
        <p>{buttonHeaders.default}</p>
        <Button variant="default" color="Default" boxShadow={true} size="sm" />
      </div>
      <div className="button-container" id="outline-button">
        <p>{buttonHeaders.outline}</p>
        <Button variant="outline" size="sm" />
      </div>
      <div className="button-container" id="text-button">
        <p>{buttonHeaders.text}</p>
        <Button variant="text" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.disableshadow}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disabled-button">
        <p>{buttonHeaders.disabled}</p>
        <Button variant="default" disabled={true} size="sm" />
      </div>
      <div className="button-container" id="disabled-button">
        <p>{buttonHeaders.textDisabled}</p>
        <Button variant="text" disabled={true} />
      </div>
      <div className="button-container" id="default-button">
        <p>{buttonHeaders.startIcon}</p>
        <Button
          variant="default"
          color="Primary"
          leftIcon="local_grocery_store"
          size="sm"
        />
      </div>
      <div className="button-container" id="default-button">
        <p>{buttonHeaders.endIcon}</p>
        <Button
          variant="default"
          color="Primary"
          rightIcon="local_grocery_store"
          size="sm"
        />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.sm}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.md}</p>
        <Button variant="default" color="Primary" size="md" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.lg}</p>
        <Button variant="default" color="Primary" size="lg" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.colorDefault}</p>
        <Button variant="default" color="Default" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.colorPrimary}</p>
        <Button variant="default" color="Primary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.colorSecundary}</p>
        <Button variant="default" color="Secundary" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>{buttonHeaders.colorDanger}</p>
        <Button variant="default" color="Danger" size="sm" />
      </div>
      <div className="button-container" id="disableShadow-button">
        <p>Created by AJ Sevillano - devchallenges.io</p>
      </div>
    </div>
  );
};

export default ButtonsShowcase;
