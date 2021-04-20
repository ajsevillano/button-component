const Input = ({ name, label, checked, handleInput }) => {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleInput}
      />
      <label htmlFor={name}>{label}</label>
    </>
  );
};

export default Input;
