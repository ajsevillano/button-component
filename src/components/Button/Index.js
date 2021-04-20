const Button = ({
  variant,
  disabled,
  boxShadow,
  color,
  size,
  leftIcon,
  rightIcon,
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
