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

export const handleBoxShadowCheckBox = (e, button, setbutton) => {
  const isShadowBoxActive = {
    ...button,
    [e.target.name]: e.target.checked,
  };
  setbutton(isShadowBoxActive);
};

export const handleDisabledCheckBox = (e, button, setbutton) => {
  const isButtonDisabled = {
    ...button,
    [e.target.name]: e.target.checked,
  };
  setbutton(isButtonDisabled);
};
