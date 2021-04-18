export const handleSelects = (e, button, setbutton) => {
  const changeSelect = {
    ...button,
    [e.target.name]: e.target.value,
    color: '',
  };
  setbutton(changeSelect);
};

export const handleCheckBoxes = (e, button, setbutton) => {
  const changeCheckBoxes = {
    ...button,
    [e.target.name]: e.target.checked,
  };
  setbutton(changeCheckBoxes);
};
