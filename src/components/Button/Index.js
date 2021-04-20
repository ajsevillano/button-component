/**
 * Component for rendering the button component.
 *
 * @param {string} variant - defines the type of button, valid values: default,outline,text.
 * @param {boolean} boxShadow - defines if boxShadow is active or not.
 * @param {boolean} disabled - defines if the button is active or not.
 * @param {string} color - defines the 4 diferent colour variants: default,primary,secundary,danger
 * @param {string} leftIcon - defines if there is an icon on the left side of the button, possible values on: https://fonts.google.com/icons?selected=Material+Icons
 * @param {string} rightIcon -  defines if there is an icon on the right side of the button, possible values on: https://fonts.google.com/icons?selected=Material+Icons
 * @param {string} size - defines the size of the button, valid values: sm,md,lg
 *
 * @returns The formated button
 *
 */

const Button = ({
  variant,
  boxShadow,
  disabled,
  color,
  leftIcon,
  rightIcon,
  size,
}) => {
  return (
    <button
      className={`btn ${size} ${color} ${
        boxShadow ? 'box-shadow' : ''
      } ${variant}`}
      disabled={disabled}
    >
      {leftIcon && <span className="material-icons">{leftIcon}</span>}
      <p>Default</p>
      {rightIcon && <span className="material-icons">{rightIcon}</span>}
    </button>
  );
};

export default Button;
