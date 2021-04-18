const Select = ({ name, onChange, selectOptions }) => {
  return (
    <select name={name} onChange={onChange}>
      {selectOptions.map((option) => {
        return (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
