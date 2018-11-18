export const SHOW_DROPDOWN = "SHOW_DROPDOWN";
export const HIDE_DROPDOWN = "HIDE_DROPDOWN";

export const showDropdown = () => {
  return {
    type: SHOW_DROPDOWN,
  };
};

export const hideDropdown = () => {
  return {
    type: HIDE_DROPDOWN,
  };
};
