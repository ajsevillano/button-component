export const HandleVariantSelect = (e, button, setbutton) => {
  const Variant = {
    ...button,
    [e.target.name]: e.target.value,
    color: '',
  };
  setbutton(Variant);
};

export const HandleSizeSelect = (e, button, setbutton) => {
  const Size = {
    ...button,
    [e.target.name]: e.target.value,
  };
  setbutton(Size);
};

export const handleCheckBoxes = (e, button, setbutton) => {
  const changeCheckBoxes = {
    ...button,
    [e.target.name]: e.target.checked,
  };
  setbutton(changeCheckBoxes);
};
